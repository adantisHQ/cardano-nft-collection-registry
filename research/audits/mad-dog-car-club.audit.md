# Collection Audit: Mad Dog Car Club

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `mad-dog-car-club` |
| `collection_name` | Mad Dog Car Club |
| `audit_phase` | 3A |
| `auditor` | Phase 3A metadata discovery (automated + review) |
| `audit_date` | 2026-06-09 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
7e605894cdcbe8d1933f0a8760d93bd121aca583cf21ad1c25e51fd3
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `7e605894cdcbe8d1933f0a8760d93bd121aca583cf21ad1c25e51fd34d6164446f67436172436c756231323130` | Blockfrost raw |
| asset-002 | `7e605894cdcbe8d1933f0a8760d93bd121aca583cf21ad1c25e51fd34d6164446f67436172436c756231333233` | Blockfrost raw |
| asset-003 | `7e605894cdcbe8d1933f0a8760d93bd121aca583cf21ad1c25e51fd34d6164446f67436172436c756233353131` | Blockfrost raw |
| asset-004 | `7e605894cdcbe8d1933f0a8760d93bd121aca583cf21ad1c25e51fd34d6164446f67436172436c756234343631` | Blockfrost raw |
| asset-005 | `7e605894cdcbe8d1933f0a8760d93bd121aca583cf21ad1c25e51fd34d6164446f67436172436c756236363732` | Blockfrost raw |
| asset-006 | `7e605894cdcbe8d1933f0a8760d93bd121aca583cf21ad1c25e51fd34d6164446f67436172436c756235313231` | Blockfrost raw |
| asset-007 | `7e605894cdcbe8d1933f0a8760d93bd121aca583cf21ad1c25e51fd34d6164446f67436172436c756239363433` | Blockfrost raw |
| asset-008 | `7e605894cdcbe8d1933f0a8760d93bd121aca583cf21ad1c25e51fd34d6164446f67436172436c7562333232` | Blockfrost raw |
| asset-009 | `7e605894cdcbe8d1933f0a8760d93bd121aca583cf21ad1c25e51fd34d6164446f67436172436c756235313936` | Blockfrost raw |
| asset-010 | `7e605894cdcbe8d1933f0a8760d93bd121aca583cf21ad1c25e51fd34d6164446f67436172436c756233333635` | Blockfrost raw |

Raw samples directory: `research/raw-samples/mad-dog-car-club/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 3A Top-100 include_now (TapTools rank 53). Type: pfp. Discovery only — no final definition in this pass.

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
| Image | `$.image` | on-chain | `image` string |
| Animation | — |  | |
| Files / multi-media | — |  | |
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
| Fur | `$.Fur` | string | none | no |
| Hat | `$.Hat` | string | none | no |
| Eyes | `$.Eyes` | string | none | no |
| Mouth | `$.Mouth` | string | none | no |
| Clothes | `$.Clothes` | string | none | no |
| Background | `$.Background` | string | none | no |

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
| Raw samples | `research/raw-samples/mad-dog-car-club/` |
| Audit report | `research/audits/mad-dog-car-club.audit.md` |
| Generated definition | `registry/collections/mad-dog-car-club.json` (prepare-phase placeholder only — **not finalized**) |
| Detailed finding | `research/findings/mad-dog-car-club.md` |

---

## Notes

Detailed analysis: `research/findings/mad-dog-car-club.md`. No schema, parser, or **final** definition changes in this pass.
