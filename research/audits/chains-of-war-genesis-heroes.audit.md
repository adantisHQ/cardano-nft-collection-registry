# Collection Audit: Chains of War - Genesis Heroes

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `chains-of-war-genesis-heroes` |
| `collection_name` | Chains of War - Genesis Heroes |
| `audit_phase` | 3A |
| `auditor` | Phase 3A metadata discovery (automated + review) |
| `audit_date` | 2026-06-09 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
a587ce7893ec56fa6136e483499d2a8210e29c34b7dc673446128875
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `a587ce7893ec56fa6136e483499d2a8210e29c34b7dc673446128875436861696e734f665761723030313838` | Blockfrost raw |
| asset-002 | `a587ce7893ec56fa6136e483499d2a8210e29c34b7dc673446128875436861696e734f665761723030363136` | Blockfrost raw |
| asset-003 | `a587ce7893ec56fa6136e483499d2a8210e29c34b7dc673446128875436861696e734f665761723039303234` | Blockfrost raw |
| asset-004 | `a587ce7893ec56fa6136e483499d2a8210e29c34b7dc673446128875436861696e734f665761723039393330` | Blockfrost raw |
| asset-005 | `a587ce7893ec56fa6136e483499d2a8210e29c34b7dc673446128875436861696e734f665761723031383730` | Blockfrost raw |
| asset-006 | `a587ce7893ec56fa6136e483499d2a8210e29c34b7dc673446128875436861696e734f665761723035373537` | Blockfrost raw |
| asset-007 | `a587ce7893ec56fa6136e483499d2a8210e29c34b7dc673446128875436861696e734f665761723032373730` | Blockfrost raw |
| asset-008 | `a587ce7893ec56fa6136e483499d2a8210e29c34b7dc673446128875436861696e734f665761723033303934` | Blockfrost raw |
| asset-009 | `a587ce7893ec56fa6136e483499d2a8210e29c34b7dc673446128875436861696e734f665761723033333138` | Blockfrost raw |
| asset-010 | `a587ce7893ec56fa6136e483499d2a8210e29c34b7dc673446128875436861696e734f665761723034303734` | Blockfrost raw |

Raw samples directory: `research/raw-samples/chains-of-war-genesis-heroes/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 3A Top-100 include_now (TapTools rank 96). Type: gaming. Discovery only — no final definition in this pass.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | Minimal or custom layout |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | Stats, Attributes |

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
| Trait grouping style | minimal_or_custom |
| Primary trait root path | Minimal or custom layout |
| Canonical trait names | See inventory |
| Value types observed | string, number, array (collection-dependent) |
| Normalization requirements | Mostly none |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| Stats | `$.Stats` | string | none | no |
| Twitter | `$.Twitter` | string | none | no |
| Website | `$.Website` | string | none | no |
| Attributes | `$.Attributes` | string | none | no |

---

## Socials

| Platform | Location or explicit value | Status |
|----------|----------------------------|--------|
| twitter | `$.Twitter` or nested | found |

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
| 1 | License | No license metadata on asset | A |
| 2 | Royalties | No royalty metadata on asset | A |
| 3 | Custom | Collection-specific fields: Stats, Attributes | C |

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
| Raw samples | `research/raw-samples/chains-of-war-genesis-heroes/` |
| Audit report | `research/audits/chains-of-war-genesis-heroes.audit.md` |
| Generated definition | `registry/collections/chains-of-war-genesis-heroes.json` (prepare-phase placeholder only — **not finalized**) |
| Detailed finding | `research/findings/chains-of-war-genesis-heroes.md` |

---

## Notes

Detailed analysis: `research/findings/chains-of-war-genesis-heroes.md`. No schema, parser, or **final** definition changes in this pass.
