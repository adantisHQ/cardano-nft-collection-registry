# Findings: Book.io - Gutenberg Bible Collection

Phase 2 metadata discovery — 2026-06-08

**Policy ID:** `477cec772adb1466b301fb8161f505aa66ed1ee8d69d3e7984256a43`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/book-io-gutenberg-bible/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 2 flagship Book.io media-linked collection; tests document metadata, files[], and external reading resources.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **attributes_object** — `attributes` object map.

Top-level keys observed: `id`, `data`, `name`, `files`, `image`, `sha256`, `website`, `attributes`, `description`.

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

- `Gold`

---

## Media layout

- `image` string
- `files[]` multi-media

---

## Socials and links

### Socials

| Field | Value |
|-------|-------|
| — | not present on-chain |

### Links

| Field | Value |
|-------|-------|
| website | `https://www.booktoken.io` |

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
| asset-001 | `477cec772adb1466b301fb8161f505aa66ed1ee8d69d3e7984256a43477574656e62657267204269626c65202330303030` | `477574656e62657267204269626c65202330303030` | yes |
| asset-002 | `477cec772adb1466b301fb8161f505aa66ed1ee8d69d3e7984256a43477574656e62657267204269626c65202330303031` | `477574656e62657267204269626c65202330303031` | yes |
| asset-003 | `477cec772adb1466b301fb8161f505aa66ed1ee8d69d3e7984256a43477574656e62657267204269626c65202330303137` | `477574656e62657267204269626c65202330303137` | yes |
| asset-004 | `477cec772adb1466b301fb8161f505aa66ed1ee8d69d3e7984256a43477574656e62657267204269626c65202330303335` | `477574656e62657267204269626c65202330303335` | yes |
| asset-005 | `477cec772adb1466b301fb8161f505aa66ed1ee8d69d3e7984256a43477574656e62657267204269626c65202330303534` | `477574656e62657267204269626c65202330303534` | yes |
| asset-006 | `477cec772adb1466b301fb8161f505aa66ed1ee8d69d3e7984256a43477574656e62657267204269626c65202330303732` | `477574656e62657267204269626c65202330303732` | yes |
| asset-007 | `477cec772adb1466b301fb8161f505aa66ed1ee8d69d3e7984256a43477574656e62657267204269626c65202330313131` | `477574656e62657267204269626c65202330313131` | yes |
| asset-008 | `477cec772adb1466b301fb8161f505aa66ed1ee8d69d3e7984256a43477574656e62657267204269626c65202330313239` | `477574656e62657267204269626c65202330313239` | yes |
| asset-009 | `477cec772adb1466b301fb8161f505aa66ed1ee8d69d3e7984256a43477574656e62657267204269626c65202330313538` | `477574656e62657267204269626c65202330313538` | yes |
| asset-010 | `477cec772adb1466b301fb8161f505aa66ed1ee8d69d3e7984256a43477574656e62657267204269626c65202330313836` | `477574656e62657267204269626c65202330313836` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 4 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
