# Findings: Platypus Cyberpunks

Phase 3A metadata discovery — 2026-06-09

**Policy ID:** `787a6798527b21ad0e0f62c021b4ce036513a2d3342b5cb519d2ca19`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/platypus-cyberpunks/`  
**Metadata-bearing samples:** 80%

---

## Metadata summary

Phase 3A Top-100 include_now (TapTools rank 81). Type: gaming. Discovery only — no final definition in this pass.. Blockfrost standard signal: **CIP68v1, CIP25v1**. Primary trait layout: **root_flat_keys** — Flat trait-like keys at metadata root.

Top-level keys observed: `hat`, `back`, `body`, `eyes`, `hair`, `head`, `name`, `files`, `image`, `mouth`, `clothes`, `eyewear`, `special`, `mediaType`, `background`.

---

## Metadata standard

| Signal | Finding |
|--------|---------|
| Blockfrost `onchain_metadata_standard` | CIP68v1, CIP25v1 |
| Layout class | root_flat_keys |
| Metadata root | `onchain_metadata` (Blockfrost asset response) |

---

## Trait layout

Flat trait-like keys at metadata root

- `hat`
- `back`
- `body`
- `eyes`
- `hair`
- `head`
- `mouth`
- `clothes`
- `eyewear`
- `special`
- `background`

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

- Policy index asset(s) may have null on-chain metadata; filter to minted assets with metadata
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
| asset-001 | `787a6798527b21ad0e0f62c021b4ce036513a2d3342b5cb519d2ca19000de140506c61747970757320437962657270756e6b73202331373933` | `000de140506c61747970757320437962657270756e6b73202331373933` | yes |
| asset-002 | `787a6798527b21ad0e0f62c021b4ce036513a2d3342b5cb519d2ca19000de140506c61747970757320437962657250756e6b732023393739` | `000de140506c61747970757320437962657250756e6b732023393739` | yes |
| asset-003 | `787a6798527b21ad0e0f62c021b4ce036513a2d3342b5cb519d2ca19000de140506c61747970757320437962657250756e6b732023393236` | `000de140506c61747970757320437962657250756e6b732023393236` | yes |
| asset-004 | `787a6798527b21ad0e0f62c021b4ce036513a2d3342b5cb519d2ca19000de140506c61747970757320437962657270756e6b73202331313734` | `000de140506c61747970757320437962657270756e6b73202331313734` | yes |
| asset-005 | `787a6798527b21ad0e0f62c021b4ce036513a2d3342b5cb519d2ca19000de140506c61747970757320437962657250756e6b732023373839` | `000de140506c61747970757320437962657250756e6b732023373839` | yes |
| asset-006 | `787a6798527b21ad0e0f62c021b4ce036513a2d3342b5cb519d2ca19000643b0506c61747970757320437962657250756e6b732023383635` | `000643b0506c61747970757320437962657250756e6b732023383635` | no metadata |
| asset-007 | `787a6798527b21ad0e0f62c021b4ce036513a2d3342b5cb519d2ca19000de140506c61747970757320437962657270756e6b73202334393534` | `000de140506c61747970757320437962657270756e6b73202334393534` | yes |
| asset-008 | `787a6798527b21ad0e0f62c021b4ce036513a2d3342b5cb519d2ca19000de140506c61747970757320437962657270756e6b73202333313433` | `000de140506c61747970757320437962657270756e6b73202333313433` | yes |
| asset-009 | `787a6798527b21ad0e0f62c021b4ce036513a2d3342b5cb519d2ca19000643b0506c61747970757320437962657250756e6b732023393331` | `000643b0506c61747970757320437962657250756e6b732023393331` | no metadata |
| asset-010 | `787a6798527b21ad0e0f62c021b4ce036513a2d3342b5cb519d2ca19000de140506c61747970757320437962657250756e6b732023343238` | `000de140506c61747970757320437962657250756e6b732023343238` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 6 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
