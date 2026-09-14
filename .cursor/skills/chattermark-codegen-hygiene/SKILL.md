---
name: chattermark-codegen-hygiene
description: >-
  Chattermark rule that .codegen must never be pushed to GitHub. Use when
  committing, staging files, editing .gitignore, copying the scaffold, running
  zero-codegen, or when the user mentions codegen tooling or .codegen.
---

# Chattermark — `.codegen` must never be pushed to GitHub

## Hard rule

`.codegen` must **never** be pushed to GitHub.

- Do not `git add` `.codegen/`, `codegen/`, or `**/zero_codegen/`.
- Do not remove `.codegen/` from `.gitignore`.
- Do not commit the zero-codegen Python tool tree, merged configs under `.codegen/`, or teaching OpenAPI examples from `.codegen/openapi-examples/`.
- Local copy of `.codegen` from the zero-apps codegen scaffold (or a private store) is fine and expected for agents running generate/bundle.
- Collaborators restore `.codegen` privately; it is not part of the GitHub remote.

## What *is* committed

- OpenAPI domain YAMLs under `packages/openapi-core/`
- Generated TypeScript under `packages/core` and `platform/*` (product code)
- Project skills under `.cursor/skills/` (this file included)

## If asked to commit everything

Stage only tracked product paths. Refuse to stage `.codegen/` and remind that it must never be pushed to GitHub.
