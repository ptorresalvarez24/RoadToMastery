#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-4173}"

printf "Starting Road To Mastery at http://0.0.0.0:%s\n" "$PORT"
python3 -m http.server "$PORT" --directory .
