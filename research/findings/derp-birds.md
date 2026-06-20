# Findings: Derp Birds

Phase 3A metadata discovery — 2026-06-09

**Policy ID:** `e74862a09d17a9cb03174a6bd5fa305b8684475c4c36021591c606e0`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/derp-birds/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 3A Top-100 include_now (TapTools rank 25). Type: pfp. Discovery only — no final definition in this pass.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **attributes_object** — `attributes` object map.

Top-level keys observed: `url`, `name`, `files`, `image`, `series`, `mediaType`, `attributes`.

---

## Metadata standard

| Signal | Finding |
|--------|---------|
| Blockfrost `onchain_metadata_standard` | CIP25v1 |
| Layout class | attributes_object |
| Metadata root | `onchain_metadata` (Blockfrost asset response) |

---

## Trait layout

`attributes` object map

- `Back`
- `Beak`
- `Body`
- `Ears`
- `Eyes`
- `Head`
- `Tail`
- `Color`
- `Rarity`
- `Background`
- `Power Level`
- `Perfect Specimen`

---

## Media layout

- `image` string
- `files[]` multi-media
- mediaType: image/png

---

## Socials and links

### Socials

| Field | Value |
|-------|-------|
| — | not present on-chain |

### Links

| Field | Value |
|-------|-------|
| url | `derpbirds.io` |

---

## License and royalties

| Area | Finding |
|------|---------|
| — | not present on-chain |

| Royalties | Not present in on-chain metadata samples |

---

## Custom fields

- `attributes` (nested object or section)

---

## Expected registry mappings

- Trait extraction: Use `direct_path` under `$.attributes.<key>`
- Media: `media_mappings.files` from `$.files[]`
- Identity: `$.name` where present

---

## Indexing caveats

- Raw samples are full Blockfrost asset responses; parsers must use `onchain_metadata` subtree

---

## Extraction strategy assessment

| Question | Answer |
|----------|--------|
| Are Phase 1 extraction strategies sufficient? | **Yes** — direct paths under `attributes` |
| Recommended strategy | Use `direct_path` under `$.attributes.<key>` |

---

## Sample inventory

| Label | Asset unit | Asset name (hex) | Metadata |
|-------|------------|------------------|----------|
| asset-001 | `e74862a09d17a9cb03174a6bd5fa305b8684475c4c36021591c606e044503037363736` | `44503037363736` | yes |
| asset-002 | `e74862a09d17a9cb03174a6bd5fa305b8684475c4c36021591c606e044503039323435` | `44503039323435` | yes |
| asset-003 | `e74862a09d17a9cb03174a6bd5fa305b8684475c4c36021591c606e044503033373731` | `44503033373731` | yes |
| asset-004 | `e74862a09d17a9cb03174a6bd5fa305b8684475c4c36021591c606e044503034343530` | `44503034343530` | yes |
| asset-005 | `e74862a09d17a9cb03174a6bd5fa305b8684475c4c36021591c606e044503039333139` | `44503039333139` | yes |
| asset-006 | `e74862a09d17a9cb03174a6bd5fa305b8684475c4c36021591c606e044503030383431` | `44503030383431` | yes |
| asset-007 | `e74862a09d17a9cb03174a6bd5fa305b8684475c4c36021591c606e044503030363137` | `44503030363137` | yes |
| asset-008 | `e74862a09d17a9cb03174a6bd5fa305b8684475c4c36021591c606e044503033373137` | `44503033373137` | yes |
| asset-009 | `e74862a09d17a9cb03174a6bd5fa305b8684475c4c36021591c606e044503035383631` | `44503035383631` | yes |
| asset-010 | `e74862a09d17a9cb03174a6bd5fa305b8684475c4c36021591c606e044503032313035` | `44503032313035` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 4 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
