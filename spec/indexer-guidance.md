# Indexer Guidance

This document describes how **indexers, marketplaces, wallets, and bridges** should use Collection Definition Records.

---

## Processing flow

```
policy_id
  → lookup collection definition (by policy_ids[])
  → fetch raw on-chain metadata for asset
  → unwrap metadata_layout (CIP-25 / CIP-68)
  → apply metadata_layout paths
  → apply trait_mappings (+ extraction strategies)
  → apply media_mappings
  → apply social_mappings / link_mappings
  → apply normalization_rules
  → produce normalized metadata
```

### Lookup rules

- Indexers **MUST** match any `policy_id` in the definition’s `policy_ids` array.
- If no definition exists, indexers **MAY** fall back to generic CIP-25 parsing and **SHOULD** flag `collection_id: null` in output.
- If multiple definitions match (misconfiguration), indexers **SHOULD** log error and prefer registry maintainer resolution.

---

## Metadata unwrap

1. Read `metadata_layout.primary_standard`.
2. For `cip25`, locate asset record via `cip25.asset_metadata_path`.
3. For `cip68`, resolve reference-token metadata when `cip68.enabled` is true.
4. Apply `metadata_root` as base for trait/media paths.

---

## Trait extraction

For each entry in `trait_mappings`:

1. Read `extraction.strategy`.
2. Execute strategy (see [extraction-strategies.md](./extraction-strategies.md)).
3. Apply trait-level `normalization` map.
4. Apply matching `normalization_rules`.
5. Validate against `allowed_values` if present.
6. Coerce to `value_type` when safe.

Missing traits:

- If `required: true`, emit warning.
- Else omit from output.

---

## Media extraction

For each slot in `media_mappings` (`image`, `thumbnail`, `banner`, `logo`, `animation`, `files`):

1. Resolve sourced value (`value` then `source_path`).
2. Normalize URI scheme.
3. Populate normalized `media` object.

---

## Social and link extraction

Resolve `social_mappings` and `link_mappings` into flat URL maps. Omit unset keys.

---

## License and royalties

Copy resolved `license_info` and `royalty_info` into normalized output **without implying enforcement**.

---

## Indexing notes

Surface `indexing_notes` in `warnings` array:

| Severity | Handling |
|----------|----------|
| `info` | Include in `warnings`; optional UI |
| `warning` | **SHOULD** display to operators |
| `critical` | **SHOULD** block automated rarity or trait analytics |

---

## Normalized output shape

Implementations **SHOULD** emit:

```json
{
  "collection_id": "example-collection",
  "name": "Example Collection",
  "definition_status": "complete",
  "policy_id": "...",
  "asset_name": "...",
  "traits": {
    "Background": "Blue",
    "Eyes": "Laser"
  },
  "media": {
    "image": "ipfs://...",
    "animation": null,
    "banner": "https://...",
    "logo": null,
    "files": []
  },
  "socials": {
    "x": "https://x.com/example",
    "discord": null
  },
  "links": {
    "website": "https://example.com"
  },
  "license": {
    "license": "CC BY-NC 4.0",
    "license_url": "https://creativecommons.org/licenses/by-nc/4.0/",
    "commercial_use": false,
    "derivative_use": true
  },
  "royalties": {
    "has_royalties": true,
    "royalty_percentage": 5,
    "royalty_address": "addr1..."
  },
  "warnings": [
    "Image field normalized from bare CID to ipfs://"
  ]
}
```

### Output rules

- Omit null keys **MAY** be omitted or explicit null (document consumer choice).
- `traits` keys **SHOULD** use `canonical_trait` names.
- `warnings` **SHOULD** include indexing note messages and validation failures.

---

## Performance

- Definitions **SHOULD** be cached in memory keyed by `policy_id`.
- Parsers **SHOULD NOT** re-fetch definition per asset in same collection.
- Heavy collections **SHOULD** respect operator delays during bulk sync (see batch import docs).

---

## Bridges and wallets

Bridges **SHOULD**:

- Pass through normalized trait map for display.
- Not re-interpret raw metadata when a definition exists.
- Display social/link URLs with standard safety UX (no registry verification implied).

---

## Testing

Indexers **SHOULD** validate definitions with:

```bash
pnpm --filter @cardano-nft-collection-registry/cli run start validate <file>
pnpm validate-all --network mainnet
```

Golden tests **SHOULD** compare normalized output against fixture raw metadata samples.
