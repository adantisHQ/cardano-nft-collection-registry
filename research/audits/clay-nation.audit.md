# Collection Audit: Clay Nation

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `clay-nation` |
| `collection_name` | Clay Nation |
| `audit_phase` | 1 |
| `auditor` | Phase 1 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
40fa2aa67258b4ce7b5782f74831d46a84c59a0ff0c28262fab21728
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `40fa2aa67258b4ce7b5782f74831d46a84c59a0ff0c28262fab21728436c61794e6174696f6e37383939` | Blockfrost raw |
| asset-002 | `40fa2aa67258b4ce7b5782f74831d46a84c59a0ff0c28262fab21728436c61794e6174696f6e38343838` | Blockfrost raw |
| asset-003 | `40fa2aa67258b4ce7b5782f74831d46a84c59a0ff0c28262fab21728436c61794e6174696f6e33323332` | Blockfrost raw |
| asset-004 | `40fa2aa67258b4ce7b5782f74831d46a84c59a0ff0c28262fab21728436c61794e6174696f6e37333036` | Blockfrost raw |
| asset-005 | `40fa2aa67258b4ce7b5782f74831d46a84c59a0ff0c28262fab21728436c61794e6174696f6e35343638` | Blockfrost raw |
| asset-006 | `40fa2aa67258b4ce7b5782f74831d46a84c59a0ff0c28262fab21728436c61794e6174696f6e35383538` | Blockfrost raw |
| asset-007 | `40fa2aa67258b4ce7b5782f74831d46a84c59a0ff0c28262fab21728436c61794e6174696f6e39313933` | Blockfrost raw |
| asset-008 | `40fa2aa67258b4ce7b5782f74831d46a84c59a0ff0c28262fab21728436c61794e6174696f6e33333031` | Blockfrost raw |
| asset-009 | `40fa2aa67258b4ce7b5782f74831d46a84c59a0ff0c28262fab21728436c61794e6174696f6e39373037` | Blockfrost raw |
| asset-010 | `40fa2aa67258b4ce7b5782f74831d46a84c59a0ff0c28262fab21728436c61794e6174696f6e37333136` | Blockfrost raw |

Raw samples directory: `research/raw-samples/clay-nation/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 1 metadata discovery via Blockfrost. See `research/findings/clay-nation.md`.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | Flat or custom layouts observed |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | `Project` string identifies sub-brand (Clay Mates) |

---

## Media analysis

| Field | Path or value | Source | Notes |
|-------|---------------|--------|-------|
| Image | `$.image` | on-chain | IPFS in samples |
| Animation | — |  | |
| Files / multi-media | — |  | |
| Thumbnail | — | | |
| Collection logo | — | registry-only | |
| Collection banner | — | registry-only | |

---

## Trait analysis

| Field | Finding |
|-------|---------|
| Trait grouping style | Flat root trait keys (PFP-style) |
| Primary trait root path | metadata root (flat keys) |
| Canonical trait names | See inventory |
| Value types observed | string, array, number (collection-dependent) |
| Normalization requirements | Mostly none |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| body | `$.body` | string | none | no |
| eyes | `$.eyes` | string | none | no |
| brows | `$.brows` | string | none | no |
| mouth | `$.mouth` | string | none | no |
| clothes | `$.clothes` | string | none | no |
| background | `$.background` | string | none | no |
| accessories | `$.accessories` | string | none | no |
| hats and hair | `$.hats and hair` | string | none | no |
| Project | `$.Project` | string | none | no |

---

## Socials

| Platform | Location or explicit value | Status |
|----------|----------------------------|--------|
| x | — | missing |
| discord | — | missing |
| telegram | — | missing |
| github | — | missing |
| other | — | missing |

---

## Links

| Link type | Location or explicit value | Status |
|-----------|----------------------------|--------|
| website | missing | missing |
| mint | — | missing |
| documentation | — | missing |
| other | — | missing |

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
| Notes | Royalties may exist at marketplace/CIP-27 level; not in sampled asset metadata |

---

## Indexing caveats

| Severity | Message |
|----------|---------|
| info | Raw samples are Blockfrost asset responses; extract `onchain_metadata` for parsing |
| info | Standard CIP-25 on-chain metadata in most samples |
| info | See findings for collection-specific notes |

---

## Schema fit assessment

| Question | Answer |
|----------|--------|
| Can current schema represent this collection? | yes — with explicit mappings and indexing notes |
| `schema_fit` | fits_with_notes |
| Proposed definition status | partial (discovery complete; definition not updated in this phase) |
| Blockers | None requiring schema change in isolation |

---

## Failures

| # | Area | Description | Classification |
|---|------|-------------|----------------|
| 1 | Traits | Traits at metadata root, not under attributes | C |
| 2 | Socials | No social fields on asset metadata | A |
| 3 | License | No license on asset metadata | A |
| 4 | Royalties | No royalty metadata | A |

---

## Scoring

```
parse_success_score: 92
trait_mapping_confidence: high
media_mapping_confidence: high
social_mapping_confidence: high
schema_fit: fits_with_notes
```

---

## Outputs

| Artifact | Path |
|----------|------|
| Raw samples | `research/raw-samples/clay-nation/` |
| Audit report | `research/audits/clay-nation.audit.md` |
| Generated definition | `registry/collections/clay-nation.json` (placeholder; not modified) |
| Detailed finding | `research/findings/clay-nation.md` |

---

## Notes

Detailed analysis: `research/findings/clay-nation.md`. No schema or definition changes performed in this pass.
