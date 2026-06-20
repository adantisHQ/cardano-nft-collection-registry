# Findings: Yummi Universe - Naru

Phase 2 metadata discovery — 2026-06-08

**Policy ID:** `b1814c6d3b0f7a42c9ee990c06c9d504a42bb22bf0e34e7908ae21b2`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/yummi-universe-naru/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 2 multi-policy ecosystem: seasonal character line (sibling policies for Spoopy/Winter/Spring/Summer Naru); tests repeated layout across related policies.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **attributes_object** — `attributes` object map.

Top-level keys observed: `name`, `image`, `copyright`, `mediaType`, `attributes`.

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

- `Body`
- `Face`
- `Headwear`
- `Background`

---

## Media layout

- `image` string
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
| copyright | 2021 Yummi Universe |

| Royalties | Not present in on-chain metadata samples |

---

## Custom fields

- `attributes` (nested object or section)

---

## Expected registry mappings

- Trait extraction: Use `direct_path` under `$.attributes.<key>`
- Media: `$.image` standard mapping
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
| asset-001 | `b1814c6d3b0f7a42c9ee990c06c9d504a42bb22bf0e34e7908ae21b24e6172753031313536` | `4e6172753031313536` | yes |
| asset-002 | `b1814c6d3b0f7a42c9ee990c06c9d504a42bb22bf0e34e7908ae21b24e6172753032333633` | `4e6172753032333633` | yes |
| asset-003 | `b1814c6d3b0f7a42c9ee990c06c9d504a42bb22bf0e34e7908ae21b24e6172753039333230` | `4e6172753039333230` | yes |
| asset-004 | `b1814c6d3b0f7a42c9ee990c06c9d504a42bb22bf0e34e7908ae21b24e6172753034313830` | `4e6172753034313830` | yes |
| asset-005 | `b1814c6d3b0f7a42c9ee990c06c9d504a42bb22bf0e34e7908ae21b24e6172753030363139` | `4e6172753030363139` | yes |
| asset-006 | `b1814c6d3b0f7a42c9ee990c06c9d504a42bb22bf0e34e7908ae21b24e6172753032383234` | `4e6172753032383234` | yes |
| asset-007 | `b1814c6d3b0f7a42c9ee990c06c9d504a42bb22bf0e34e7908ae21b24e6172753030313838` | `4e6172753030313838` | yes |
| asset-008 | `b1814c6d3b0f7a42c9ee990c06c9d504a42bb22bf0e34e7908ae21b24e6172753035383234` | `4e6172753035383234` | yes |
| asset-009 | `b1814c6d3b0f7a42c9ee990c06c9d504a42bb22bf0e34e7908ae21b24e6172753038383938` | `4e6172753038383938` | yes |
| asset-010 | `b1814c6d3b0f7a42c9ee990c06c9d504a42bb22bf0e34e7908ae21b24e6172753030363330` | `4e6172753030363330` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 5 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
