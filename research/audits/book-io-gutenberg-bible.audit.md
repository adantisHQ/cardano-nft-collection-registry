# Collection Audit: Book.io - Gutenberg Bible Collection

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `book-io-gutenberg-bible` |
| `collection_name` | Book.io - Gutenberg Bible Collection |
| `audit_phase` | 2 |
| `auditor` | Phase 2 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
477cec772adb1466b301fb8161f505aa66ed1ee8d69d3e7984256a43
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `477cec772adb1466b301fb8161f505aa66ed1ee8d69d3e7984256a43477574656e62657267204269626c65202330303030` | Blockfrost raw |
| asset-002 | `477cec772adb1466b301fb8161f505aa66ed1ee8d69d3e7984256a43477574656e62657267204269626c65202330303031` | Blockfrost raw |
| asset-003 | `477cec772adb1466b301fb8161f505aa66ed1ee8d69d3e7984256a43477574656e62657267204269626c65202330303137` | Blockfrost raw |
| asset-004 | `477cec772adb1466b301fb8161f505aa66ed1ee8d69d3e7984256a43477574656e62657267204269626c65202330303335` | Blockfrost raw |
| asset-005 | `477cec772adb1466b301fb8161f505aa66ed1ee8d69d3e7984256a43477574656e62657267204269626c65202330303534` | Blockfrost raw |
| asset-006 | `477cec772adb1466b301fb8161f505aa66ed1ee8d69d3e7984256a43477574656e62657267204269626c65202330303732` | Blockfrost raw |
| asset-007 | `477cec772adb1466b301fb8161f505aa66ed1ee8d69d3e7984256a43477574656e62657267204269626c65202330313131` | Blockfrost raw |
| asset-008 | `477cec772adb1466b301fb8161f505aa66ed1ee8d69d3e7984256a43477574656e62657267204269626c65202330313239` | Blockfrost raw |
| asset-009 | `477cec772adb1466b301fb8161f505aa66ed1ee8d69d3e7984256a43477574656e62657267204269626c65202330313538` | Blockfrost raw |
| asset-010 | `477cec772adb1466b301fb8161f505aa66ed1ee8d69d3e7984256a43477574656e62657267204269626c65202330313836` | Blockfrost raw |

Raw samples directory: `research/raw-samples/book-io-gutenberg-bible/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 2 flagship Book.io media-linked collection; tests document metadata, files[], and external reading resources.

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
| Image | `$.image` | on-chain | `image` string; `files[]` multi-media |
| Animation | — |  | |
| Files / multi-media | `$.files[]` | on-chain | |
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
| Gold | `$.attributes.Gold` | string | none | no |

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
| 1 | Socials | No social fields on asset metadata | A |
| 2 | License | No license metadata on asset | A |
| 3 | Royalties | No royalty metadata on asset | A |
| 4 | Custom | Collection-specific fields: attributes | C |

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
| Raw samples | `research/raw-samples/book-io-gutenberg-bible/` |
| Audit report | `research/audits/book-io-gutenberg-bible.audit.md` |
| Generated definition | `registry/collections/book-io-gutenberg-bible.json` (placeholder only; not finalized) |
| Detailed finding | `research/findings/book-io-gutenberg-bible.md` |

---

## Notes

Detailed analysis: `research/findings/book-io-gutenberg-bible.md`. No schema, parser, or final definition changes in this pass.
