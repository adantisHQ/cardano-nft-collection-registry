# Findings: Clay Nation x Good Charlotte by Clay Mates

Phase 2 metadata discovery — 2026-06-08

**Policy ID:** `94da605878403d07c144fe96cd50fe20c16186dd8d171c78ed6a8768`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/clay-nation-good-charlotte/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 2 collab drop under Clay Mates; tests collab-specific trait/media fields and linked-brand metadata.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **traits_string_array** — `traits` string array with colon-separated labels (e.g. `Background: Purple`).

Top-level keys observed: `name`, `image`, `traits`, `project`.

---

## Metadata standard

| Signal | Finding |
|--------|---------|
| Blockfrost `onchain_metadata_standard` | CIP25v1 |
| Layout class | traits_string_array |
| Metadata root | `onchain_metadata` (Blockfrost asset response) |

---

## Trait layout

`traits` string array with colon-separated labels (e.g. `Background: Purple`)

- `Background: Magenta`
- `Clay Colour: Pale`
- `Clothes: Jumpsuit`
- `Eyes: Blood Shot`
- `Eyebrows: Normal`
- `Hats & Hair: Head Tattoos`
- `Accessories: Music Notes`
- `Mouth: Normal`

---

## Media layout

- `image` string

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

- `traits` (nested object or section)

---

## Expected registry mappings

- Trait extraction: Parse `traits[]` strings by splitting on first colon; no dedicated strategy yet (single-collection pattern)
- Media: `$.image` standard mapping
- Identity: `$.name` where present

---

## Indexing caveats

- Raw samples are full Blockfrost asset responses; parsers must use `onchain_metadata` subtree

---

## Extraction strategy assessment

| Question | Answer |
|----------|--------|
| Are Phase 1 extraction strategies sufficient? | **Mostly** — direct paths; see custom fields |
| Recommended strategy | Parse `traits[]` strings by splitting on first colon; no dedicated strategy yet |

---

## Sample inventory

| Label | Asset unit | Asset name (hex) | Metadata |
|-------|------------|------------------|----------|
| asset-001 | `94da605878403d07c144fe96cd50fe20c16186dd8d171c78ed6a8768436c6179436861726c6f74746531` | `436c6179436861726c6f74746531` | yes |
| asset-002 | `94da605878403d07c144fe96cd50fe20c16186dd8d171c78ed6a8768436c6179436861726c6f74746532` | `436c6179436861726c6f74746532` | yes |
| asset-003 | `94da605878403d07c144fe96cd50fe20c16186dd8d171c78ed6a8768436c6179436861726c6f7474653138` | `436c6179436861726c6f7474653138` | yes |
| asset-004 | `94da605878403d07c144fe96cd50fe20c16186dd8d171c78ed6a8768436c6179436861726c6f7474653336` | `436c6179436861726c6f7474653336` | yes |
| asset-005 | `94da605878403d07c144fe96cd50fe20c16186dd8d171c78ed6a8768436c6179436861726c6f7474653535` | `436c6179436861726c6f7474653535` | yes |
| asset-006 | `94da605878403d07c144fe96cd50fe20c16186dd8d171c78ed6a8768436c6179436861726c6f7474653733` | `436c6179436861726c6f7474653733` | yes |
| asset-007 | `94da605878403d07c144fe96cd50fe20c16186dd8d171c78ed6a8768436c6179436861726c6f7474653932` | `436c6179436861726c6f7474653932` | yes |
| asset-008 | `94da605878403d07c144fe96cd50fe20c16186dd8d171c78ed6a8768436c6179436861726c6f747465313130` | `436c6179436861726c6f747465313130` | yes |
| asset-009 | `94da605878403d07c144fe96cd50fe20c16186dd8d171c78ed6a8768436c6179436861726c6f747465313239` | `436c6179436861726c6f747465313239` | yes |
| asset-010 | `94da605878403d07c144fe96cd50fe20c16186dd8d171c78ed6a8768436c6179436861726c6f747465313437` | `436c6179436861726c6f747465313437` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 6 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
