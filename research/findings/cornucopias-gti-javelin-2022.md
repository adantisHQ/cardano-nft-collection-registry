# Findings: Cornucopias GTI Javelin 2022

Phase 2 metadata discovery — 2026-06-08

**Policy ID:** `086849cd9f672e731e0d9590a2d28a6a690ffa2f73bae0e1970f0491`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/cornucopias-gti-javelin-2022/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 2 Cornucopias ecosystem (vehicle policy, not Phase 1 land zones); tests shared brand metadata across game asset types.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **attributes_object** — `attributes` object map.

Top-level keys observed: `id`, `name`, `files`, `image`, `media`, `gameid`, `rarity`, `season`, `version`, `fullName`, `mediaType`, `typeClass`, `attributes`, `description`, `projectName`.

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

- `Trim`
- `Year`
- `Color`
- `Model`
- `Paint`
- `Seats`
- `Interior`
- `Derivative`
- `Manufacturer`

---

## Media layout

- `image` string
- `files[]` multi-media
- mediaType: image/png
- nested `media` object

---

## Socials and links

### Socials

| Field | Value |
|-------|-------|
| Discord | `https://discord.gg/cornucopiasgame` |

### Links

| Field | Value |
|-------|-------|
| Website | `https://www.cornucopias.io` |
| Link Tree | `https://linktr.ee/CornucopiasGame` |

---

## License and royalties

| Area | Finding |
|------|---------|
| — | not present on-chain |

| Royalties | Not present in on-chain metadata samples |

---

## Custom fields

- `media` (nested object or section)
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
| asset-001 | `086849cd9f672e731e0d9590a2d28a6a690ffa2f73bae0e1970f04914754494a3030313236` | `4754494a3030313236` | yes |
| asset-002 | `086849cd9f672e731e0d9590a2d28a6a690ffa2f73bae0e1970f04914754494a3030313431` | `4754494a3030313431` | yes |
| asset-003 | `086849cd9f672e731e0d9590a2d28a6a690ffa2f73bae0e1970f04914754494a3132333835` | `4754494a3132333835` | yes |
| asset-004 | `086849cd9f672e731e0d9590a2d28a6a690ffa2f73bae0e1970f04914754494a3132333133` | `4754494a3132333133` | yes |
| asset-005 | `086849cd9f672e731e0d9590a2d28a6a690ffa2f73bae0e1970f04914754494a3132333437` | `4754494a3132333437` | yes |
| asset-006 | `086849cd9f672e731e0d9590a2d28a6a690ffa2f73bae0e1970f04914754494a3132333832` | `4754494a3132333832` | yes |
| asset-007 | `086849cd9f672e731e0d9590a2d28a6a690ffa2f73bae0e1970f04914754494a3132333130` | `4754494a3132333130` | yes |
| asset-008 | `086849cd9f672e731e0d9590a2d28a6a690ffa2f73bae0e1970f04914754494a3132323635` | `4754494a3132323635` | yes |
| asset-009 | `086849cd9f672e731e0d9590a2d28a6a690ffa2f73bae0e1970f04914754494a3132323534` | `4754494a3132323534` | yes |
| asset-010 | `086849cd9f672e731e0d9590a2d28a6a690ffa2f73bae0e1970f04914754494a3132323134` | `4754494a3132323134` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 3 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
