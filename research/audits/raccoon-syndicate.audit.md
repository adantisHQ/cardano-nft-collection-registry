# Collection Audit: Raccoon Syndicate

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `raccoon-syndicate` |
| `collection_name` | Raccoon Syndicate |
| `audit_phase` | 3A |
| `auditor` | Phase 3A metadata discovery (automated + review) |
| `audit_date` | 2026-06-09 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
59142df7dfea56a5b76b842c206fc7bd844b43a2d10f5eb05f695dcb
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `59142df7dfea56a5b76b842c206fc7bd844b43a2d10f5eb05f695dcb526163636f6f6e2031313933` | Blockfrost raw |
| asset-002 | `59142df7dfea56a5b76b842c206fc7bd844b43a2d10f5eb05f695dcb526163636f6f6e2031353533` | Blockfrost raw |
| asset-003 | `59142df7dfea56a5b76b842c206fc7bd844b43a2d10f5eb05f695dcb526163636f6f6e203831` | Blockfrost raw |
| asset-004 | `59142df7dfea56a5b76b842c206fc7bd844b43a2d10f5eb05f695dcb526163636f6f6e2031343336` | Blockfrost raw |
| asset-005 | `59142df7dfea56a5b76b842c206fc7bd844b43a2d10f5eb05f695dcb526163636f6f6e2034383630` | Blockfrost raw |
| asset-006 | `59142df7dfea56a5b76b842c206fc7bd844b43a2d10f5eb05f695dcb526163636f6f6e2031393332` | Blockfrost raw |
| asset-007 | `59142df7dfea56a5b76b842c206fc7bd844b43a2d10f5eb05f695dcb526163636f6f6e2034393633` | Blockfrost raw |
| asset-008 | `59142df7dfea56a5b76b842c206fc7bd844b43a2d10f5eb05f695dcb526163636f6f6e2032343539` | Blockfrost raw |
| asset-009 | `59142df7dfea56a5b76b842c206fc7bd844b43a2d10f5eb05f695dcb526163636f6f6e2032373530` | Blockfrost raw |
| asset-010 | `59142df7dfea56a5b76b842c206fc7bd844b43a2d10f5eb05f695dcb526163636f6f6e2031373539` | Blockfrost raw |

Raw samples directory: `research/raw-samples/raccoon-syndicate/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 3A Top-100 include_now (TapTools rank 39). Type: pfp. Discovery only — no final definition in this pass.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | `attributes` object map |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | attributes |

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
| Trait grouping style | attributes_object |
| Primary trait root path | `attributes` object map |
| Canonical trait names | See inventory |
| Value types observed | string, number, array (collection-dependent) |
| Normalization requirements | Mostly none |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| Eyes | `$.attributes.Eyes` | string | none | no |
| Head | `$.attributes.Head` | string | none | no |
| Ring | `$.attributes.Ring` | string | none | no |
| Genus | `$.attributes.Genus` | string | none | no |
| Mouth | `$.attributes.Mouth` | string | none | no |
| Nails | `$.attributes.Nails` | string | none | no |
| Eyewear | `$.attributes.Eyewear` | string | none | no |
| Wardrobe | `$.attributes.Wardrobe` | string | none | no |
| Left Hand | `$.attributes.Left Hand` | string | none | no |
| Syndicate | `$.attributes.Syndicate` | string | none | no |
| Profession | `$.attributes.Profession` | string | none | no |
| Right Hand | `$.attributes.Right Hand` | string | none | no |
| Base Point Multiplier | `$.attributes.Base Point Multiplier` | string | none | no |

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
| License text | copyright | found |
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
| 1 | License | License/terms present in non-standard location | C |
| 2 | Royalties | No royalty metadata on asset | A |
| 3 | Custom | Collection-specific fields: attributes | C |

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
| Raw samples | `research/raw-samples/raccoon-syndicate/` |
| Audit report | `research/audits/raccoon-syndicate.audit.md` |
| Generated definition | `registry/collections/raccoon-syndicate.json` (prepare-phase placeholder only — **not finalized**) |
| Detailed finding | `research/findings/raccoon-syndicate.md` |

---

## Notes

Detailed analysis: `research/findings/raccoon-syndicate.md`. No schema, parser, or **final** definition changes in this pass.
