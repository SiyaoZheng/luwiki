#!/bin/sh
set -eu

repo_root=$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)
wrapper="$repo_root/scripts/bd-agent"

fail() {
  printf '%s\n' "FAIL: $*" >&2
  exit 1
}

if CODEX_THREAD_ID= "$wrapper" actor >/dev/null 2>&1; then
  fail "missing CODEX_THREAD_ID must fail closed"
fi

actor=$(CODEX_THREAD_ID=thread-a "$wrapper" actor)
[ "$actor" = "codex:thread-a" ] || fail "unexpected actor: $actor"

if CODEX_THREAD_ID=thread-a "$wrapper" --actor impostor where >/dev/null 2>&1; then
  fail "prefix actor override must be rejected"
fi

if CODEX_THREAD_ID=thread-a "$wrapper" where --actor=impostor >/dev/null 2>&1; then
  fail "suffix actor override must be rejected"
fi

tmp_dir=$(mktemp -d "${TMPDIR:-/tmp}/luwiki-bd-agent.XXXXXX")
trap 'rm -rf "$tmp_dir"' EXIT HUP INT TERM

git -C "$tmp_dir" init -q
git -C "$tmp_dir" config user.name TestUser
git -C "$tmp_dir" config user.email test@example.invalid
(cd "$tmp_dir" && bd init --non-interactive --skip-agents --skip-hooks --prefix=test -q)

for event in SessionStart UserPromptSubmit PreCompact PostCompact; do
  case "$event" in
    SessionStart)
      payload='{"session_id":"session-a","cwd":"/tmp","hook_event_name":"SessionStart","model":"test","permission_mode":"default","source":"startup"}'
      ;;
    UserPromptSubmit)
      payload='{"session_id":"session-a","turn_id":"turn-a","cwd":"/tmp","hook_event_name":"UserPromptSubmit","model":"test","permission_mode":"default","prompt":"test"}'
      ;;
    PreCompact|PostCompact)
      payload="{\"session_id\":\"session-a\",\"turn_id\":\"turn-a\",\"cwd\":\"/tmp\",\"hook_event_name\":\"$event\",\"model\":\"test\",\"trigger\":\"auto\"}"
      ;;
  esac
  hook_json=$(printf '%s\n' "$payload" | (cd "$tmp_dir" && CODEX_THREAD_ID=thread-a "$wrapper" hook "$event"))
  printf '%s\n' "$hook_json" | jq -e . >/dev/null || fail "$event hook must output JSON"
  case "$event" in
    SessionStart|UserPromptSubmit)
      printf '%s\n' "$hook_json" | jq -e \
        --arg event "$event" '
          .hookSpecificOutput.hookEventName == $event and
          (.hookSpecificOutput.additionalContext |
           contains("[repo Beads protocol] actor=codex:thread-a") and
           contains("continue while ready work exists") and
           contains("assignee exactly matches this actor"))
        ' >/dev/null || fail "$event hook must inject the strict protocol"
      ;;
    PreCompact|PostCompact)
      printf '%s\n' "$hook_json" | jq -e '.continue == true' >/dev/null ||
        fail "$event hook must emit a common-output success object"
      ;;
  esac
done

jq -e '
  (.hooks.SessionStart[0].matcher | test("compact")) and
  ([.hooks[][] .hooks[].command] |
   all(test("git rev-parse --show-toplevel")))
' "$repo_root/.codex/hooks.json" >/dev/null || fail "hooks must include compact and resolve from git root"

mkdir -p "$tmp_dir/scripts" "$tmp_dir/nested/start"
cp "$wrapper" "$tmp_dir/scripts/bd-agent"
chmod +x "$tmp_dir/scripts/bd-agent"
session_command=$(jq -r '.hooks.SessionStart[0].hooks[0].command' "$repo_root/.codex/hooks.json")
subdir_hook_json=$(printf '%s\n' "$payload" | (cd "$tmp_dir/nested/start" && CODEX_THREAD_ID=thread-a sh -c "$session_command"))
printf '%s\n' "$subdir_hook_json" | jq -e '
  .hookSpecificOutput.additionalContext |
  contains("[repo Beads protocol] actor=codex:thread-a")
' >/dev/null || fail "repo-local hook command must work from a subdirectory"

first_id=$(bd -C "$tmp_dir" --actor bootstrap create "first task" --type=task --priority=0 --json | jq -r '.id')
second_id=$(bd -C "$tmp_dir" --actor bootstrap create "second task" --type=task --priority=1 --json | jq -r '.id')

if (cd "$tmp_dir" && CODEX_THREAD_ID=thread-a "$wrapper" claim --claim=false >/dev/null 2>&1); then
  fail "claim safety flags must not be overridden"
fi

if (cd "$tmp_dir" && CODEX_THREAD_ID=thread-a "$wrapper" claim-id "$first_id" --assignee codex:other >/dev/null 2>&1); then
  fail "claim-id safety flags must not be overridden"
fi

if (cd "$tmp_dir" && CODEX_THREAD_ID=thread-a "$wrapper" mine --assignee codex:other >/dev/null 2>&1); then
  fail "mine safety filters must not be overridden"
fi

if (cd "$tmp_dir" && CODEX_THREAD_ID=thread-a "$wrapper" --json update --status in_progress >/dev/null 2>&1); then
  fail "global flags must not bypass command guards"
fi

if (cd "$tmp_dir" && CODEX_THREAD_ID=thread-a "$wrapper" edit >/dev/null 2>&1); then
  fail "interactive edit must be rejected"
fi

if (cd "$tmp_dir" && CODEX_THREAD_ID=thread-a "$wrapper" update "$first_id" --claim >/dev/null 2>&1); then
  fail "update --claim must be rejected in favor of claim-id"
fi

first_status=$(bd -C "$tmp_dir" show "$first_id" --json | jq -r '.[0].status')
first_unassigned=$(bd -C "$tmp_dir" show "$first_id" --json | jq -r '.[0].assignee // ""')
[ "$first_status" = "open" ] && [ -z "$first_unassigned" ] ||
  fail "rejected override attempts must not mutate the first issue"

for operation in update close reopen defer undefer delete done; do
  if (cd "$tmp_dir" && CODEX_THREAD_ID=thread-a "$wrapper" "$operation" --status open >/dev/null 2>&1); then
    fail "$operation without an explicit ID must be rejected"
  fi
done

(cd "$tmp_dir" && CODEX_THREAD_ID=thread-a "$wrapper" claim-id "$first_id" >/dev/null)
first_assignee=$(bd -C "$tmp_dir" show "$first_id" --json | jq -r '.[0].assignee')
[ "$first_assignee" = "codex:thread-a" ] || fail "first claim used $first_assignee"

if (cd "$tmp_dir" && CODEX_THREAD_ID=thread-b "$wrapper" claim-id "$first_id" >/dev/null 2>&1); then
  fail "a distinct actor must not reclaim another actor's issue"
fi

(cd "$tmp_dir" && CODEX_THREAD_ID=thread-b "$wrapper" claim >/dev/null)
second_assignee=$(bd -C "$tmp_dir" show "$second_id" --json | jq -r '.[0].assignee')
[ "$second_assignee" = "codex:thread-b" ] || fail "atomic ready claim used $second_assignee"

for round in 1 2 3; do
  bd -C "$tmp_dir" --actor bootstrap create "parallel $round a" --type=task --priority=0 --json >/dev/null
  bd -C "$tmp_dir" --actor bootstrap create "parallel $round b" --type=task --priority=0 --json >/dev/null

  out_a="$tmp_dir/claim-$round-a.json"
  out_b="$tmp_dir/claim-$round-b.json"
  (cd "$tmp_dir" && CODEX_THREAD_ID=parallel-a "$wrapper" claim >"$out_a") &
  pid_a=$!
  (cd "$tmp_dir" && CODEX_THREAD_ID=parallel-b "$wrapper" claim >"$out_b") &
  pid_b=$!

  wait "$pid_a" || fail "parallel actor A failed in round $round"
  wait "$pid_b" || fail "parallel actor B failed in round $round"

  id_a=$(jq -r 'if type == "array" then .[0].id else .id end' "$out_a")
  id_b=$(jq -r 'if type == "array" then .[0].id else .id end' "$out_b")
  [ -n "$id_a" ] && [ "$id_a" != "null" ] || fail "actor A returned no ID in round $round"
  [ -n "$id_b" ] && [ "$id_b" != "null" ] || fail "actor B returned no ID in round $round"
  [ "$id_a" != "$id_b" ] || fail "parallel actors received the same issue in round $round"

  assignee_a=$(bd -C "$tmp_dir" show "$id_a" --json | jq -r '.[0].assignee')
  assignee_b=$(bd -C "$tmp_dir" show "$id_b" --json | jq -r '.[0].assignee')
  [ "$assignee_a" = "codex:parallel-a" ] || fail "wrong actor A assignee in round $round"
  [ "$assignee_b" = "codex:parallel-b" ] || fail "wrong actor B assignee in round $round"
done

printf '%s\n' "PASS: bd-agent isolates Codex threads and claims atomically"
