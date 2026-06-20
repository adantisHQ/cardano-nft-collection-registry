# Trait Mappings

Trait mappings define **how to extract and normalize one canonical trait** across an entire collection.

The registry stores mappings, not per-NFT trait values.

## Trait mapping

```json
{
  "canonical_trait": "Background",
  "display_name": "Background",
  "value_type": "enum",
  "category": "visual",
  "required": false,
  "dynamic": false,
  "source": "cip25",
  "source_paths": [
    "$.attributes.Background",
    "$.traits.background"
  ],
  "extraction": {
    "strategy": "first_existing_path"
  },
  "normalization": {
    "blue": "Blue"
  },
  "allowed_values": ["Blue", "Red", "Green"]
}
```

| Field | Description |
|-------|-------------|
| `canonical_trait` | Stable internal trait key |
| `display_name` | UI label |
| `value_type` | Expected type (see below) |
| `category` | Grouping hint (`visual`, `stats`, etc.) |
| `required` | Indexer should warn if missing |
| `dynamic` | Value may change (common with CIP-68) |
| `source` | Origin hint |
| `source_paths` | Ordered paths to try in raw metadata |
| `extraction` | Optional explicit extraction strategy (see below) |
| `normalization` | Key/value alias map applied after extraction |
| `allowed_values` | Known enum values; unknown values produce warnings |

## Extraction strategies

When `extraction` is omitted, the parser falls back to trying each path in `source_paths[]` (same as `first_existing_path`).

Each strategy uses the minimal dot-path resolver documented in [source-paths.md](source-paths.md). This is **not** full JSONPath.

| Strategy | Purpose | Required fields |
|----------|---------|-----------------|
| `direct_path` | Read one value from a fixed path | `source_path` |
| `first_existing_path` | Try `source_paths[]` in order | `source_paths` |
| `array_singleton_object` | Find `{ key: value }` inside an array of singleton objects | `source_path`, `key` |
| `key_value_array` | Find row where `item[key_field] === key`, return `item[value_field]` | `source_path`, `key`; optional `key_field`, `value_field` |
| `root_flat_keys` | Read trait directly from metadata root | `key` |

### `array_singleton_object`

Used when traits or parcel fields are stored as arrays of one-key objects.

**The Mallard Order:**

```json
{
  "canonical_trait": "Eyes",
  "value_type": "string",
  "extraction": {
    "strategy": "array_singleton_object",
    "source_path": "$.Attributes",
    "key": "Eyes"
  }
}
```

Raw metadata:

```json
{
  "Attributes": [
    { "Accessories": "None" },
    { "Eyes": "Blue" },
    { "Background": "Green" }
  ]
}
```

**Pavia land parcels:**

```json
{
  "canonical_trait": "x",
  "value_type": "string",
  "extraction": {
    "strategy": "array_singleton_object",
    "source_path": "$.-----Land Sale 1-----",
    "key": "x"
  }
}
```

### `key_value_array`

Used for layouts like DEADPXLZ `properties`:

```json
{
  "canonical_trait": "type",
  "value_type": "string",
  "extraction": {
    "strategy": "key_value_array",
    "source_path": "$.properties",
    "key": "type",
    "key_field": "key",
    "value_field": "value"
  }
}
```

### `root_flat_keys`

Used when traits are top-level metadata fields (Clay Nation, Boss Cat Rocket Club, Jellycubes):

```json
{
  "canonical_trait": "Fur",
  "value_type": "string",
  "extraction": {
    "strategy": "root_flat_keys",
    "key": "Fur"
  }
}
```

Keys with spaces (e.g. `hats and hair`) are supported.

## Parser API

```typescript
import { extractTraitValue, normalizeCollectionMetadata } from "@cardano-nft-collection-registry/core";

const { value, warnings } = extractTraitValue(rawMetadata, traitMapping);
```

`extractTraitValue`:

1. Uses `extraction.strategy` when present
2. Falls back to `source_paths` when `extraction` is absent
3. Applies per-trait `normalization`
4. Returns `value` and `warnings` (including not-found and enum validation warnings)

`normalizeCollectionMetadata` uses `extractTraitValue` for every entry in `trait_mappings[]`.

## Value types

`string`, `enum`, `integer`, `number`, `boolean`, `date`, `datetime`, `percentage`, `score`, `rank`, `object`, `array`, `unknown`

## Normalization

Two layers:

1. **Per-trait `normalization` map** — alias raw string values (e.g. `"blue"` → `"Blue"`)
2. **`normalization_rules[]`** — cross-cutting rules for trait names and values

## CIP-68 dynamic traits

Set `dynamic: true` when reference token updates may change trait values.

Hex-encoded trait payloads (e.g. SpaceBudz) are not covered by these strategies and remain collection-specific edge cases.

## What the registry does not store

- Per-NFT trait instances
- Computed rarity rankings
- Supply counts

## Schema reference

- `schemas/trait-mapping.schema.json`
- Example: `examples/collection.extraction-strategies.json`

## Related

- [source-paths.md](source-paths.md)
- [trait-schema.md](trait-schema.md)
