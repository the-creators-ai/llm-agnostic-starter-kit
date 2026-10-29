# LLM-agnostic starter kit

From the Creators AI tutorial *Rent the Model, Own the Context*.

One git repo that Claude Code, Codex, Cursor, Gemini CLI, Hermes and BB all read the same way.

```text
my-ai-workspace/
├── AGENTS.md              # the router every agent reads first
├── CLAUDE.md              # one line: @AGENTS.md
├── context/
│   ├── about.md           # business, audience, rules for deciding
│   ├── examples/          # your best past work: style comes from evidence
│   ├── decisions.md       # dated, append-only: what we chose and why
│   ├── lessons.md         # corrections that became rules
│   └── models.md          # routing table: which model for which job
├── skills/                # the one real skills folder
│   ├── write-back/        # save what the session learned
│   ├── model-handoff/     # pass work to another model cold
│   └── skillify/          # turn a repeated task into a skill
├── projects/
│   └── example-project/
│       ├── AGENTS.md      # project rules, closest file wins
│       ├── CLAUDE.md      # @AGENTS.md, so Claude Code loads the project rules too
│       └── HANDOFF.md     # current state (written by model-handoff)
├── .bb/workflows/
│   └── build-review.js    # plan → build → review loop across vendors
├── .mcp.json              # tools, with secrets as ${ENV_VARS}
├── .env.example           # key names only
└── scripts/link-skills.sh # symlinks skills/ into every agent's folder
```

## Setup (5 minutes)

1. Use this repo as a template and make it **private**.
2. `cp .env.example .env` and fill in the keys you actually have.
3. `bash scripts/link-skills.sh` (add `--hermes` if you use Hermes).
4. Fill in `AGENTS.md` and `context/about.md`. Leave the rest until you need it.
5. Open the folder in any agent and ask: *"Read AGENTS.md and tell me what you know about this workspace."*
