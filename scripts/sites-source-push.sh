#!/usr/bin/env bash
set -euo pipefail

remote_url="${1:?usage: sites-source-push.sh REMOTE_URL EXPECTED_OLD_SHA SOURCE_SHA [BRANCH]}"
expected_old_sha="${2:?missing expected old SHA}"
source_sha="${3:?missing source SHA}"
branch="${4:-main}"

case "$remote_url" in
  https://git.chatgpt-team.site/*) ;;
  *)
    echo "Refusing non-Sites remote: $remote_url" >&2
    exit 2
    ;;
esac

if [[ ! "$expected_old_sha" =~ ^[0-9a-f]{40}$ ]] || [[ ! "$source_sha" =~ ^[0-9a-f]{40}$ ]]; then
  echo "Expected full 40-character Git SHAs" >&2
  exit 2
fi

if [[ "$branch" != "main" ]]; then
  echo "Refusing unexpected Sites source branch: $branch" >&2
  exit 2
fi

IFS= read -r source_token
if [[ -z "$source_token" ]]; then
  echo "Missing Sites source token on stdin" >&2
  exit 2
fi

auth_header="Authorization: Bearer $source_token"
actual_old_sha="$(git -c credential.helper= -c http.extraHeader="$auth_header" \
  ls-remote "$remote_url" "refs/heads/$branch" | awk 'NR == 1 { print $1 }')"

if [[ "$actual_old_sha" != "$expected_old_sha" ]]; then
  echo "Sites source moved: expected $expected_old_sha, found ${actual_old_sha:-missing}" >&2
  exit 3
fi

git -c credential.helper= -c http.extraHeader="$auth_header" \
  push --force-with-lease="refs/heads/$branch:$expected_old_sha" \
  "$remote_url" "$source_sha:refs/heads/$branch"

unset source_token auth_header
echo "Sites source updated: $expected_old_sha -> $source_sha"
