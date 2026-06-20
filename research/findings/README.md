# Research findings

Optional deep-dive write-ups beyond the standard audit markdown.

## When to add a finding

- Complex collection requiring extended analysis
- Cross-sample comparisons that do not fit the audit table format
- Investigation notes for classification **D** or **E** failures

## Naming

```
research/findings/<collection_id>.md
```

## Relationship to other artifacts

| Artifact | Scope |
|----------|-------|
| `research/audits/<collection_id>.audit.md` | Required; canonical audit record |
| `research/findings/<collection_id>.md` | Optional; supplementary analysis |
| `research/schema-gap-log.md` | Cross-collection schema gaps (D, 2+ collections) |
| `registry/collections/<collection_id>.json` | Generated definition when schema fit allows |

_No findings yet — see Phase 1 and Phase 2 collection findings._
