import slugify from "@sindresorhus/slugify";
import MarkdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItAttrs from "markdown-it-attrs";
import markdownItFootnote from "markdown-it-footnote";
import markdownItMark from "markdown-it-mark";
import markdownItMathjax from "markdown-it-mathjax3";
import markdownItTaskCheckbox from "markdown-it-task-checkbox";
import { parse as parseYaml } from "yaml";

const publishedRoot = "src/site/notes/";

function headingId(value) {
  return slugify(value) || value;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function encodedWikiHref(target) {
  const [rawPage, ...fragmentParts] = target.split("#");
  const page = rawPage.replace(/\\\|/g, "|").replace(/\.(md|markdown)$/i, "").trim();
  if (!page || page.startsWith("raw/") || page.includes("../")) return "/404";
  const pathname = `/${page.split("/").map(encodeURIComponent).join("/")}`;
  if (!fragmentParts.length) return pathname;
  return `${pathname}#${encodeURIComponent(headingId(fragmentParts.join("#")))}`;
}

function wikiLinks(md) {
  md.inline.ruler.before("link", "obsidian_wikilink", (state, silent) => {
    if (state.src.slice(state.pos, state.pos + 2) !== "[[") return false;
    const close = state.src.indexOf("]]", state.pos + 2);
    if (close < 0) return false;
    if (silent) return true;

    const raw = state.src.slice(state.pos + 2, close).replace(/\\\|/g, "|");
    const separator = raw.indexOf("|");
    const target = (separator < 0 ? raw : raw.slice(0, separator)).trim();
    const label = (separator < 0 ? target.split("#")[0] : raw.slice(separator + 1)).trim();
    if (!target) return false;

    const open = state.push("link_open", "a", 1);
    open.attrs = [
      ["class", "internal-link"],
      ["href", encodedWikiHref(target)],
      ["target", ""],
    ];
    const text = state.push("text", "", 0);
    text.content = label || target;
    state.push("link_close", "a", -1);
    state.pos = close + 2;
    return true;
  });
}

function createMarkdownRenderer() {
  const md = new MarkdownIt({ breaks: true, html: true, linkify: true })
    .use(markdownItAnchor, { slugify: headingId })
    .use(markdownItMark)
    .use(markdownItFootnote)
    .use(markdownItMathjax, {
      tex: { inlineMath: [["$", "$"]] },
      options: { skipHtmlTags: { "[-]": ["pre"] } },
    })
    .use(markdownItAttrs)
    .use(markdownItTaskCheckbox, {
      disabled: true,
      divWrap: false,
      divClass: "checkbox",
      idPrefix: "cbx",
      ulClass: "task-list",
      liClass: "task-list-item",
    })
    .use(wikiLinks);

  const defaultLinkOpen =
    md.renderer.rules.link_open ||
    ((tokens, index, options, env, self) => self.renderToken(tokens, index, options));

  md.renderer.rules.link_open = (tokens, index, options, env, self) => {
    const href = tokens[index].attrGet("href") || "";
    if (/^[a-z][a-z0-9+.-]*:/i.test(href)) {
      tokens[index].attrSet("target", "_blank");
      tokens[index].attrJoin("class", "external-link");
      tokens[index].attrSet("rel", "noopener noreferrer");
    }
    return defaultLinkOpen(tokens, index, options, env, self);
  };

  return md;
}

const markdown = createMarkdownRenderer();

function splitFrontmatter(source) {
  if (!source.startsWith("---")) return { metadata: {}, body: source };
  const match = source.match(/^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/);
  if (!match) return { metadata: {}, body: source };
  const yaml = match[1].replace(/\\\|/g, "|");
  return {
    metadata: parseYaml(yaml) || {},
    body: source.slice(match[0].length),
  };
}

function normalizeTags(value) {
  if (Array.isArray(value)) return value.map(String).filter(Boolean);
  if (typeof value === "string") return value.split(/[ ,]+/).filter(Boolean);
  return [];
}

function normalizeRoute(value) {
  if (value === "/") return "/";
  const withSlash = String(value || "").startsWith("/") ? String(value) : `/${value}`;
  const withoutTrailingSlash = withSlash.replace(/\/+$/, "");
  if (!withoutTrailingSlash || withoutTrailingSlash.includes("..") || withoutTrailingSlash.includes("?")) {
    throw new Error("unsafe permalink");
  }
  try {
    return decodeURIComponent(withoutTrailingSlash);
  } catch {
    return withoutTrailingSlash;
  }
}

function titleFromPath(sourcePath) {
  return sourcePath.slice(publishedRoot.length, -3);
}

function noteRoute(sourcePath, metadata) {
  const tags = normalizeTags(metadata.tags);
  if (metadata["dg-home"] === true || tags.includes("gardenEntry")) return "/";
  const permalink = metadata.permalink || metadata["dg-permalink"];
  return normalizeRoute(permalink || titleFromPath(sourcePath));
}

function metadataHeader(metadata) {
  const tags = normalizeTags(metadata.tags).filter((tag) => tag !== "note" && tag !== "gardenEntry");
  const tagHtml = tags.length
    ? `<div class="header-tags">${tags.map((tag) => `<a class="tag" onclick="toggleTagSearch(this)">#${escapeHtml(tag)}</a>`).join("")}</div>`
    : "";
  const timestamps = [
    ["calendar-plus", metadata.created],
    ["calendar-clock", metadata.updated],
  ]
    .filter(([, value]) => value)
    .map(([icon, value]) => `<div><i data-lucide="${icon}"></i> <span class="human-date" data-date="${escapeHtml(value)}"></span></div>`)
    .join("");
  if (!tagHtml && !timestamps) return "";
  return `<header><div class="header-meta">${tagHtml}${timestamps ? `<div class="timestamps">${timestamps}</div>` : ""}</div></header>`;
}

export function parsePublishedNote(sourcePath, source) {
  if (!sourcePath.startsWith(publishedRoot) || !/^src\/site\/notes\/[^/]+\.md$/u.test(sourcePath)) {
    throw new Error("source path is outside the flat published-note directory");
  }
  const { metadata, body } = splitFrontmatter(source);
  const title = String(metadata.title || titleFromPath(sourcePath));
  const route = noteRoute(sourcePath, metadata);
  return { body, metadata, route, title };
}

export function renderPublishedNote(record) {
  const metadata = JSON.parse(record.metadata_json || "{}");
  const rendered = markdown.render(record.markdown);
  const inlineTitle = /<h1\b/i.test(rendered)
    ? ""
    : `<h1 id="${escapeHtml(headingId(record.title))}" tabindex="-1">${escapeHtml(record.title)}</h1>`;
  return `${metadataHeader(metadata)}${inlineTitle}${rendered}`;
}

export function serializeMetadata(metadata) {
  return JSON.stringify(metadata);
}
