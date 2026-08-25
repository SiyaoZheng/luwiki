import { cp, mkdir, rename, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(projectDir, "dist");
const stagedDir = path.join(projectDir, ".sites-static");

await rm(stagedDir, { recursive: true, force: true });
await rename(distDir, stagedDir);
await mkdir(path.join(distDir, "assets"), { recursive: true });
await mkdir(path.join(distDir, "server"), { recursive: true });
await cp(stagedDir, path.join(distDir, "assets"), { recursive: true });
await cp(path.join(projectDir, "sites", "worker.mjs"), path.join(distDir, "server", "index.js"));
await rm(stagedDir, { recursive: true, force: true });
