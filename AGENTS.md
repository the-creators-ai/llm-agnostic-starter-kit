# AGENTS.md

> Every agent reads this file first: Claude Code, Codex, Cursor, Gemini CLI, Hermes, BB threads.
> Keep it short (about 200 words of rules). It's a router: point to files, don't paste them.
> Every 6 months, delete each rule that current models follow without being told.

## Who you are working for

[One paragraph. Who you are, what the business does, who the customer is.]
Example: "Creators AI is a newsletter for founders and creators who build with AI.
19,000 subscribers. We publish tested workflows, not news."

## Where the truth lives

Read only what the task needs:

| Need | File |
|---|---|
| Business, audience, offer | `context/about.md` |
| How we write (real examples) | `context/examples/` |
| Past decisions and why | `context/decisions.md` |
| Corrections that became rules | `context/lessons.md` |
| Which model for which job | `context/models.md` |
| Project-specific rules | `projects/<name>/AGENTS.md` (closest file wins) |

If two files disagree, the newer dated entry in `context/decisions.md` wins.
If you still can't tell, stop and ask. Don't pick one quietly.

## How we work

- Plan first for anything that takes more than ~15 minutes. Put the plan in the chat before you edit files.
- Small, reviewable changes. One concern per commit.
- Prove it works: run the check, show the output, or take a screenshot. "Should work" doesn't count.
- Never invent numbers, quotes, customer names or test results. Mark gaps as `[TK: ...]`.

## Hard rules

- Secrets live in `.env`, which is gitignored. Never paste keys into code, docs, chats or commits.
- Don't send email, publish, spend money, or delete data without explicit approval in this session.
- Read-only access is the default for new integrations.

## Tools available

- MCP servers are listed in `.mcp.json`. Ask before adding one.
- Skills live in `skills/` and are symlinked into `.claude/skills`, `.agents/skills` and `.bb/skills`.
- Useful skills: `write-back` (save what we learned), `model-handoff` (pass work to another agent), `skillify` (turn a repeated task into a skill).

## Before you finish

Run the `write-back` skill if you learned something future agents need:
a decision, a correction, a gotcha, a new command. One line per item, dated.
