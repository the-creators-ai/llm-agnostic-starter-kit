#!/usr/bin/env bash
# One skills/ folder, every agent reads it.
#   Claude Code   -> .claude/skills
#   Codex, Gemini -> .agents/skills
#   BB            -> .bb/skills
#   Hermes        -> ~/.hermes/skills (global, optional: pass --hermes)
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"

for dir in .claude .agents .bb; do
  mkdir -p "$dir"
  if [ ! -e "$dir/skills" ]; then
    ln -s ../skills "$dir/skills"
    echo "linked $dir/skills -> skills/"
  fi
done

if [ "${1:-}" = "--hermes" ]; then
  mkdir -p "$HOME/.hermes/skills"
  for skill in skills/*/; do
    name="$(basename "$skill")"
    target="$HOME/.hermes/skills/$name"
    [ -e "$target" ] || { ln -s "$PWD/$skill" "$target"; echo "linked hermes: $name"; }
  done
fi
