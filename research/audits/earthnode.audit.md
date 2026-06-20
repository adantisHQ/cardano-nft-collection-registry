# Collection Audit: EarthNode

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `earthnode` |
| `collection_name` | EarthNode |
| `audit_phase` | 3A |
| `auditor` | Phase 3A metadata discovery (automated + review) |
| `audit_date` | 2026-06-09 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
b97859c71e4e73af3ae83c30a3172c434c43041f6ff19c297fb76094
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `b97859c71e4e73af3ae83c30a3172c434c43041f6ff19c297fb7609445617274684e6f646531` | Blockfrost raw |
| asset-002 | `b97859c71e4e73af3ae83c30a3172c434c43041f6ff19c297fb7609445617274684e6f64653130` | Blockfrost raw |
| asset-003 | `b97859c71e4e73af3ae83c30a3172c434c43041f6ff19c297fb7609445617274684e6f64653131` | Blockfrost raw |
| asset-004 | `b97859c71e4e73af3ae83c30a3172c434c43041f6ff19c297fb7609445617274684e6f646533` | Blockfrost raw |
| asset-005 | `b97859c71e4e73af3ae83c30a3172c434c43041f6ff19c297fb7609445617274684e6f64653337` | Blockfrost raw |
| asset-006 | `b97859c71e4e73af3ae83c30a3172c434c43041f6ff19c297fb7609445617274684e6f64653536` | Blockfrost raw |
| asset-007 | `b97859c71e4e73af3ae83c30a3172c434c43041f6ff19c297fb7609445617274684e6f64653734` | Blockfrost raw |
| asset-008 | `b97859c71e4e73af3ae83c30a3172c434c43041f6ff19c297fb7609445617274684e6f64653932` | Blockfrost raw |
| asset-009 | `b97859c71e4e73af3ae83c30a3172c434c43041f6ff19c297fb7609445617274684e6f6465313131` | Blockfrost raw |
| asset-010 | `b97859c71e4e73af3ae83c30a3172c434c43041f6ff19c297fb7609445617274684e6f6465313330` | Blockfrost raw |

Raw samples directory: `research/raw-samples/earthnode/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 3A Top-100 include_now (TapTools rank 5). Type: land. Discovery only — no final definition in this pass.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | Minimal or custom layout |
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
| Trait grouping style | minimal_or_custom |
| Primary trait root path | Minimal or custom layout |
| Canonical trait names | See inventory |
| Value types observed | string, number, array (collection-dependent) |
| Normalization requirements | Mostly none |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| _none_ | — | — | — | — |

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
| 1 | Traits | No trait grid (expected for pass/media collection) | A |
| 2 | Socials | No social fields on asset metadata | A |
| 3 | Links | No website/external links on asset metadata | A |
| 4 | License | No license metadata on asset | A |
| 5 | Royalties | No royalty metadata on asset | A |

---

## Scoring

```
parse_success_score: 85
trait_mapping_confidence: medium
media_mapping_confidence: high
social_mapping_confidence: high
schema_fit: fits_with_notes
```

---

## Outputs

| Artifact | Path |
|----------|------|
| Raw samples | `research/raw-samples/earthnode/` |
| Audit report | `research/audits/earthnode.audit.md` |
| Generated definition | `registry/collections/earthnode.json` (prepare-phase placeholder only — **not finalized**) |
| Detailed finding | `research/findings/earthnode.md` |

---

## Notes

Detailed analysis: `research/findings/earthnode.md`. No schema, parser, or **final** definition changes in this pass.
