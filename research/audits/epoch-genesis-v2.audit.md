# Collection Audit: Epoch Genesis v2

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `epoch-genesis-v2` |
| `collection_name` | Epoch Genesis v2 |
| `audit_phase` | 2 |
| `auditor` | Phase 2 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
123da5e4ef337161779c6729d2acd765f7a33a833b2a21a063ef65a5
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `123da5e4ef337161779c6729d2acd765f7a33a833b2a21a063ef65a55369636b43697479333431` | Blockfrost raw |
| asset-002 | `123da5e4ef337161779c6729d2acd765f7a33a833b2a21a063ef65a55369636b43697479333432` | Blockfrost raw |
| asset-003 | `123da5e4ef337161779c6729d2acd765f7a33a833b2a21a063ef65a55369636b43697479333436` | Blockfrost raw |
| asset-004 | `123da5e4ef337161779c6729d2acd765f7a33a833b2a21a063ef65a55369636b43697479333532` | Blockfrost raw |
| asset-005 | `123da5e4ef337161779c6729d2acd765f7a33a833b2a21a063ef65a55369636b43697479333538` | Blockfrost raw |
| asset-006 | `123da5e4ef337161779c6729d2acd765f7a33a833b2a21a063ef65a55369636b43697479333634` | Blockfrost raw |
| asset-007 | `123da5e4ef337161779c6729d2acd765f7a33a833b2a21a063ef65a5544845414e5448454d3538` | Blockfrost raw |
| asset-008 | `123da5e4ef337161779c6729d2acd765f7a33a833b2a21a063ef65a55369636b43697479333730` | Blockfrost raw |
| asset-009 | `123da5e4ef337161779c6729d2acd765f7a33a833b2a21a063ef65a55369636b43697479333736` | Blockfrost raw |
| asset-010 | `123da5e4ef337161779c6729d2acd765f7a33a833b2a21a063ef65a55369636b43697479333832` | Blockfrost raw |

Raw samples directory: `research/raw-samples/epoch-genesis-v2/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 2 genesis/epoch naming; candidate for non-standard or CIP-68-adjacent metadata beyond Phase 1 SpaceBudz baseline.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | Flat trait-like keys at metadata root |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | release, links, genres |

---

## Media analysis

| Field | Path or value | Source | Notes |
|-------|---------------|--------|-------|
| Image | `$.image[0]` | on-chain | `image` string; `files[]` multi-media; `image` array |
| Animation | — |  | |
| Files / multi-media | `$.files[]` | on-chain | |
| Thumbnail | — | | |
| Collection logo | — | registry-only | |
| Collection banner | — | registry-only | |

---

## Trait analysis

| Field | Finding |
|-------|---------|
| Trait grouping style | root_flat_keys |
| Primary trait root path | Flat trait-like keys at metadata root |
| Canonical trait names | See inventory |
| Value types observed | string, number, array (collection-dependent) |
| Normalization requirements | Mostly none |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| collection | `$.collection` | string | none | no |
| song_title | `$.song_title` | string | none | no |
| album_title | `$.album_title` | string | none | no |
| distributor | `$.distributor` | string | none | no |
| release_type | `$.release_type` | string | none | no |
| track_number | `$.track_number` | string | none | no |
| song_duration | `$.song_duration` | string | none | no |
| music_metadata_version | `$.music_metadata_version` | string | none | no |

---

## Socials

| Platform | Location or explicit value | Status |
|----------|----------------------------|--------|
| twitter | `$.twitter` or nested | found |
| discord | `$.discord` or nested | found |

---

## Links

| Link type | Location or explicit value | Status |
|-----------|----------------------------|--------|
| website | website | found |
| mint | — | missing |
| documentation | — | missing |
| other | — | see findings |

---

## License

| Field | Location or value | Status |
|-------|-------------------|--------|
| License text | release.copyright, copyright | found |
| License URL | — | missing |
| Commercial use | — | missing |
| Derivative use | — | missing |

---

## Royalties

| Field | Finding |
|-------|---------|
| Discoverable | no (in on-chain metadata samples) |
| Source | unknown |
| Percentage | — |
| Address | — |
| Notes | Royalties may exist at marketplace/CIP-27 level; not always in asset metadata |

---

## Indexing caveats

| Severity | Message |
|----------|---------|
| info | Raw samples are Blockfrost asset responses; extract `onchain_metadata` for parsing |
| info | All fetched samples have on-chain metadata |
| info | Use `extraction.strategy: root_flat_keys` or per-key `direct_path` |

---

## Schema fit assessment

| Question | Answer |
|----------|--------|
| Can current schema represent this collection? | yes — with explicit mappings and indexing notes |
| `schema_fit` | fits_with_notes |
| Proposed definition status | discovery complete; definition deferred |
| Blockers | None requiring schema change in isolation |

---

## Failures

| # | Area | Description | Classification |
|---|------|-------------|----------------|
| 1 | Traits | Traits at metadata root, not under attributes object | C |
| 2 | Media | image is array not string | C |
| 3 | License | License/terms present in non-standard location | C |
| 4 | Royalties | No royalty metadata on asset | A |
| 5 | Custom | Collection-specific fields: release, links, genres, artists | C |

---

## Scoring

```
parse_success_score: 85
trait_mapping_confidence: high
media_mapping_confidence: high
social_mapping_confidence: medium
schema_fit: fits_with_notes
```

---

## Outputs

| Artifact | Path |
|----------|------|
| Raw samples | `research/raw-samples/epoch-genesis-v2/` |
| Audit report | `research/audits/epoch-genesis-v2.audit.md` |
| Generated definition | `registry/collections/epoch-genesis-v2.json` (placeholder only; not finalized) |
| Detailed finding | `research/findings/epoch-genesis-v2.md` |

---

## Notes

Detailed analysis: `research/findings/epoch-genesis-v2.md`. No schema, parser, or final definition changes in this pass.
