# Collection Audit: Book.io - The Wizard Tim Audiobook

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `book-io-wizard-tim-audiobook` |
| `collection_name` | Book.io - The Wizard Tim Audiobook |
| `audit_phase` | 2 |
| `auditor` | Phase 2 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
e1d98823331929b449b037b212f275e15d9dba800caa6ebf42dbc627
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `e1d98823331929b449b037b212f275e15d9dba800caa6ebf42dbc62757697a61726454696d417564696f626f6f6b31393338` | Blockfrost raw |
| asset-002 | `e1d98823331929b449b037b212f275e15d9dba800caa6ebf42dbc62757697a61726454696d417564696f626f6f6b31393339` | Blockfrost raw |
| asset-003 | `e1d98823331929b449b037b212f275e15d9dba800caa6ebf42dbc62757697a61726454696d417564696f626f6f6b31393235` | Blockfrost raw |
| asset-004 | `e1d98823331929b449b037b212f275e15d9dba800caa6ebf42dbc62757697a61726454696d417564696f626f6f6b31393133` | Blockfrost raw |
| asset-005 | `e1d98823331929b449b037b212f275e15d9dba800caa6ebf42dbc62757697a61726454696d417564696f626f6f6b31393032` | Blockfrost raw |
| asset-006 | `e1d98823331929b449b037b212f275e15d9dba800caa6ebf42dbc62757697a61726454696d417564696f626f6f6b31383930` | Blockfrost raw |
| asset-007 | `e1d98823331929b449b037b212f275e15d9dba800caa6ebf42dbc62757697a61726454696d417564696f626f6f6b31383439` | Blockfrost raw |
| asset-008 | `e1d98823331929b449b037b212f275e15d9dba800caa6ebf42dbc62757697a61726454696d417564696f626f6f6b31383337` | Blockfrost raw |
| asset-009 | `e1d98823331929b449b037b212f275e15d9dba800caa6ebf42dbc62757697a61726454696d417564696f626f6f6b31383236` | Blockfrost raw |
| asset-010 | `e1d98823331929b449b037b212f275e15d9dba800caa6ebf42dbc62757697a61726454696d417564696f626f6f6b31383134` | Blockfrost raw |

Raw samples directory: `research/raw-samples/book-io-wizard-tim-audiobook/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 2 audiobook variant in Book.io cluster; tests audio mediaType, multi-file playback metadata, and title-specific fields.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | `attributes` object map |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | authors, attributes, extraAttributes |

---

## Media analysis

| Field | Path or value | Source | Notes |
|-------|---------------|--------|-------|
| Image | `$.image` | on-chain | `image` string; `files[]` multi-media; mediaType: image/jpeg |
| Animation | — |  | |
| Files / multi-media | `$.files[]` | on-chain | |
| Thumbnail | — | | |
| Collection logo | — | registry-only | |
| Collection banner | — | registry-only | |

---

## Trait analysis

| Field | Finding |
|-------|---------|
| Trait grouping style | attributes_object |
| Primary trait root path | `attributes` object map |
| Canonical trait names | See inventory |
| Value types observed | string, number, array (collection-dependent) |
| Normalization requirements | Mostly none |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| Variation | `$.attributes.Variation` | string | none | no |
| Cover Theme | `$.attributes.Cover Theme` | string | none | no |

---

## Socials

| Platform | Location or explicit value | Status |
|----------|----------------------------|--------|
| x | — | missing |
| discord | — | missing |
| telegram | — | missing |

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
| License text | — | missing |
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
| info | Use `direct_path` under `$.attributes.<key>` |

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
| 1 | Socials | No social fields on asset metadata | A |
| 2 | License | No license metadata on asset | A |
| 3 | Royalties | No royalty metadata on asset | A |
| 4 | Custom | Collection-specific fields: authors, attributes, extraAttributes | C |

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
| Raw samples | `research/raw-samples/book-io-wizard-tim-audiobook/` |
| Audit report | `research/audits/book-io-wizard-tim-audiobook.audit.md` |
| Generated definition | `registry/collections/book-io-wizard-tim-audiobook.json` (placeholder only; not finalized) |
| Detailed finding | `research/findings/book-io-wizard-tim-audiobook.md` |

---

## Notes

Detailed analysis: `research/findings/book-io-wizard-tim-audiobook.md`. No schema, parser, or final definition changes in this pass.
