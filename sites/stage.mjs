import { execFile } from "node:child_process";
import { cp, mkdir, readFile, readdir, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(projectDir, "dist");
const stagedDir = path.join(projectDir, ".sites-static");
const run = promisify(execFile);

async function copyUriEncodedTree(sourceDir, destinationDir) {
  await mkdir(destinationDir, { recursive: true });
  const entries = await readdir(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name);
    const destinationPath = path.join(destinationDir, encodeURIComponent(entry.name));

    if (entry.isDirectory()) {
      await copyUriEncodedTree(sourcePath, destinationPath);
    } else {
      await cp(sourcePath, destinationPath);
    }
  }
}

async function findNoteTemplate(directory, relative = "") {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const nextRelative = path.join(relative, entry.name);
    const nextPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "404" || entry.name === "__luwiki_templates") continue;
      const nested = await findNoteTemplate(nextPath, nextRelative);
      if (nested) return nested;
    } else if (entry.name === "index.html" && relative) {
      const html = await readFile(nextPath, "utf8");
      if (/<main\b/i.test(html)) return nextPath;
    }
  }
  return null;
}

function dynamicTemplate(html) {
  const withTitle = html.replace(/<title>[\s\S]*?<\/title>/i, "<title>__LUWIKI_TITLE__</title>");
  const withMain = withTitle.replace(
    /<main\b([^>]*)>[\s\S]*?<\/main>/i,
    "<main$1>__LUWIKI_MAIN__</main>",
  );
  return withMain.replace(/<aside\b[^>]*>[\s\S]*?<\/aside>/i, "");
}

async function writeDynamicTemplates() {
  const templatesDir = path.join(distDir, "__luwiki_templates");
  const homePath = path.join(distDir, "index.html");
  const notePath = await findNoteTemplate(distDir);
  if (!notePath) throw new Error("No rendered note was available for the dynamic Sites template");
  await mkdir(templatesDir, { recursive: true });
  await Promise.all([
    writeFile(path.join(templatesDir, "home.html"), dynamicTemplate(await readFile(homePath, "utf8"))),
    writeFile(path.join(templatesDir, "note.html"), dynamicTemplate(await readFile(notePath, "utf8"))),
  ]);
}

async function bundleWorker() {
  const esbuild = path.join(projectDir, "node_modules", ".bin", "esbuild");
  await run(esbuild, [
    path.join(projectDir, "sites", "worker.mjs"),
    "--bundle",
    "--format=esm",
    "--platform=browser",
    "--target=es2022",
    "--minify",
    `--outfile=${path.join(distDir, "server", "index.js")}`,
  ]);
}

await rm(stagedDir, { recursive: true, force: true });
await writeDynamicTemplates();
await rename(distDir, stagedDir);
await mkdir(path.join(distDir, "assets"), { recursive: true });
await mkdir(path.join(distDir, "server"), { recursive: true });
await copyUriEncodedTree(stagedDir, path.join(distDir, "assets", "__luwiki_static"));
await bundleWorker();
await rm(stagedDir, { recursive: true, force: true });
