---
name: skillify
description: Turn a task you just did (or keep doing) into a reusable SKILL.md that works in Claude Code, Codex, Cursor, Gemini CLI, Hermes and BB. Use when the user says "make this a skill", "save this as a workflow", "we do this every week", or after the same kind of task has come up twice.
---

# Skillify

## Steps

1. Ask, or work out from the chat:
   - The trigger: what the user says or what situation calls for this.
   - The input: what the skill needs before it starts.
   - The output: what file, message or change it produces.
   - What went wrong last time.
2. Create `skills/<kebab-name>/SKILL.md`:
   - Frontmatter: `name` must match the folder name. Lowercase letters, digits and hyphens only.
   - `description`: what it does, plus the exact phrases that should trigger it. This is the only part an agent sees before it decides to load the skill, so be concrete.
   - Body: numbered steps, a quality bar, and the mistakes to avoid. Under ~300 lines.
3. Move long reference material into `skills/<name>/references/` and deterministic steps into `skills/<name>/scripts/`. Link them from the body.
4. Keep it portable:
   - No tool-specific frontmatter beyond `name` and `description`, unless the user asks.
   - Refer to "the shell" and "file editing", not to one product's tool names.
   - Secrets come from environment variables.
5. Test it: start a fresh session in a different tool, give only the trigger phrase, and check the result.
6. Run `scripts/link-skills.sh` if the symlinks don't exist yet.
