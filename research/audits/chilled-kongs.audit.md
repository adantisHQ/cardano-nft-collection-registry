# Collection Audit: Chilled Kongs

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `chilled-kongs` |
| `collection_name` | Chilled Kongs |
| `audit_phase` | 2 |
| `auditor` | Phase 2 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
c56d4cceb8a8550534968e1bf165137ca41e908d2d780cc1402079bd
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `c56d4cceb8a8550534968e1bf165137ca41e908d2d780cc1402079bd4368696c6c65644b6f6e6730313030` | Blockfrost raw |
| asset-002 | `c56d4cceb8a8550534968e1bf165137ca41e908d2d780cc1402079bd4368696c6c65644b6f6e6730333036` | Blockfrost raw |
| asset-003 | `c56d4cceb8a8550534968e1bf165137ca41e908d2d780cc1402079bd4368696c6c65644b6f6e6731303532` | Blockfrost raw |
| asset-004 | `c56d4cceb8a8550534968e1bf165137ca41e908d2d780cc1402079bd4368696c6c65644b6f6e6737363330` | Blockfrost raw |
| asset-005 | `c56d4cceb8a8550534968e1bf165137ca41e908d2d780cc1402079bd4368696c6c65644b6f6e6734323437` | Blockfrost raw |
| asset-006 | `c56d4cceb8a8550534968e1bf165137ca41e908d2d780cc1402079bd4368696c6c65644b6f6e6732323937` | Blockfrost raw |
| asset-007 | `c56d4cceb8a8550534968e1bf165137ca41e908d2d780cc1402079bd4368696c6c65644b6f6e6731303731` | Blockfrost raw |
| asset-008 | `c56d4cceb8a8550534968e1bf165137ca41e908d2d780cc1402079bd4368696c6c65644b6f6e6734303333` | Blockfrost raw |
| asset-009 | `c56d4cceb8a8550534968e1bf165137ca41e908d2d780cc1402079bd4368696c6c65644b6f6e6731323834` | Blockfrost raw |
| asset-010 | `c56d4cceb8a8550534968e1bf165137ca41e908d2d780cc1402079bd4368696c6c65644b6f6e6736353830` | Blockfrost raw |

Raw samples directory: `research/raw-samples/chilled-kongs/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 2 major PFP with likely attributes-object or non-flat trait layout; pairs with Vox policy; not a Phase 1 flat-root duplicate.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | Flat trait-like keys at metadata root |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | See findings |

---

## Media analysis

| Field | Path or value | Source | Notes |
|-------|---------------|--------|-------|
| Image | `$.image` | on-chain | `image` string; `files[]` multi-media; mediaType: image/png |
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
| hat | `$.hat` | string | none | no |
| body | `$.body` | string | none | no |
| eyes | `$.eyes` | string | none | no |
| mouth | `$.mouth` | string | none | no |
| clothes | `$.clothes` | string | none | no |
| special | `$.special` | string | none | no |
| earrings | `$.earrings` | string | none | no |
| background | `$.background` | string | none | no |

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
| 2 | Socials | No social fields on asset metadata | A |
| 3 | Links | No website/external links on asset metadata | A |
| 4 | License | No license metadata on asset | A |
| 5 | Royalties | No royalty metadata on asset | A |

---

## Scoring

```
parse_success_score: 85
trait_mapping_confidence: high
media_mapping_confidence: high
social_mapping_confidence: high
schema_fit: fits_with_notes
```

---

## Outputs

| Artifact | Path |
|----------|------|
| Raw samples | `research/raw-samples/chilled-kongs/` |
| Audit report | `research/audits/chilled-kongs.audit.md` |
| Generated definition | `registry/collections/chilled-kongs.json` (placeholder only; not finalized) |
| Detailed finding | `research/findings/chilled-kongs.md` |

---

## Notes

Detailed analysis: `research/findings/chilled-kongs.md`. No schema, parser, or final definition changes in this pass.
