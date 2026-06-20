# Collection Audit: Brave Dogs - Genesis Collection

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `brave-dogs-genesis-collection` |
| `collection_name` | Brave Dogs - Genesis Collection |
| `audit_phase` | 3A |
| `auditor` | Phase 3A metadata discovery (automated + review) |
| `audit_date` | 2026-06-09 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
09787e7c506749f5561668d91ed8979b09b1df5f86c84cb9bdd080a0
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `09787e7c506749f5561668d91ed8979b09b1df5f86c84cb9bdd080a0427261766520446f67202330323431` | Blockfrost raw |
| asset-002 | `09787e7c506749f5561668d91ed8979b09b1df5f86c84cb9bdd080a0427261766520446f67202330323838` | Blockfrost raw |
| asset-003 | `09787e7c506749f5561668d91ed8979b09b1df5f86c84cb9bdd080a0427261766520446f67202334373531` | Blockfrost raw |
| asset-004 | `09787e7c506749f5561668d91ed8979b09b1df5f86c84cb9bdd080a0427261766520446f67202331373734` | Blockfrost raw |
| asset-005 | `09787e7c506749f5561668d91ed8979b09b1df5f86c84cb9bdd080a0427261766520446f67202331373133` | Blockfrost raw |
| asset-006 | `09787e7c506749f5561668d91ed8979b09b1df5f86c84cb9bdd080a0427261766520446f67202330393939` | Blockfrost raw |
| asset-007 | `09787e7c506749f5561668d91ed8979b09b1df5f86c84cb9bdd080a0427261766520446f67202333313736` | Blockfrost raw |
| asset-008 | `09787e7c506749f5561668d91ed8979b09b1df5f86c84cb9bdd080a0427261766520446f67202331313339` | Blockfrost raw |
| asset-009 | `09787e7c506749f5561668d91ed8979b09b1df5f86c84cb9bdd080a0427261766520446f67202333393938` | Blockfrost raw |
| asset-010 | `09787e7c506749f5561668d91ed8979b09b1df5f86c84cb9bdd080a0427261766520446f67202334383835` | Blockfrost raw |

Raw samples directory: `research/raw-samples/brave-dogs-genesis-collection/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 3A Top-100 include_now (TapTools rank 100). Type: event. Discovery only — no final definition in this pass.

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
| Eyes | `$.Eyes` | string | none | no |
| Hand | `$.Hand` | string | none | no |
| Nose | `$.Nose` | string | none | no |
| Coats | `$.Coats` | string | none | no |
| Mouth | `$.Mouth` | string | none | no |
| Clothes | `$.Clothes` | string | none | no |
| Station | `$.Station` | string | none | no |
| Division | `$.Division` | string | none | no |
| Headgear | `$.Headgear` | string | none | no |
| Background | `$.Background` | string | none | no |
| Number of Shares | `$.Number of Shares` | string | none | no |

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
| Raw samples | `research/raw-samples/brave-dogs-genesis-collection/` |
| Audit report | `research/audits/brave-dogs-genesis-collection.audit.md` |
| Generated definition | `registry/collections/brave-dogs-genesis-collection.json` (prepare-phase placeholder only — **not finalized**) |
| Detailed finding | `research/findings/brave-dogs-genesis-collection.md` |

---

## Notes

Detailed analysis: `research/findings/brave-dogs-genesis-collection.md`. No schema, parser, or **final** definition changes in this pass.
