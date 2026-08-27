import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import worker from "./worker.mjs";

const assetsDir = path.resolve("dist/assets");
const assets = {
  async fetch(request) {
    const pathname = decodeURIComponent(new URL(request.url).pathname);
    const filePath = path.join(assetsDir, pathname.replace(/^\/+/, ""));
    try {
      return new Response(await readFile(filePath), { status: 200 });
    } catch {
      return new Response("not found", { status: 404 });
    }
  },
};

const dynamicRecord = {
  content_sha: "content-sha",
  markdown: "D1 中的条目正文。",
  metadata_json: JSON.stringify({ tags: ["动态发布"], updated: "2026-08-27" }),
  route: "/动态发布测试",
  source_path: "src/site/notes/动态发布测试.md",
  source_sha: "1111111111111111111111111111111111111111",
  synced_at: "2026-08-27T00:00:00.000Z",
  title: "动态发布测试",
};

const db = {
  prepare(sql) {
    return {
      bind(...values) {
        return {
          async first() {
            if (/FROM wiki_pages/i.test(sql) && values[0] === dynamicRecord.route) return dynamicRecord;
            return null;
          },
        };
      },
    };
  },
};

for (const [pathname, expectedText] of [
  ["/", "噜Wiki"],
  ["/%E6%B8%85%E5%8D%8E%E5%A4%A7%E5%AD%A6", "清华大学"],
  ["/2026-08-24%20%E8%B7%AF%E9%81%A5%20Daily%20Digest", "2026-08-24"],
]) {
  const response = await worker.fetch(new Request(`https://example.test${pathname}`), { ASSETS: assets });
  assert.equal(response.status, 200, pathname);
  assert.match(await response.text(), new RegExp(expectedText), pathname);
}

const missing = await worker.fetch(new Request("https://example.test/definitely-missing"), { ASSETS: assets });
assert.equal(missing.status, 200);
assert.match(await missing.text(), /nothing here|not made public|404|页面/iu);

const dynamic = await worker.fetch(
  new Request("https://example.test/%E5%8A%A8%E6%80%81%E5%8F%91%E5%B8%83%E6%B5%8B%E8%AF%95"),
  { ASSETS: assets, DB: db },
);
assert.equal(dynamic.status, 200);
assert.equal(dynamic.headers.get("x-luwiki-source"), "d1");
assert.equal(dynamic.headers.get("x-luwiki-source-sha"), dynamicRecord.source_sha);
assert.match(await dynamic.text(), /D1 中的条目正文/);

console.log("Sites route checks passed");
