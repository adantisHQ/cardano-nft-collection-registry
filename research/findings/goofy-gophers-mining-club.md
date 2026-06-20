# Findings: Goofy Gophers Mining Club

Phase 3A metadata discovery — 2026-06-09

**Policy ID:** `075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a81`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/goofy-gophers-mining-club/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 3A Top-100 include_now (TapTools rank 21). Type: gaming. Discovery only — no final definition in this pass.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **minimal_or_custom** — Minimal or custom layout.

Top-level keys observed: `name`, `image`, `traits`, `twitter`, `website`, `mediaType`, `collection`.

---

## Metadata standard

| Signal | Finding |
|--------|---------|
| Blockfrost `onchain_metadata_standard` | CIP25v1 |
| Layout class | minimal_or_custom |
| Metadata root | `onchain_metadata` (Blockfrost asset response) |

---

## Trait layout

Minimal or custom layout

- `traits`
- `collection`

---

## Media layout

- `image` array
- mediaType: image/png

---

## Socials and links

### Socials

| Field | Value |
|-------|-------|
| twitter | `@ggmc_nft` |

### Links

| Field | Value |
|-------|-------|
| website | `https://www.ggmc.io` |

---

## License and royalties

| Area | Finding |
|------|---------|
| — | not present on-chain |

| Royalties | Not present in on-chain metadata samples |

---

## Custom fields

- `traits` (nested object or section)

---

## Expected registry mappings

- Trait extraction: Direct paths only; may need manual mapping
- Media: `$.image[0]`
- Identity: `$.name` where present

---

## Indexing caveats

- Raw samples are full Blockfrost asset responses; parsers must use `onchain_metadata` subtree

---

## Extraction strategy assessment

| Question | Answer |
|----------|--------|
| Are Phase 1 extraction strategies sufficient? | **Mostly** — direct paths; see custom fields |
| Recommended strategy | Direct paths only; may need manual mapping |

---

## Sample inventory

| Label | Asset unit | Asset name (hex) | Metadata |
|-------|------------|------------------|----------|
| asset-001 | `075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a81526f68616e204a6f686e736f6e` | `526f68616e204a6f686e736f6e` | yes |
| asset-002 | `075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a814865747269636b204b6f626f6c6467726970` | `4865747269636b204b6f626f6c6467726970` | yes |
| asset-003 | `075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a81526f736172696f207468652057656c6c2052656164` | `526f736172696f207468652057656c6c2052656164` | yes |
| asset-004 | `075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a8152757675722042726973746c6561726d6f7572` | `52757675722042726973746c6561726d6f7572` | yes |
| asset-005 | `075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a81526f6e6e69652053746f726d636c6f616b` | `526f6e6e69652053746f726d636c6f616b` | yes |
| asset-006 | `075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a814775686f6e6520536c7567686f726e` | `4775686f6e6520536c7567686f726e` | yes |
| asset-007 | `075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a8147696c766f72204772656d6461696e` | `47696c766f72204772656d6461696e` | yes |
| asset-008 | `075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a8147726f6c6575732057656c6c616279` | `47726f6c6575732057656c6c616279` | yes |
| asset-009 | `075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a815370656e6365722042726f6d77656c6c` | `5370656e6365722042726f6d77656c6c` | yes |
| asset-010 | `075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a8152616e696f6e2044756e6772617468` | `52616e696f6e2044756e6772617468` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 4 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
