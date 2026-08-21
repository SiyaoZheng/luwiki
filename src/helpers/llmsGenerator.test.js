import { afterEach, describe, expect, it } from "vitest";
import fs from "fs";
import os from "os";
import path from "path";
import { generateLlmsArtifacts } from "./llmsGenerator.js";

const tempDirs = [];

function tempDir() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "luwiki-llms-"));
  tempDirs.push(dir);
  return dir;
}

function writeNote(sourceDir, fileName, data, content) {
  fs.mkdirSync(sourceDir, { recursive: true });
  fs.writeFileSync(
    path.join(sourceDir, fileName),
    `---\n${JSON.stringify(data)}\n---\n\n${content}\n`,
    "utf8",
  );
}

afterEach(() => {
  for (const dir of tempDirs.splice(0)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("generateLlmsArtifacts", () => {
  it("generates a root index and one companion for every public page", () => {
    const root = tempDir();
    const sourceDir = path.join(root, "notes");
    const outputDir = path.join(root, "dist");

    writeNote(
      sourceDir,
      "噜Wiki.md",
      {
        "dg-publish": true,
        permalink: "/噜Wiki/",
        title: "噜Wiki",
        tags: ["gardenEntry"],
      },
      "# 噜Wiki\n\n欢迎进入 [[Palantir]]。",
    );
    writeNote(
      sourceDir,
      "Palantir.md",
      {
        "dg-publish": true,
        permalink: "/Palantir/",
        title: "Palantir",
        tags: ["企业软件"],
        updated: "2026-08-21",
      },
      "# Palantir\n\n正文链接 [[噜Wiki|首页]]。\n\n[内部 raw](raw/private.md)\n\n[官网](https://www.palantir.com/)",
    );
    writeNote(
      sourceDir,
      "Hidden.md",
      { "dg-publish": true, permalink: "/Hidden/", hide: true },
      "# Hidden",
    );
    writeNote(
      sourceDir,
      "Growth 97%.md",
      { "dg-publish": true, permalink: "/Growth 97%/" },
      "# Growth 97%",
    );

    const result = generateLlmsArtifacts({
      sourceDir,
      outputDir,
      siteBaseUrl: "https://example.com",
    });

    expect(result.pageCount).toBe(3);
    expect(fs.existsSync(path.join(outputDir, "llm.txt"))).toBe(true);
    expect(fs.existsSync(path.join(outputDir, "Palantir", "llm.txt"))).toBe(
      true,
    );
    expect(fs.existsSync(path.join(outputDir, "Hidden", "llm.txt"))).toBe(
      false,
    );
    expect(
      fs.existsSync(path.join(outputDir, "Growth 97%", "llm.txt")),
    ).toBe(true);

    const index = fs.readFileSync(path.join(outputDir, "llms.txt"), "utf8");
    expect(index).toContain("当前包含 3 个公开页面");
    expect(index).toContain("https://example.com/llm.txt");
    expect(index).toContain("https://example.com/Palantir/llm.txt");
    expect(index).toContain("https://example.com/Growth%2097%25/llm.txt");
    expect(index).not.toContain("Hidden");

    const palantir = fs.readFileSync(
      path.join(outputDir, "Palantir", "llm.txt"),
      "utf8",
    );
    expect(palantir).toContain("https://example.com/Palantir/");
    expect(palantir).toContain("[首页](https://example.com/llm.txt)");
    expect(palantir).toContain("[官网](https://www.palantir.com/)");
    expect(palantir).toContain("内部 raw");
    expect(palantir).not.toContain("raw/private.md");
    expect(palantir.match(/^# Palantir$/gm)).toHaveLength(1);
  });

  it("removes generated companions for pages deleted before a later build", () => {
    const root = tempDir();
    const sourceDir = path.join(root, "notes");
    const outputDir = path.join(root, "dist");
    const notePath = path.join(sourceDir, "Temporary.md");

    writeNote(
      sourceDir,
      "Temporary.md",
      { "dg-publish": true, permalink: "/Temporary/" },
      "# Temporary",
    );
    generateLlmsArtifacts({ sourceDir, outputDir });
    expect(fs.existsSync(path.join(outputDir, "Temporary", "llm.txt"))).toBe(
      true,
    );

    fs.unlinkSync(notePath);
    generateLlmsArtifacts({ sourceDir, outputDir });
    expect(fs.existsSync(path.join(outputDir, "Temporary", "llm.txt"))).toBe(
      false,
    );
  });
});
