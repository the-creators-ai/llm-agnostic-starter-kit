---
name: write-back
description: Save what this session learned into the shared context files so the next agent (any model, any tool) starts smarter. Use at the end of a task, after a correction from the user, or when the user says "remember this", "save this", "write it down", or "don't make that mistake again".
---

# Write-back

You are closing a session. Anything that lives only in this chat is lost to every other agent. Move it into git.

## Steps

1. Review this session and list candidates in four buckets:
   - **Decisions**: something was chosen over an alternative.
   - **Lessons**: the user corrected you, or something failed and you found out why.
   - **Facts**: a command, path, account, limit or number that will be needed again.
   - **Open questions**: what is still unresolved.
2. Drop anything that is already in the context files, specific to one task only, or a guess.
3. Write what's left:
   - Decisions go at the top of `context/decisions.md`, using the template in that file.
   - Lessons go in `context/lessons.md` as one line: `YYYY-MM-DD · rule · why`.
   - Project-only facts go in `projects/<name>/AGENTS.md`.
   - Open questions go in `projects/<name>/HANDOFF.md`.
4. Never write secrets, tokens or personal data. Write the variable name, not the value.
5. Show the user the diff. Commit with the message `context: <what you learned>` once they agree.

## Quality bar

A good entry changes what a future agent does. "Fixed the bug" is useless.
"`npm test` needs `TZ=UTC` or the date tests fail" is useful.
