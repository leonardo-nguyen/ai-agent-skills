#!/usr/bin/env node
const MODEL_NAMES = {
  "claude-opus-5": "Opus 5",
  "claude-sonnet-5": "Sonnet 5",
  "claude-fable-5": "Fable 5",
  "claude-haiku-4-5-20251001": "Haiku 4.5",
};

function displayName(id) {
  if (typeof id !== "string" || !id) return "?";
  const base = id.replace(/\[1m\]$/, "");
  return MODEL_NAMES[base] || base.replace(/^claude-/, "");
}

const STATUS_ICON = {
  running: "▶",
  completed: "✅",
  failed: "❌",
  cancelled: "⏹",
};

let input = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => (input += chunk));
process.stdin.on("end", () => {
  let data;
  try {
    data = JSON.parse(input);
  } catch {
    return;
  }
  const tasks = Array.isArray(data.tasks) ? data.tasks : [];

  for (const task of tasks) {
    if (!task || typeof task !== "object" || !task.id) continue;

    const model = displayName(task.model);
    const effort = task.effort !== undefined && task.effort !== null && task.effort !== "" ? ` (${task.effort})` : "";
    // Payload never carries a seat/subagent_type field (task.type is always "local_agent") -
    // the caller embeds "<seat>: " directly in description, so title is the only source.
    const title = task.description || task.label || task.type || "agent";
    const statusIcon = STATUS_ICON[task.status] || "";

    const line = `${statusIcon} ${title}  🧠 ${model}${effort}`.trim();

    console.log(JSON.stringify({ id: task.id, content: line }));
  }
});
