#!/bin/bash
set -euo pipefail

cd "$CLAUDE_PROJECT_DIR"

# Run ESLint on staged files only
npm run lint
