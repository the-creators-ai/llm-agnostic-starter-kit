export const meta = {
  name: "build-review",
  description: "Plan with one model, build with another, review until OK",
  phases: [{ title: "Plan" }, { title: "Build" }, { title: "Review" }],
};

// Who does what is pinned in code: look for provider/model in each agent() call.
// Swap a model by editing that line. List the ids on your machine with:
//   bb provider models claude-code
//   bb provider models codex
// Reasoning levels: low, medium, high, xhigh, max (whatever the model lists).
const MAX_ROUNDS = 3;

const plan = await agent(
  "Read AGENTS.md. Write a short implementation plan with explicit acceptance checks for this task:\n\n" +
    args.task,
  { provider: "claude-code", model: "claude-opus-5-5", reasoningLevel: "high", phase: "Plan", label: "plan" },
);

let fixes = "";
for (let round = 1; round <= MAX_ROUNDS; round++) {
  await agent(
    "Implement this plan, then run its acceptance checks and report the output.\n\nPLAN:\n" +
      plan +
      (fixes ? "\n\nThe reviewer rejected the last attempt. Fix these first:\n" + fixes : ""),
    { provider: "codex", model: "gpt-6-sol", reasoningLevel: "medium", phase: "Build", label: "build-" + round },
  );

  const review = await agent(
    "Review the current changes against the plan. Run the checks yourself. Be strict: ok=true only if every check passes.\n\nPLAN:\n" +
      plan,
    {
      provider: "claude-code",
      model: "claude-opus-5-5",
      reasoningLevel: "high",
      phase: "Review",
      label: "review-" + round,
      schema: {
        type: "object",
        properties: {
          ok: { type: "boolean" },
          fixes: { type: "string" },
        },
        required: ["ok", "fixes"],
      },
    },
  );

  if (review.ok) return { status: "approved", rounds: round };
  fixes = review.fixes;
}

return { status: "needs-human", lastFixes: fixes };
