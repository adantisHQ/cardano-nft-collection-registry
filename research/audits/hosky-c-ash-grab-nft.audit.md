# Collection Audit: HOSKY C(ash grab)NFT

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `hosky-c-ash-grab-nft` |
| `collection_name` | HOSKY C(ash grab)NFT |
| `audit_phase` | 3A |
| `auditor` | Phase 3A metadata discovery (automated + review) |
| `audit_date` | 2026-06-09 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
a5bb0e5bb275a573d744a021f9b3bff73595468e002755b447e01559
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `a5bb0e5bb275a573d744a021f9b3bff73595468e002755b447e01559484f534b594361736847726162303030303030303031` | Blockfrost raw |
| asset-002 | `a5bb0e5bb275a573d744a021f9b3bff73595468e002755b447e01559484f534b594361736847726162303030303030303032` | Blockfrost raw |
| asset-003 | `a5bb0e5bb275a573d744a021f9b3bff73595468e002755b447e01559484f534b594361736847726162303030303030303033` | Blockfrost raw |
| asset-004 | `a5bb0e5bb275a573d744a021f9b3bff73595468e002755b447e01559484f534b594361736847726162303030303030303230` | Blockfrost raw |
| asset-005 | `a5bb0e5bb275a573d744a021f9b3bff73595468e002755b447e01559484f534b594361736847726162303030303030303339` | Blockfrost raw |
| asset-006 | `a5bb0e5bb275a573d744a021f9b3bff73595468e002755b447e01559484f534b594361736847726162303030303030303538` | Blockfrost raw |
| asset-007 | `a5bb0e5bb275a573d744a021f9b3bff73595468e002755b447e01559484f534b594361736847726162303030303030303736` | Blockfrost raw |
| asset-008 | `a5bb0e5bb275a573d744a021f9b3bff73595468e002755b447e01559484f534b594361736847726162303030303030303935` | Blockfrost raw |
| asset-009 | `a5bb0e5bb275a573d744a021f9b3bff73595468e002755b447e01559484f534b594361736847726162303030303030313133` | Blockfrost raw |
| asset-010 | `a5bb0e5bb275a573d744a021f9b3bff73595468e002755b447e01559484f534b594361736847726162303030303030313332` | Blockfrost raw |

Raw samples directory: `research/raw-samples/hosky-c-ash-grab-nft/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 3A Top-100 include_now (TapTools rank 20). Type: utility. Discovery only — no final definition in this pass.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | `-----Traits-----` array of single-key objects |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | -----Traits-----, -----Product Information----- |

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
| Trait grouping style | array_singleton_object |
| Primary trait root path | `-----Traits-----` array of single-key objects |
| Canonical trait names | See inventory |
| Value types observed | string, number, array (collection-dependent) |
| Normalization requirements | Mostly none |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| Background | `$.<section>[n].Background` | string | none | no |
| Fur | `$.<section>[n].Fur` | string | none | no |
| Eyes | `$.<section>[n].Eyes` | string | none | no |
| Ear Decoration | `$.<section>[n].Ear Decoration` | string | none | no |
| Neck | `$.<section>[n].Neck` | string | none | no |
| Mouth | `$.<section>[n].Mouth` | string | none | no |
| Frame | `$.<section>[n].Frame` | string | none | no |

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
| website | Website | found |
| mint | — | missing |
| documentation | — | missing |
| other | — | see findings |

---

## License

| Field | Location or value | Status |
|-------|-------------------|--------|
| License text | -----Product Information-----.1.Copyright | found |
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
| warning | Use `extraction.strategy: array_singleton_object` (GAP-001 resolved in Phase 1) |

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
| 1 | Traits | Trait fields in array-of-single-key-object sections | D |
| 2 | Socials | No social fields on asset metadata | A |
| 3 | License | License/terms present in non-standard location | C |
| 4 | Royalties | No royalty metadata on asset | A |
| 5 | Custom | Collection-specific fields: -----Traits-----, -----Product Information----- | C |

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
| Raw samples | `research/raw-samples/hosky-c-ash-grab-nft/` |
| Audit report | `research/audits/hosky-c-ash-grab-nft.audit.md` |
| Generated definition | `registry/collections/hosky-c-ash-grab-nft.json` (prepare-phase placeholder only — **not finalized**) |
| Detailed finding | `research/findings/hosky-c-ash-grab-nft.md` |

---

## Notes

Detailed analysis: `research/findings/hosky-c-ash-grab-nft.md`. No schema, parser, or **final** definition changes in this pass.
