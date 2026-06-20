# Collection Audit: cNFTcon Legacy Pass

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `cnftcon-legacy-pass` |
| `collection_name` | cNFTcon Legacy Pass |
| `audit_phase` | 2 |
| `auditor` | Phase 2 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
5fa72fbeecbe80a3e15de1cacab54ba5e310e2c36ae85351132ed4ad
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `5fa72fbeecbe80a3e15de1cacab54ba5e310e2c36ae85351132ed4ad4c65676163795061737330303139` | Blockfrost raw |
| asset-002 | `5fa72fbeecbe80a3e15de1cacab54ba5e310e2c36ae85351132ed4ad4c65676163795061737330373638` | Blockfrost raw |
| asset-003 | `5fa72fbeecbe80a3e15de1cacab54ba5e310e2c36ae85351132ed4ad4c65676163795061737331313934` | Blockfrost raw |
| asset-004 | `5fa72fbeecbe80a3e15de1cacab54ba5e310e2c36ae85351132ed4ad4c65676163795061737331353931` | Blockfrost raw |
| asset-005 | `5fa72fbeecbe80a3e15de1cacab54ba5e310e2c36ae85351132ed4ad4c65676163795061737332343039` | Blockfrost raw |
| asset-006 | `5fa72fbeecbe80a3e15de1cacab54ba5e310e2c36ae85351132ed4ad4c65676163795061737332333731` | Blockfrost raw |
| asset-007 | `5fa72fbeecbe80a3e15de1cacab54ba5e310e2c36ae85351132ed4ad4c65676163795061737331343431` | Blockfrost raw |
| asset-008 | `5fa72fbeecbe80a3e15de1cacab54ba5e310e2c36ae85351132ed4ad4c65676163795061737332313833` | Blockfrost raw |
| asset-009 | `5fa72fbeecbe80a3e15de1cacab54ba5e310e2c36ae85351132ed4ad4c65676163795061737332303630` | Blockfrost raw |
| asset-010 | `5fa72fbeecbe80a3e15de1cacab54ba5e310e2c36ae85351132ed4ad4c65676163795061737332303438` | Blockfrost raw |

Raw samples directory: `research/raw-samples/cnftcon-legacy-pass/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 2 event legacy pass; tests pass-style commemorative metadata distinct from Cardano Summit 2021 badges.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | Minimal or custom layout |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | Website, publisher |

---

## Media analysis

| Field | Path or value | Source | Notes |
|-------|---------------|--------|-------|
| Image | `$.image` | on-chain | `image` string; `files[]` multi-media; mediaType: image/gif |
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
| artist | `$.artist` | string | none | no |
| Website | `$.Website` | string | none | no |
| publisher | `$.publisher` | string | none | no |
| Max Supply | `$.Max Supply` | string | none | no |

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
| 1 | Socials | No social fields on asset metadata | A |
| 2 | Links | No website/external links on asset metadata | A |
| 3 | License | No license metadata on asset | A |
| 4 | Royalties | No royalty metadata on asset | A |
| 5 | Custom | Collection-specific fields: Website, publisher | C |

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
| Raw samples | `research/raw-samples/cnftcon-legacy-pass/` |
| Audit report | `research/audits/cnftcon-legacy-pass.audit.md` |
| Generated definition | `registry/collections/cnftcon-legacy-pass.json` (placeholder only; not finalized) |
| Detailed finding | `research/findings/cnftcon-legacy-pass.md` |

---

## Notes

Detailed analysis: `research/findings/cnftcon-legacy-pass.md`. No schema, parser, or final definition changes in this pass.
