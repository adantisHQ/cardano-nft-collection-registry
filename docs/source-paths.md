# Source Paths

Collection definitions use `source_path` fields to extract values from raw NFT metadata.

The v0.1 resolver implements a **minimal dot-path syntax**, not full JSONPath.

## Supported syntax

| Pattern | Example |
|---------|---------|
| Optional root prefix | `$.attributes.Background` |
| Dot properties | `attributes.Background` |
| Array indices | `$.files[0].src` |
| Combined | `files[0].mediaType` |

## Resolution

```typescript
import { extractBySourcePath } from "@cardano-nft-collection-registry/core";

extractBySourcePath(rawMetadata, "$.attributes.Background");
extractBySourcePath(rawMetadata, "$.files[0].src");
```

Trait mappings try each path in `source_paths[]` until a non-null value is found when no `extraction` object is present.

Trait mappings may also declare an explicit `extraction.strategy`. See [trait-mappings.md](trait-mappings.md).

## Limitations (v0.1)

Not supported:

- JSONPath filters (`[?(@.price)]`)
- Wildcards (`*`, `..`)
- Array slices (`[0:3]`)
- Union expressions (`$.a,$.b`)
- Recursive descent

If a collection requires unsupported syntax, document a workaround in `indexing_notes` or normalize in a pre-processing step.

## Placeholder tokens in metadata_layout

Paths in `metadata_layout.cip25` may document template placeholders for indexers:

- `<policy_id>`
- `<asset_name>`

These are **documentation templates** for indexers resolving CIP-25 label structure. The core `extractBySourcePath` function does not substitute placeholders automatically in v0.1.

## Sourced value resolution

For fields using the sourced value pattern:

1. If `value` is present, use it
2. Else if `source_path` is set, call `extractBySourcePath`
3. Else omit from normalized output

## Related

- [registry-model.md](registry-model.md)
- [trait-mappings.md](trait-mappings.md)
- [trait-schema.md](trait-schema.md)
- `SOURCE_PATH_LIMITATIONS` export in `@cardano-nft-collection-registry/core`
