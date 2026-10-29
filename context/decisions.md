# Decisions

> Append-only. Newest at the top. One entry per decision.
> Agents: read this before proposing something that sounds familiar.

## 2026-10-29 · Example: images go through our own MCP server
- **Decision:** All image generation goes through the `cai-img` MCP server, not each tool's built-in generator.
- **Why:** Same styles for every agent (Claude, Codex, Hermes). The backend can change without touching the agents.
- **Rejected:** Generating images separately in each app. The styles drifted and the files got scattered.
- **Revisit if:** the provider chain fails twice in one week.
