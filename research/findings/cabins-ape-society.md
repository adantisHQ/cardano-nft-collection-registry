# Findings: Cabins by The Ape Society

Phase 2 metadata discovery — 2026-06-08

**Policy ID:** `d4e087164acf8314f1203f0b0996f14908e2a199a296d065f14b8b09`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/cabins-ape-society/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 2 housing/land hybrid in Ape Society ecosystem; tests building/parcel metadata and multi-policy society structure.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **root_flat_keys** — Flat trait-like keys at metadata root.

Top-level keys observed: `name`, `rate`, `files`, `image`, `Street`, `District`, `mediaType`, `Cabin Size`, `SLVD Rating`, `description`, `X Coordinate`, `Y Coordinate`.

---

## Metadata standard

| Signal | Finding |
|--------|---------|
| Blockfrost `onchain_metadata_standard` | CIP25v1 |
| Layout class | root_flat_keys |
| Metadata root | `onchain_metadata` (Blockfrost asset response) |

---

## Trait layout

Flat trait-like keys at metadata root

- `rate`
- `Street`
- `District`
- `Cabin Size`
- `SLVD Rating`
- `X Coordinate`
- `Y Coordinate`

---

## Media layout

- `image` string
- `files[]` multi-media
- mediaType: image/gif

---

## Socials and links

### Socials

| Field | Value |
|-------|-------|
| — | not present on-chain |

### Links

| Field | Value |
|-------|-------|
| — | not present on-chain |

---

## License and royalties

| Area | Finding |
|------|---------|
| — | not present on-chain |

| Royalties | Not present in on-chain metadata samples |

---

## Custom fields

_No notable nested sections beyond standard fields_

---

## Expected registry mappings

- Trait extraction: Use `extraction.strategy: root_flat_keys` or per-key `direct_path`
- Media: `media_mappings.files` from `$.files[]`
- Identity: `$.name` where present

---

## Indexing caveats

- Raw samples are full Blockfrost asset responses; parsers must use `onchain_metadata` subtree

---

## Extraction strategy assessment

| Question | Answer |
|----------|--------|
| Are Phase 1 extraction strategies sufficient? | **Yes** — use `root_flat_keys` or direct paths |
| Recommended strategy | Use `extraction.strategy: root_flat_keys` or per-key `direct_path` |

---

## Sample inventory

| Label | Asset unit | Asset name (hex) | Metadata |
|-------|------------|------------------|----------|
| asset-001 | `d4e087164acf8314f1203f0b0996f14908e2a199a296d065f14b8b09636162696e36384d61796153747265657447453232493238` | `636162696e36384d61796153747265657447453232493238` | yes |
| asset-002 | `d4e087164acf8314f1203f0b0996f14908e2a199a296d065f14b8b09636162696e31383744756e6261724176656e756542443734423532` | `636162696e31383744756e6261724176656e756542443734423532` | yes |
| asset-003 | `d4e087164acf8314f1203f0b0996f14908e2a199a296d065f14b8b09636162696e35314f6e736c6f77506c61636547523235423637` | `636162696e35314f6e736c6f77506c61636547523235423637` | yes |
| asset-004 | `d4e087164acf8314f1203f0b0996f14908e2a199a296d065f14b8b09636162696e313734526973746f76526f61645a453131483637` | `636162696e313734526973746f76526f61645a453131483637` | yes |
| asset-005 | `d4e087164acf8314f1203f0b0996f14908e2a199a296d065f14b8b09636162696e39486f6c6c7948696c6c4176656e756544453839543830` | `636162696e39486f6c6c7948696c6c4176656e756544453839543830` | yes |
| asset-006 | `d4e087164acf8314f1203f0b0996f14908e2a199a296d065f14b8b09636162696e3236436f6e737469747574696f6e48696c6c454239384735` | `636162696e3236436f6e737469747574696f6e48696c6c454239384735` | yes |
| asset-007 | `d4e087164acf8314f1203f0b0996f14908e2a199a296d065f14b8b09636162696e31373148696c6c6372657374447269766557483637423135` | `636162696e31373148696c6c6372657374447269766557483637423135` | yes |
| asset-008 | `d4e087164acf8314f1203f0b0996f14908e2a199a296d065f14b8b09636162696e3138416e697461576179464f3431463436` | `636162696e3138416e697461576179464f3431463436` | yes |
| asset-009 | `d4e087164acf8314f1203f0b0996f14908e2a199a296d065f14b8b09636162696e3735456c4c6f626f57617942523933533837` | `636162696e3735456c4c6f626f57617942523933533837` | yes |
| asset-010 | `d4e087164acf8314f1203f0b0996f14908e2a199a296d065f14b8b09636162696e33395374416e6e4c616e65534e3233513534` | `636162696e33395374416e6e4c616e65534e3233513534` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 5 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
