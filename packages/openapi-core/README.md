# @chattermark/openapi-core

OpenAPI contracts for Chattermark — one YAML per domain.

| Domain | Spec |
|--------|------|
| identity | `src/identity.yaml` |
| signals | `src/signals.yaml` |
| sources | `src/sources.yaml` |
| forecasts | `src/forecasts.yaml` |
| estate | `src/estate.yaml` |
| warnings | `src/warnings.yaml` |
| decisions | `src/decisions.yaml` |
| assurance | `src/assurance.yaml` |
| governance | `src/governance.yaml` |

Shared: `src/common/` (envelopes, security, parameters, product-shared schemas).

```bash
pnpm lint:domains
pnpm bundle:domains
```

Legacy monolith: `docs/openapi-v0-monolith.yaml` (and root `openapi.yaml` deprecated pointer).
