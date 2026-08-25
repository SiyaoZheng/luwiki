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

console.log("Sites route checks passed");
