---
name: beads
description: Use when working in a repository that uses bd or Beads for durable project task tracking, issue dependencies, blocker management, multi-session handoff, or shared work memory. Trigger when the user asks to find ready work, claim or close tasks, create follow-up work, inspect blockers, recover project context, or choose between local planning and persistent project tracking.
---

# Beads

Use Beads as the shared project task system. Local plans, scratch files, and personal memories are useful, but they are not the durable source of truth for project work.

<!-- BEGIN CODEX THREAD BEADS PROTOCOL -->
## First Step

In this repository, do not call bare `bd`. Recover context with:

```bash
./scripts/bd-agent prime
```

The wrapper requires `CODEX_THREAD_ID` and derives a unique Beads actor `codex:<thread-id>`. It fails closed when the task identity is unavailable.

## Preferred Route

Use the repository wrapper `./scripts/bd-agent` for every Beads command. This prevents multiple Codex tasks from collapsing into the same Git-user assignee.

## Core CLI Workflow

1. Atomically claim one self-selected ready issue:

```bash
./scripts/bd-agent claim
```

Do not split this into `bd ready` followed by `bd update --claim`.

2. If a coordinator explicitly assigned an issue or handed it off:

```bash
./scripts/bd-agent claim-id <id>
```

3. Inspect the explicit issue and list only work owned by this task:

```bash
./scripts/bd-agent show <id>
./scripts/bd-agent mine
```

Never treat an unfiltered project-wide `in_progress` list as this task's work.

4. Create durable follow-up work with the same actor:

```bash
./scripts/bd-agent create "Short title" --description="Why this exists and what needs to be done" --type=task --priority=2
```

5. Close only an explicit issue after the work is actually complete:

```bash
./scripts/bd-agent close <id> --reason="Completed"
```

Every mutating command must include an explicit issue ID. Never rely on shared `.beads/last-touched`.

6. Continue the worker loop: after closing owned work, immediately run `./scripts/bd-agent claim` again. Do not end the task while ready work remains. Stop only when the atomic claim reports that no issue is available, then report the queue evidence and blocker.
<!-- END CODEX THREAD BEADS PROTOCOL -->

## What Belongs In Beads

Use Beads for:

- shared project tasks
- blockers and dependencies
- discovered follow-up work
- work that must survive thread reset, compaction, or handoff
- status that another person or agent should be able to resume

Use agent-local planning tools only for the current turn's execution checklist. Do not treat them as shared project state.

## Rules

- Never bypass `./scripts/bd-agent`, override `--actor`, adopt another actor's `in_progress` issue, or mutate an issue without an explicit ID.
- `claim`, `claim-id`, and `mine` have fixed interfaces and accept no passthrough flags. Prefix global flags, unknown commands, `edit`, and `update --claim` fail closed; use the dedicated wrapper subcommands.
- Do not create markdown TODO files as the source of truth when Beads is available.
- Do not use `bd edit`; it opens an interactive editor. Use explicit `./scripts/bd-agent update <id>` flags instead.
- Prefer `--json` when parsing `bd` output programmatically.
- If hooks are installed, Beads context may already be injected. Run `./scripts/bd-agent prime` when context is missing.
- Do not auto-close or mutate tasks unless the work is actually complete.
