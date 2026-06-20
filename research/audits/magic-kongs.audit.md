# Collection Audit: Magic Kongs

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `magic-kongs` |
| `collection_name` | Magic Kongs |
| `audit_phase` | 3A |
| `auditor` | Phase 3A metadata discovery (automated + review) |
| `audit_date` | 2026-06-09 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
2eeb39204c3d104b40ec56bfd612bb1067fdea45de15f3a8aad9db71
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `2eeb39204c3d104b40ec56bfd612bb1067fdea45de15f3a8aad9db714d616769634b6f6e6734373133` | Blockfrost raw |
| asset-002 | `2eeb39204c3d104b40ec56bfd612bb1067fdea45de15f3a8aad9db714d616769634b6f6e6731313534` | Blockfrost raw |
| asset-003 | `2eeb39204c3d104b40ec56bfd612bb1067fdea45de15f3a8aad9db714d616769634b6f6e6734313931` | Blockfrost raw |
| asset-004 | `2eeb39204c3d104b40ec56bfd612bb1067fdea45de15f3a8aad9db714d616769634b6f6e6732343535` | Blockfrost raw |
| asset-005 | `2eeb39204c3d104b40ec56bfd612bb1067fdea45de15f3a8aad9db714d616769634b6f6e6732363638` | Blockfrost raw |
| asset-006 | `2eeb39204c3d104b40ec56bfd612bb1067fdea45de15f3a8aad9db714d616769634b6f6e6731393938` | Blockfrost raw |
| asset-007 | `2eeb39204c3d104b40ec56bfd612bb1067fdea45de15f3a8aad9db714d616769634b6f6e6731363333` | Blockfrost raw |
| asset-008 | `2eeb39204c3d104b40ec56bfd612bb1067fdea45de15f3a8aad9db714d616769634b6f6e6730363737` | Blockfrost raw |
| asset-009 | `2eeb39204c3d104b40ec56bfd612bb1067fdea45de15f3a8aad9db714d616769634b6f6e6733323831` | Blockfrost raw |
| asset-010 | `2eeb39204c3d104b40ec56bfd612bb1067fdea45de15f3a8aad9db714d616769634b6f6e6734343433` | Blockfrost raw |

Raw samples directory: `research/raw-samples/magic-kongs/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 3A Top-100 include_now (TapTools rank 70). Type: gaming. Discovery only — no final definition in this pass.

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
| Image | `$.image[0]` | on-chain | `image` array; mediaType: image/png |
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
| hat | `$.hat` | string | none | no |
| body | `$.body` | string | none | no |
| eyes | `$.eyes` | string | none | no |
| type | `$.type` | string | none | no |
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
| 2 | Media | image is array not string | C |
| 3 | Socials | No social fields on asset metadata | A |
| 4 | Links | No website/external links on asset metadata | A |
| 5 | License | No license metadata on asset | A |
| 6 | Royalties | No royalty metadata on asset | A |

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
| Raw samples | `research/raw-samples/magic-kongs/` |
| Audit report | `research/audits/magic-kongs.audit.md` |
| Generated definition | `registry/collections/magic-kongs.json` (prepare-phase placeholder only — **not finalized**) |
| Detailed finding | `research/findings/magic-kongs.md` |

---

## Notes

Detailed analysis: `research/findings/magic-kongs.md`. No schema, parser, or **final** definition changes in this pass.
