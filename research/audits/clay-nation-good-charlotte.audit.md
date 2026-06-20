# Collection Audit: Clay Nation x Good Charlotte by Clay Mates

Per-collection audit output for schema validation against real Cardano NFT collections.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `clay-nation-good-charlotte` |
| `collection_name` | Clay Nation x Good Charlotte by Clay Mates |
| `audit_phase` | 2 |
| `auditor` | Phase 2 metadata discovery (automated + review) |
| `audit_date` | 2026-06-08 |
| `audit_status` | complete |

## Input provided

### Policy IDs

```
94da605878403d07c144fe96cd50fe20c16186dd8d171c78ed6a8768
```

### Sample assets

| Label | Asset unit | Notes |
|-------|------------|-------|
| asset-001 | `94da605878403d07c144fe96cd50fe20c16186dd8d171c78ed6a8768436c6179436861726c6f74746531` | Blockfrost raw |
| asset-002 | `94da605878403d07c144fe96cd50fe20c16186dd8d171c78ed6a8768436c6179436861726c6f74746532` | Blockfrost raw |
| asset-003 | `94da605878403d07c144fe96cd50fe20c16186dd8d171c78ed6a8768436c6179436861726c6f7474653138` | Blockfrost raw |
| asset-004 | `94da605878403d07c144fe96cd50fe20c16186dd8d171c78ed6a8768436c6179436861726c6f7474653336` | Blockfrost raw |
| asset-005 | `94da605878403d07c144fe96cd50fe20c16186dd8d171c78ed6a8768436c6179436861726c6f7474653535` | Blockfrost raw |
| asset-006 | `94da605878403d07c144fe96cd50fe20c16186dd8d171c78ed6a8768436c6179436861726c6f7474653733` | Blockfrost raw |
| asset-007 | `94da605878403d07c144fe96cd50fe20c16186dd8d171c78ed6a8768436c6179436861726c6f7474653932` | Blockfrost raw |
| asset-008 | `94da605878403d07c144fe96cd50fe20c16186dd8d171c78ed6a8768436c6179436861726c6f747465313130` | Blockfrost raw |
| asset-009 | `94da605878403d07c144fe96cd50fe20c16186dd8d171c78ed6a8768436c6179436861726c6f747465313239` | Blockfrost raw |
| asset-010 | `94da605878403d07c144fe96cd50fe20c16186dd8d171c78ed6a8768436c6179436861726c6f747465313437` | Blockfrost raw |

Raw samples directory: `research/raw-samples/clay-nation-good-charlotte/`

Files: `asset-001.json` … `asset-010.json` (Blockfrost raw, unmodified)

### Known problems (optional)

Phase 2 collab drop under Clay Mates; tests collab-specific trait/media fields and linked-brand metadata.

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | CIP25v1 |
| Metadata root | `onchain_metadata` |
| Asset name encoding | hex (Blockfrost `asset_name` field) |
| CIP-25 layout notes | `traits` string array with colon-separated labels (e.g. `Background: Purple`) |
| CIP-68 layout notes | Not observed in samples |
| Custom conventions | traits |

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
| Trait grouping style | traits_string_array |
| Primary trait root path | `traits` string array with colon-separated labels (e.g. `Background: Purple`) |
| Canonical trait names | See inventory |
| Value types observed | string, number, array (collection-dependent) |
| Normalization requirements | Mostly none |
| Dynamic traits | no |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| Background: Magenta | `$.Background: Magenta` | string | none | no |
| Clay Colour: Pale | `$.Clay Colour: Pale` | string | none | no |
| Clothes: Jumpsuit | `$.Clothes: Jumpsuit` | string | none | no |
| Eyes: Blood Shot | `$.Eyes: Blood Shot` | string | none | no |
| Eyebrows: Normal | `$.Eyebrows: Normal` | string | none | no |
| Hats & Hair: Head Tattoos | `$.Hats & Hair: Head Tattoos` | string | none | no |
| Accessories: Music Notes | `$.Accessories: Music Notes` | string | none | no |
| Mouth: Normal | `$.Mouth: Normal` | string | none | no |

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
| info | Parse `traits[]` strings by splitting on first colon; no dedicated strategy yet (single-collection pattern) |

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
| 1 | Traits | traits uses string array with embedded key:value labels, not attributes object | E |
| 2 | Socials | No social fields on asset metadata | A |
| 3 | Links | No website/external links on asset metadata | A |
| 4 | License | No license metadata on asset | A |
| 5 | Royalties | No royalty metadata on asset | A |
| 6 | Custom | Collection-specific fields: traits | C |

---

## Scoring

```
parse_success_score: 85
trait_mapping_confidence: low
media_mapping_confidence: high
social_mapping_confidence: high
schema_fit: fits_with_notes
```

---

## Outputs

| Artifact | Path |
|----------|------|
| Raw samples | `research/raw-samples/clay-nation-good-charlotte/` |
| Audit report | `research/audits/clay-nation-good-charlotte.audit.md` |
| Generated definition | `registry/collections/clay-nation-good-charlotte.json` (placeholder only; not finalized) |
| Detailed finding | `research/findings/clay-nation-good-charlotte.md` |

---

## Notes

Detailed analysis: `research/findings/clay-nation-good-charlotte.md`. No schema, parser, or final definition changes in this pass.
