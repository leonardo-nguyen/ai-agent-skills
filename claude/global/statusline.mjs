#!/usr/bin/env node
import { execSync } from "child_process";
import path from "path";

let input = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => (input += chunk));
process.stdin.on("end", () => {
  let data;
  try {
    data = JSON.parse(input);
  } catch {
    console.log("");
    return;
  }
  const dir =
    typeof data.workspace?.current_dir === "string" && data.workspace.current_dir
      ? data.workspace.current_dir
      : typeof data.cwd === "string" && data.cwd
      ? data.cwd
      : process.cwd();
  const name = path.basename(dir);
  const model = data.model?.display_name || "?";
  const effort = data.effort?.level ? ` (${data.effort.level})` : "";

  let branch = "";
  try {
    branch = execSync("git branch --show-current", {
      cwd: dir,
      encoding: "utf8",
      stdio: ["pipe", "pipe", "ignore"],
    }).trim();
  } catch {}

  let dirty = "";
  try {
    const status = execSync("git status --porcelain", {
      cwd: dir,
      encoding: "utf8",
      stdio: ["pipe", "pipe", "ignore"],
    }).trim();
    if (status) dirty = "*";
  } catch {}

  const parts = [`📁 ${name}`];
  if (branch) parts.push(`🌿 ${branch}${dirty}`);
  parts.push(`🧠 ${model}${effort}`);

  console.log(parts.join("  "));
});
