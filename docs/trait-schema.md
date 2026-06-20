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
    "$.traits.background",
    "$.character.bg"
  ],
  "normalization": {
    "blue": "Blue",
    "BLUE": "Blue"
  },
  "allowed_values": ["Blue", "Red", "Green"],
  "notes": ""
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
| `normalization` | Key/value alias map applied after extraction |
| `allowed_values` | Known enum values; unknown values produce warnings |

## Value types

`string`, `enum`, `integer`, `number`, `boolean`, `date`, `datetime`, `percentage`, `score`, `rank`, `object`, `array`, `unknown`

## Source paths

Paths use the minimal dot-path resolver. The parser tries each path in order until a value is found, or uses an explicit `extraction.strategy`.

See [source-paths.md](source-paths.md) and [trait-mappings.md](trait-mappings.md).

## Normalization

Two layers:

1. **Per-trait `normalization` map** — alias raw string values (e.g. `"blue"` → `"Blue"`)
2. **`normalization_rules[]`** — cross-cutting rules for trait names and values

## CIP-25 attributes

CIP-25 often stores traits under `attributes` as an object or array. Define all known paths:

```json
"source_paths": [
  "$.attributes.Background",
  "$.attributes.background"
]
```

## CIP-68 dynamic traits

Set `dynamic: true` when reference token updates may change trait values.

## What the registry does not store

- Per-NFT trait instances
- Computed rarity rankings
- Supply counts

Those belong in indexers and analytics pipelines.

## Schema reference

`schemas/trait-mapping.schema.json`

Examples: `examples/collection.with-traits.json`, `examples/collection.cip68.json`
