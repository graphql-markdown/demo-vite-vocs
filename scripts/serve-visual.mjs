// Serve dist/public under the site's basePath so absolute asset URLs resolve.
import { cpSync, mkdirSync, rmSync } from "node:fs";
import { spawn } from "node:child_process";

const port = process.argv[2] ?? "4173";
const base = "dist/serve/demo-vite-vocs";
rmSync("dist/serve", { recursive: true, force: true });
mkdirSync(base, { recursive: true });
cpSync("dist/public", base, { recursive: true });

spawn("npx", ["serve", "-l", port, "dist/serve"], {
  stdio: "inherit",
  env: process.env,
}).on("exit", (code) => process.exit(code ?? 0));
