# Chattermark

Exploit-likelihood early warning for capacity-capped patch prioritisation.

OpenAPI-first DDD monorepo (`@chattermark/*`) built from the zero-apps codegen scaffold.

**Product docs:** [PRODUCT.md](./PRODUCT.md) · [USER_STORIES.md](./USER_STORIES.md) · [WEBAPP.md](./WEBAPP.md)

> **Do not push `.codegen/` to GitHub.** It is gitignored; restore the tool locally from the scaffold when needed.

## Layout

```
packages/openapi-core  →  packages/core  →  platform/services  →  platform/adapters  →  platform/api-server
         ↑ OpenAPI source of truth                              ports↑        impl↑              HTTP↑
platform/webapp  ← generated clients + product pages
```

## Quick start

```bash
pnpm install
pnpm lint:openapi && pnpm bundle:openapi
pnpm codegen:paths
pnpm build
pnpm dev:api
# Health: curl http://127.0.0.1:4000/health
# Demo key: X-API-Key: chattermark_demo_local_dev_key
```

Optional Dynamo Local:

```bash
docker compose up -d
TABLE_NAME=chattermark-core-local AWS_ENDPOINT_URL=http://localhost:8000 node scripts/ensure-dynamo-table.mjs
```

## Codegen rules

1. **New domain** → full multi-layer generate once (Mode A).
2. **YAML edit on existing domain** → regenerate **core only**, handwrite below (Mode B).
3. Keep envelopes (`{ data, meta }`) and identity middleware intact.

See `.cursor/skills/` and `docs/CODEGEN.md`.

## Package scope

**`@chattermark/*`** — short app name only (never `@ai-cyber-chattermark`).
