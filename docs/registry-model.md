# Collection Definition Model

The registry stores **Collection Definition Records** — technical specifications for how to interpret an entire Cardano NFT collection.

## Purpose

Answer: **Given a policy ID, how should an application interpret this collection?**

The registry does not store per-NFT traits. It stores rules for extraction, normalization, and presentation.

## Required fields

| Field | Description |
|-------|-------------|
| `registry_version` | Semver schema version (e.g. `1.0.0`) |
| `collection_id` | Stable lowercase kebab-case identifier |
| `name` | Collection name |
| `definition_status` | Completeness indicator (see below) |
| `policy_ids` | One or more 56-char hex policy IDs (minimum 1) |

## definition_status

| Status | Meaning |
|--------|---------|
| `minimal` | Only identity and policy information is known. Parsing rules are not defined or not usable yet. |
| `partial` | Some important parsing information is missing or unresolved (e.g. encoded traits, unresolved layout, ecosystem scope unclear). |
| `complete` | The registry definition is sufficient to parse the known metadata layout for this collection, even if optional socials, license, or royalties are absent. |
| `inferred` | The definition was inferred from samples and has not been confirmed by the creator or project. |
| `broken` | Metadata layout is inconsistent or unreliable; the definition documents workarounds or limits. |
| `unknown` | Not enough information to assess completeness. |

**Important:** Absent optional fields (socials, license, royalties) alone do **not** require `partial`. Use `partial` when core parsing rules for traits, media, or layout remain unresolved.

## Sourced values

Most mappable fields use the sourced value pattern:

```json
{
  "value": "https://example.com",
  "source_path": "$.project.website",
  "source": "registry",
  "notes": "Optional context"
}
```

Resolution order in parsers:

1. Use `value` when present (including explicit `null` only when no extraction desired — omit field instead)
2. Else resolve `source_path` from raw metadata
3. Else field is absent in normalized output

See [source-paths.md](source-paths.md) for path syntax.

## Record sections

### identity

Collection identity fields: display name, description, category, tags.

### metadata_layout

How metadata is structured: primary standard, asset name encoding, CIP-25 paths, CIP-68 datum configuration, custom notes.

### trait_mappings

One entry per canonical trait. Each defines `source_paths[]`, normalization, value type, and allowed values.

See [trait-schema.md](trait-schema.md).

### media_mappings

Image, thumbnail, banner, logo, animation, and multi-file media extraction or explicit registry values.

### social_mappings

Social platforms (`x`, `discord`, `telegram`, etc.) as sourced values.

### link_mappings

Official links (`website`, `mint`, `documentation`, etc.) as sourced values.

### external_resources

Off-chain manifests, archives, and reference URIs.

### license_info

License name, URL, commercial use, derivative use — explicit or extracted.

### royalty_info

Royalty percentage, address, token reference, and source (`cip27`, `marketplace`, etc.).

### normalization_rules

Cross-cutting rename and value mapping rules applied after extraction.

### indexing_notes

Structured caveats with severity (`info`, `warning`, `critical`).

## Identity vs policy

- `collection_id` is the stable registry key
- `policy_ids` attach to the collection; they are not the collection identity
- Multiple policies may belong to one collection

## Parser output

```typescript
normalizeCollectionMetadata(rawMetadata, collectionDefinition)
```

Returns:

```json
{
  "collection_id": "...",
  "name": "...",
  "traits": {},
  "media": {},
  "socials": {},
  "links": {},
  "license": {},
  "royalties": {},
  "warnings": []
}
```

## JSON Schema

- `schemas/collection-definition.schema.json`
- `schemas/sourced-value.schema.json`
- `schemas/trait-mapping.schema.json`

## Validation

```bash
nft-collection-registry validate registry/collections/example-collection.json
```
