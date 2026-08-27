import {
  parsePublishedNote,
  renderPublishedNote,
  serializeMetadata,
} from "./renderer.mjs";

const githubRefs = "https://github.com/SiyaoZheng/luwiki.git/info/refs?service=git-upload-pack";
const githubRaw = "https://raw.githubusercontent.com/SiyaoZheng/luwiki";
const verifiedShaTtlMs = 5 * 60 * 1000;
const maxSyncItems = 12;

const createPagesSql = `CREATE TABLE IF NOT EXISTS wiki_pages (
  route TEXT PRIMARY KEY,
  source_path TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  markdown TEXT NOT NULL,
  metadata_json TEXT NOT NULL,
  content_sha TEXT NOT NULL,
  source_sha TEXT NOT NULL,
  synced_at TEXT NOT NULL,
  published INTEGER NOT NULL DEFAULT 1
)`;

const createSyncStateSql = `CREATE TABLE IF NOT EXISTS wiki_sync_state (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at INTEGER NOT NULL
)`;

function requestForPath(request, pathname) {
  const url = new URL(request.url);
  url.pathname = pathname;
  return new Request(url, request);
}

function candidatePaths(pathname) {
  const paths = [];
  const add = (value) => {
    if (!paths.includes(value)) paths.push(value);
    const escaped = value.replaceAll("%", "%25");
    if (!paths.includes(escaped)) paths.push(escaped);
  };

  add(pathname);
  if (pathname.endsWith("/")) {
    add(`${pathname}index.html`);
  } else if (!pathname.split("/").at(-1)?.includes(".")) {
    add(`${pathname}/index.html`);
  }
  return paths;
}

function jsonResponse(value, status = 200) {
  return new Response(JSON.stringify(value), {
    status,
    headers: {
      "cache-control": "no-store",
      "content-type": "application/json; charset=utf-8",
    },
  });
}

function normalizedRoute(pathname) {
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    decoded = pathname;
  }
  if (decoded === "/") return "/";
  return decoded.replace(/[\\/]+$/, "") || "/";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function ensureSchema(db) {
  await db.batch([
    db.prepare(createPagesSql),
    db.prepare(createSyncStateSql),
  ]);
}

async function findPage(db, route) {
  return db
    .prepare(`SELECT route, source_path, title, markdown, metadata_json,
      content_sha, source_sha, synced_at
      FROM wiki_pages
      WHERE route = ? AND published = 1`)
    .bind(route)
    .first();
}

async function renderDynamicPage(request, env, record) {
  const templatePath = record.route === "/"
    ? "/__luwiki_static/__luwiki_templates/home.txt"
    : "/__luwiki_static/__luwiki_templates/note.txt";
  const templateResponse = await env.ASSETS.fetch(requestForPath(request, templatePath));
  if (!templateResponse.ok) return null;

  const main = renderPublishedNote(record);
  const title = escapeHtml(record.title);
  let html = (await templateResponse.text())
    .replaceAll("__LUWIKI_TITLE__", title)
    .replace("__LUWIKI_MAIN__", main);
  html = html.replace(
    /<html\b/i,
    `<html data-luwiki-source="d1" data-luwiki-content-sha="${record.content_sha}" data-luwiki-source-sha="${record.source_sha}"`,
  );

  return new Response(html, {
    headers: {
      "cache-control": "no-cache",
      "content-type": "text/html; charset=utf-8",
      "x-luwiki-content-sha": record.content_sha,
      "x-luwiki-source": "d1",
      "x-luwiki-source-sha": record.source_sha,
    },
  });
}

async function currentGithubMainSha() {
  const response = await fetch(githubRefs, {
    headers: {
      accept: "application/x-git-upload-pack-advertisement",
      "user-agent": "luwiki-sites-sync",
    },
  });
  if (!response.ok) throw new Error(`GitHub main lookup failed (${response.status})`);
  const payload = await response.text();
  return payload.match(/([0-9a-f]{40}) refs\/heads\/main(?:\0|\r?\n|$)/)?.[1];
}

async function requireCurrentGithubMain(db, sourceSha) {
  const cached = await db
    .prepare("SELECT value, updated_at FROM wiki_sync_state WHERE key = ?")
    .bind("verified_main_sha")
    .first();
  if (
    cached?.value === sourceSha &&
    Number(cached.updated_at) >= Date.now() - verifiedShaTtlMs
  ) {
    return;
  }

  const mainSha = await currentGithubMainSha();
  if (mainSha !== sourceSha) {
    const error = new Error("source SHA is not the current GitHub main");
    error.status = 409;
    throw error;
  }
  await db
    .prepare(`INSERT INTO wiki_sync_state (key, value, updated_at)
      VALUES (?, ?, ?)
      ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at`)
    .bind("verified_main_sha", sourceSha, Date.now())
    .run();
}

function rawGithubUrl(sourceSha, sourcePath) {
  const encodedPath = sourcePath.split("/").map(encodeURIComponent).join("/");
  return `${githubRaw}/${sourceSha}/${encodedPath}`;
}

async function sha256(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function fetchPublishedNote(sourceSha, sourcePath) {
  if (!/^src\/site\/notes\/[^/]+\.md$/u.test(sourcePath)) {
    const error = new Error(`invalid source path: ${sourcePath}`);
    error.status = 400;
    throw error;
  }
  const response = await fetch(rawGithubUrl(sourceSha, sourcePath), {
    headers: { "user-agent": "luwiki-sites-sync" },
  });
  if (!response.ok) {
    const error = new Error(`published note unavailable (${response.status}): ${sourcePath}`);
    error.status = response.status === 404 ? 400 : 502;
    throw error;
  }
  const source = await response.text();
  const parsed = parsePublishedNote(sourcePath, source);
  return {
    ...parsed,
    contentSha: await sha256(source),
    sourcePath,
  };
}

async function syncPublishedNotes(request, env) {
  if (!env.DB) return jsonResponse({ error: "D1 binding DB is unavailable" }, 503);
  let payload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: "request body must be JSON" }, 400);
  }

  const sourceSha = payload?.source_sha;
  const sourcePaths = Array.isArray(payload?.source_paths) ? payload.source_paths : [];
  if (!/^[0-9a-f]{40}$/.test(sourceSha || "")) {
    return jsonResponse({ error: "source_sha must be a full Git commit SHA" }, 400);
  }
  if (!sourcePaths.length || sourcePaths.length > maxSyncItems) {
    return jsonResponse({ error: `source_paths must contain 1-${maxSyncItems} notes` }, 400);
  }
  if (new Set(sourcePaths).size !== sourcePaths.length) {
    return jsonResponse({ error: "source_paths must not contain duplicates" }, 400);
  }

  try {
    await ensureSchema(env.DB);
    await requireCurrentGithubMain(env.DB, sourceSha);
    const notes = await Promise.all(sourcePaths.map((sourcePath) => fetchPublishedNote(sourceSha, sourcePath)));
    const syncedAt = new Date().toISOString();
    const statements = notes.map((note) => env.DB
      .prepare(`INSERT INTO wiki_pages (
          route, source_path, title, markdown, metadata_json,
          content_sha, source_sha, synced_at, published
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)
        ON CONFLICT(source_path) DO UPDATE SET
          route = excluded.route,
          title = excluded.title,
          markdown = excluded.markdown,
          metadata_json = excluded.metadata_json,
          content_sha = excluded.content_sha,
          source_sha = excluded.source_sha,
          synced_at = excluded.synced_at,
          published = 1`)
      .bind(
        note.route,
        note.sourcePath,
        note.title,
        note.body,
        serializeMetadata(note.metadata),
        note.contentSha,
        sourceSha,
        syncedAt,
      ));
    await env.DB.batch(statements);
    return jsonResponse({
      source_sha: sourceSha,
      synced_at: syncedAt,
      items: notes.map((note) => ({
        content_sha: note.contentSha,
        route: note.route,
        source_path: note.sourcePath,
        url: new URL(note.route, request.url).href,
      })),
    });
  } catch (error) {
    return jsonResponse({ error: error.message }, error.status || 500);
  }
}

async function health(env) {
  if (!env.DB) return jsonResponse({ d1: false, status: "degraded" }, 503);
  try {
    await ensureSchema(env.DB);
    const row = await env.DB.prepare("SELECT COUNT(*) AS page_count FROM wiki_pages WHERE published = 1").first();
    return jsonResponse({ d1: true, page_count: Number(row?.page_count || 0), status: "ok" });
  } catch (error) {
    return jsonResponse({ d1: false, error: error.message, status: "degraded" }, 503);
  }
}

async function staticFallback(request, env, pathname) {
  for (const candidate of candidatePaths(pathname)) {
    let response = await env.ASSETS.fetch(requestForPath(request, `/__luwiki_static${candidate}`));
    for (let redirects = 0; redirects < 3 && response.status >= 300 && response.status < 400; redirects += 1) {
      const location = response.headers.get("location");
      if (!location?.startsWith("/__luwiki_static/")) break;
      response = await env.ASSETS.fetch(requestForPath(request, location));
    }
    if (response.status !== 404) return response;
  }
  return env.ASSETS.fetch(requestForPath(request, "/__luwiki_static/404/index.html"));
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/__luwiki/health" && request.method === "GET") return health(env);
    if (url.pathname === "/__luwiki/sync" && request.method === "POST") return syncPublishedNotes(request, env);
    if (url.pathname.startsWith("/__luwiki/")) return new Response("Not found", { status: 404 });

    if (env.DB) {
      try {
        const record = await findPage(env.DB, normalizedRoute(url.pathname));
        if (record) {
          const response = await renderDynamicPage(request, env, record);
          if (response) return response;
        }
      } catch {
        // Preserve the last deployed static page if D1 is temporarily unavailable.
      }
    }

    return staticFallback(request, env, url.pathname);
  },
};
