---
name: model-handoff
description: Package the current task so a different agent or model can pick it up cold — when you hit a usage limit, switch from Claude to Codex (or back), move work to a cheaper model, or hand a task to a teammate. Use when the user says "hand this off", "switch models", "continue in Codex", "I'm out of limits", or "write a handoff".
---

# Model handoff

Write `projects/<name>/HANDOFF.md` (or `HANDOFF.md` at the root if there's no project folder).
The next agent has never seen this chat. Assume it is smart but knows nothing.

## Template

```markdown
# Handoff · <task> · <YYYY-MM-DD HH:MM>

## Goal
One sentence. What "done" looks like.

## State
- Done: ...
- In progress: ... (file:line)
- Not started: ...

## Decisions made (and why)
- ...

## Tried and rejected
- <approach> — <why it failed>

## How to verify
Exact commands or steps, and the expected result.

## Next 3 steps
1. ...
2. ...
3. ...

## Watch out
Gotchas, flaky tests, things the user is sensitive about.
```

## Rules

- Link to files and lines. Don't paste big chunks of code.
- Copy anything long-lived into `context/` too (use the `write-back` skill).
- Commit the handoff. The next agent may be on another machine.
- Finish by telling the user the one-line prompt for the next agent:
  `Read AGENTS.md, then projects/<name>/HANDOFF.md, and continue from "Next 3 steps".`
