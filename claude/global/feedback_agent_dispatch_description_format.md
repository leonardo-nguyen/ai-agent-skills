---
name: feedback-agent-dispatch-description-format
description: "When dispatching a subagent via the Agent tool, prefix the description with the seat/subagent_type name"
metadata:
  type: feedback
---

When calling the Agent tool, always format the `description` param as `<subagent_type>: <task title>`
(e.g. `backend-dev: Fix trial contract pagination`), not just the bare task title.

**Why:** The user has a custom `subagentStatusLine` script configured globally
(`~/.claude/settings.json` -> `subagentStatusLine.command` -> `node %USERPROFILE%/.claude/subagent-statusline.mjs`)
that displays each running subagent's title in the panel below the prompt. Claude Code's
`subagentStatusLine` JSON payload has no field carrying the roster seat name (`task.type` is always
the generic `"local_agent"` regardless of seat - confirmed empirically by dispatching `spec-guardian`,
`Explore`, and `code-reviewer` and seeing identical `type` values, and the script's dead
`agentType`/`subagent_type`/`subagentType` fallback was removed for this reason). The only field the
script can show is `label`/`description`, which is exactly the string passed as `description` at
dispatch time. So the seat name is only visible in the status line if the dispatching Claude session
puts it there.

**How to apply:** Every Agent tool call's `description` field starts with the `subagent_type` value
followed by `: `, across all projects - this is a Claude Code CLI behavior preference, not
project-specific. Nothing needs configuring per-project: the global `statusLine`/`subagentStatusLine`
scripts already exist and work; the only missing piece is this `description` prefix on Agent calls.
