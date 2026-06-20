# Collection Audit: Artifct Moon

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `artifct-moon` |
| `collection_name` | Artifct Moon |
| `audit_phase` | 3A |
| `auditor` | Phase 3A metadata discovery (automated + review) |
| `audit_date` | 2026-06-09 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
e5a2bcc51466942a9db1da62471a1b682bde3abcebafee2c7fb1e378
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `e5a2bcc51466942a9db1da62471a1b682bde3abcebafee2c7fb1e378415254494643544d4f4f4e30313031` | Blockfrost raw |
| asset-002 | `e5a2bcc51466942a9db1da62471a1b682bde3abcebafee2c7fb1e378415254494643544d4f4f4e30313032` | Blockfrost raw |
| asset-003 | `e5a2bcc51466942a9db1da62471a1b682bde3abcebafee2c7fb1e378415254494643544d4f4f4e30313138` | Blockfrost raw |
| asset-004 | `e5a2bcc51466942a9db1da62471a1b682bde3abcebafee2c7fb1e378415254494643544d4f4f4e30313336` | Blockfrost raw |
| asset-005 | `e5a2bcc51466942a9db1da62471a1b682bde3abcebafee2c7fb1e378415254494643544d4f4f4e30323035` | Blockfrost raw |
| asset-006 | `e5a2bcc51466942a9db1da62471a1b682bde3abcebafee2c7fb1e378415254494643544d4f4f4e30323233` | Blockfrost raw |
| asset-007 | `e5a2bcc51466942a9db1da62471a1b682bde3abcebafee2c7fb1e378415254494643544d4f4f4e30323432` | Blockfrost raw |
| asset-008 | `e5a2bcc51466942a9db1da62471a1b682bde3abcebafee2c7fb1e378415254494643544d4f4f4e30333130` | Blockfrost raw |
| asset-009 | `e5a2bcc51466942a9db1da62471a1b682bde3abcebafee2c7fb1e378415254494643544d4f4f4e30333239` | Blockfrost raw |
| asset-010 | `e5a2bcc51466942a9db1da62471a1b682bde3abcebafee2c7fb1e378415254494643544d4f4f4e30333437` | Blockfrost raw |

Raw samples directory: `research/raw-samples/artifct-moon/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 3A Top-100 include_now (TapTools rank 103). Type: art. Discovery only — no final definition in this pass.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | Minimal or custom layout |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | location |

---

## Media analysis

| Field | Path or value | Source | Notes |
|-------|---------------|--------|-------|
| Image | `$.image` | on-chain | `image` string; mediaType: image/png |
| Animation | — |  | |
| Files / multi-media | — |  | |
| Thumbnail | — | | |
| Collection logo | — | registry-only | |
| Collection banner | — | registry-only | |

---

## Trait analysis

| Field | Finding |
|-------|---------|
| Trait grouping style | minimal_or_custom |
| Primary trait root path | Minimal or custom layout |
| Canonical trait names | See inventory |
| Value types observed | string, number, array (collection-dependent) |
| Normalization requirements | Mostly none |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| detail | `$.detail` | string | none | no |
| location | `$.location` | string | none | no |
| collection | `$.collection` | string | none | no |

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
| info | Direct paths only; may need manual mapping |

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
| 4 | Custom | Collection-specific fields: location | C |

---

## Scoring

```
parse_success_score: 85
trait_mapping_confidence: medium
media_mapping_confidence: high
social_mapping_confidence: medium
schema_fit: fits_with_notes
```

---

## Outputs

| Artifact | Path |
|----------|------|
| Raw samples | `research/raw-samples/artifct-moon/` |
| Audit report | `research/audits/artifct-moon.audit.md` |
| Generated definition | `registry/collections/artifct-moon.json` (prepare-phase placeholder only — **not finalized**) |
| Detailed finding | `research/findings/artifct-moon.md` |

---

## Notes

Detailed analysis: `research/findings/artifct-moon.md`. No schema, parser, or **final** definition changes in this pass.
