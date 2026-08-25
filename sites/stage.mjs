import { cp, mkdir, readdir, rename, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(projectDir, "dist");
const stagedDir = path.join(projectDir, ".sites-static");

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

await rm(stagedDir, { recursive: true, force: true });
await rename(distDir, stagedDir);
await mkdir(path.join(distDir, "assets"), { recursive: true });
await mkdir(path.join(distDir, "server"), { recursive: true });
await copyUriEncodedTree(stagedDir, path.join(distDir, "assets"));
await cp(path.join(projectDir, "sites", "worker.mjs"), path.join(distDir, "server", "index.js"));
await rm(stagedDir, { recursive: true, force: true });
