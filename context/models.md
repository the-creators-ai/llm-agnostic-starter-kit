# Models

> Routing table for agents. Pick the cheapest model that can do the job reliably.
> Prices: API list, per 1M tokens (input / output), checked 2026-10-29. Re-check monthly.

| Job | Model | Price | Escalate when |
|---|---|---|---|
| Plans, architecture, hardest thinking | Claude Fable 5.1 | $10 / $50 | — |
| Daily building, final review | Claude Opus 5.5, or Codex on a subscription | $4 / $20 (Opus API price) | Plan is unclear → Fable |
| Everyday edits, subagents | Claude Sonnet 5.5 | $2 / $10 | Fails checks twice → Opus |
| Long-context grunt work, bulk edits | DeepSeek V4.1 Flash (OpenRouter) | $0.045 / $0.50 | Needs judgment → Sonnet |
| Cheap coding subagents | Qwen3 Coder Next (OpenRouter) | $0.12 / $0.80 | Task isn't well-specified → Sonnet |
| Tagging, routing, classification | Claude Haiku 5.5 | $0.10 / $0.50 | — |
| Instant answers in loops | GPT-OSS 20B on Groq | $0.075 / $0.30 | — |
| Private / offline | Local model via Ollama | $0 | Long agent runs → cloud model |

Rules:
- A stronger model writes the plan. A cheaper model executes it. Never hand an open-ended problem to the cheapest tier.
- Review with a different vendor than the builder.
- Client data never goes through discount gateways.
