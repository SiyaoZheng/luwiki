import { execFile } from "node:child_process";
import { promisify } from "node:util";

const run = promisify(execFile);
const publicCheckout = process.env.LUWIKI_PUBLIC_CHECKOUT || "/Users/siyaozheng/luwiki-public-main";
const siteUrl = (process.env.LUWIKI_SITES_URL || "https://luwiki-knowledge-graph.siyao.chatgpt.site").replace(/\/+$/, "");
const batchSize = 12;

function fail(message) {
  throw new Error(`sync-sites-content: ${message}`);
}

async function git(...args) {
  const { stdout } = await run("git", ["-C", publicCheckout, ...args], {
    maxBuffer: 16 * 1024 * 1024,
  });
  return stdout.trim();
}

function validatePage(page) {
  if (!page.endsWith(".md") || page.startsWith("/") || page.startsWith("raw/") || page.includes("../") || page.includes("/")) {
    fail(`refusing page path: ${page}`);
  }
  return `src/site/notes/${page}`;
}

async function allPublishedPages(sourceSha) {
  const { stdout } = await run(
    "git",
    ["-C", publicCheckout, "ls-tree", "-r", "-z", "--name-only", sourceSha, "--", "src/site/notes"],
    { maxBuffer: 16 * 1024 * 1024 },
  );
  return stdout
    .split("\0")
    .filter((value) => /^src\/site\/notes\/[^/]+\.md$/u.test(value))
    .sort((a, b) => a.localeCompare(b));
}

async function requirePublishedPath(sourceSha, sourcePath) {
  try {
    await run("git", ["-C", publicCheckout, "cat-file", "-e", `${sourceSha}:${sourcePath}`]);
  } catch {
    fail(`page is not present in GitHub main: ${sourcePath.slice("src/site/notes/".length)}`);
  }
}

async function postBatch(sourceSha, sourcePaths) {
  let lastError;
  for (let attempt = 1; attempt <= 20; attempt += 1) {
    try {
      const response = await fetch(`${siteUrl}/__luwiki/sync`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ source_sha: sourceSha, source_paths: sourcePaths }),
        signal: AbortSignal.timeout(120_000),
      });
      const payload = await response.json().catch(() => ({}));
      if (response.ok) return payload.items;
      lastError = new Error(payload.error || `HTTP ${response.status}`);
      if (response.status !== 409 && response.status !== 429 && response.status < 500) throw lastError;
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 2_000));
  }
  throw lastError || new Error("Sites sync did not complete");
}

async function pruneMissingPages(sourceSha) {
  let lastError;
  for (let attempt = 1; attempt <= 20; attempt += 1) {
    try {
      const response = await fetch(`${siteUrl}/__luwiki/sync`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ prune: true, source_sha: sourceSha, source_paths: [] }),
        signal: AbortSignal.timeout(120_000),
      });
      const payload = await response.json().catch(() => ({}));
      if (response.ok) return payload.pruned || [];
      lastError = new Error(payload.error || `HTTP ${response.status}`);
      if (response.status !== 409 && response.status !== 429 && response.status < 500) throw lastError;
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 2_000));
  }
  throw lastError || new Error("Sites prune did not complete");
}

async function verifyItem(item, sourceSha) {
  let lastStatus = "unreachable";
  for (let attempt = 1; attempt <= 90; attempt += 1) {
    try {
      const response = await fetch(item.url, {
        headers: { "cache-control": "no-cache" },
        redirect: "follow",
        signal: AbortSignal.timeout(20_000),
      });
      lastStatus = `${response.status} ${response.headers.get("x-luwiki-source") || "static"}`;
      if (
        response.ok &&
        response.headers.get("x-luwiki-source") === "d1" &&
        response.headers.get("x-luwiki-source-sha") === sourceSha &&
        response.headers.get("x-luwiki-content-sha") === item.content_sha
      ) {
        return;
      }
    } catch (error) {
      lastStatus = error.message;
    }
    await new Promise((resolve) => setTimeout(resolve, 1_000));
  }
  fail(`public verification timed out for ${item.url}: ${lastStatus}`);
}

async function verifyPrunedItem(item, sourceSha) {
  const response = await fetch(item.url, {
    headers: { "cache-control": "no-cache" },
    redirect: "manual",
    signal: AbortSignal.timeout(20_000),
  });
  if (
    response.status !== 404 ||
    response.headers.get("x-luwiki-source") !== "d1-tombstone" ||
    response.headers.get("x-luwiki-source-sha") !== sourceSha
  ) {
    fail(`public deletion verification failed for ${item.url}: ${response.status}`);
  }
}

const startedAt = new Date();
const args = process.argv.slice(2);
if (!args.length || (args.includes("--all") && args.length !== 1)) {
  fail("usage: npm run sites:sync -- --all | <page.md>...");
}

if (await git("branch", "--show-current") !== "main") fail("public checkout is not on main");
if (await git("status", "--porcelain")) fail("public checkout is dirty");
const sourceSha = await git("rev-parse", "HEAD");
const remoteMain = (await git("ls-remote", "origin", "refs/heads/main")).split(/\s+/)[0];
if (sourceSha !== remoteMain) fail("public checkout does not match GitHub main");

const sourcePaths = args[0] === "--all"
  ? await allPublishedPages(sourceSha)
  : [...new Set(args.map(validatePage))];
if (!sourcePaths.length) fail("no published Markdown pages were found");
if (args[0] !== "--all") {
  await Promise.all(sourcePaths.map((sourcePath) => requirePublishedPath(sourceSha, sourcePath)));
}

const syncedItems = [];
for (let offset = 0; offset < sourcePaths.length; offset += batchSize) {
  const batch = sourcePaths.slice(offset, offset + batchSize);
  syncedItems.push(...await postBatch(sourceSha, batch));
}
const prunedItems = args[0] === "--all" ? await pruneMissingPages(sourceSha) : [];

const verificationItems = args[0] === "--all" && syncedItems.length > 3
  ? [syncedItems[0], syncedItems[Math.floor(syncedItems.length / 2)], syncedItems.at(-1)]
  : syncedItems;
await Promise.all(verificationItems.map((item) => verifyItem(item, sourceSha)));
await Promise.all(prunedItems.map((item) => verifyPrunedItem(item, sourceSha)));

const finishedAt = new Date();
console.log(JSON.stringify({
  elapsed_seconds: Number(((finishedAt - startedAt) / 1000).toFixed(3)),
  finished_at: finishedAt.toISOString(),
  page_count: syncedItems.length,
  pruned_count: prunedItems.length,
  source_sha: sourceSha,
  started_at: startedAt.toISOString(),
  verified_urls: verificationItems.map((item) => item.url),
}, null, 2));
