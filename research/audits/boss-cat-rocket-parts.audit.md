# Collection Audit: Boss Cat Rocket Parts

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `boss-cat-rocket-parts` |
| `collection_name` | Boss Cat Rocket Parts |
| `audit_phase` | 2 |
| `auditor` | Phase 2 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
761ed110b4040e153ffc20bd2203f2e7d57d610a0cf0eae6167e574d
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `761ed110b4040e153ffc20bd2203f2e7d57d610a0cf0eae6167e574d426f7373436174526f636b65745061727473313034` | Blockfrost raw |
| asset-002 | `761ed110b4040e153ffc20bd2203f2e7d57d610a0cf0eae6167e574d426f7373436174526f636b65745061727473313035` | Blockfrost raw |
| asset-003 | `761ed110b4040e153ffc20bd2203f2e7d57d610a0cf0eae6167e574d426f7373436174526f636b657450617274733836` | Blockfrost raw |
| asset-004 | `761ed110b4040e153ffc20bd2203f2e7d57d610a0cf0eae6167e574d426f7373436174526f636b65745061727473323239` | Blockfrost raw |
| asset-005 | `761ed110b4040e153ffc20bd2203f2e7d57d610a0cf0eae6167e574d426f7373436174526f636b65745061727473343538` | Blockfrost raw |
| asset-006 | `761ed110b4040e153ffc20bd2203f2e7d57d610a0cf0eae6167e574d426f7373436174526f636b65745061727473363335` | Blockfrost raw |
| asset-007 | `761ed110b4040e153ffc20bd2203f2e7d57d610a0cf0eae6167e574d426f7373436174526f636b6574506172747331303135` | Blockfrost raw |
| asset-008 | `761ed110b4040e153ffc20bd2203f2e7d57d610a0cf0eae6167e574d426f7373436174526f636b6574506172747331313038` | Blockfrost raw |
| asset-009 | `761ed110b4040e153ffc20bd2203f2e7d57d610a0cf0eae6167e574d426f7373436174526f636b6574506172747331313938` | Blockfrost raw |
| asset-010 | `761ed110b4040e153ffc20bd2203f2e7d57d610a0cf0eae6167e574d426f7373436174526f636b6574506172747331333230` | Blockfrost raw |

Raw samples directory: `research/raw-samples/boss-cat-rocket-parts/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 2 multi-policy: companion component policy paired with Phase 1 Boss Cat Rocket Club; tests modular part metadata vs PFP body.

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
| Type | `$.Type` | string | none | no |
| Color | `$.Color` | string | none | no |
| Model | `$.Model` | string | none | no |

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
| Raw samples | `research/raw-samples/boss-cat-rocket-parts/` |
| Audit report | `research/audits/boss-cat-rocket-parts.audit.md` |
| Generated definition | `registry/collections/boss-cat-rocket-parts.json` (placeholder only; not finalized) |
| Detailed finding | `research/findings/boss-cat-rocket-parts.md` |

---

## Notes

Detailed analysis: `research/findings/boss-cat-rocket-parts.md`. No schema, parser, or final definition changes in this pass.
