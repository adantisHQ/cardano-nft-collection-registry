# Audits

Per-collection audit reports for schema validation.

## Naming

```
research/audits/<collection_id>.audit.md
```

## Create a new audit

```bash
pnpm --filter @cardano-nft-collection-registry/cli start audit-template <collection_id>
```

## Summarize a completed audit

```bash
pnpm --filter @cardano-nft-collection-registry/cli start audit-report <collection_id>
```

See [validation-methodology.md](../validation-methodology.md) for the full process.

_No audits yet._
