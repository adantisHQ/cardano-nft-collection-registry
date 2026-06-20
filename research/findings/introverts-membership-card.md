# Findings: Introverts Membership Card

Phase 2 metadata discovery — 2026-06-08

**Policy ID:** `9b542bc33521163a7ff3a05d1df1bcc0c0ec6a0638337e4b2870f6ea`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/introverts-membership-card/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 2 membership pass pattern; tests access/tier/card fields rather than trait-grid PFP metadata.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **array_singleton_object** — `Official Links` array of single-key objects.

Top-level keys observed: `name`, `image`, `mediaType`, `description`, `Identification`, `Official Links`.

---

## Metadata standard

| Signal | Finding |
|--------|---------|
| Blockfrost `onchain_metadata_standard` | CIP25v1 |
| Layout class | array_singleton_object |
| Metadata root | `onchain_metadata` (Blockfrost asset response) |

---

## Trait layout

`Official Links` array of single-key objects

- `Website`
- `Twitter`
- `Discord`

---

## Media layout

- `image` string
- mediaType: image/png

---

## Socials and links

### Socials

| Field | Value |
|-------|-------|
| Twitter | `https://twitter.com/introvertsCNFT` |
| Discord | `https://discord.gg/introvertsCNFT` |

### Links

| Field | Value |
|-------|-------|
| Website | `https://introverts.art` |

---

## License and royalties

| Area | Finding |
|------|---------|
| — | not present on-chain |

| Royalties | Not present in on-chain metadata samples |

---

## Custom fields

- `Official Links` (nested object or section)

---

## Expected registry mappings

- Trait extraction: Use `extraction.strategy: array_singleton_object` (GAP-001 resolved in Phase 1)
- Media: `$.image` standard mapping
- Identity: `$.name` where present

---

## Indexing caveats

- Array-of-single-key-object sections require stable ordering or `array_singleton_object` extraction
- Raw samples are full Blockfrost asset responses; parsers must use `onchain_metadata` subtree

---

## Extraction strategy assessment

| Question | Answer |
|----------|--------|
| Are Phase 1 extraction strategies sufficient? | **Yes** — use `array_singleton_object` (GAP-001) |
| Recommended strategy | Use `extraction.strategy: array_singleton_object` |

---

## Sample inventory

| Label | Asset unit | Asset name (hex) | Metadata |
|-------|------------|------------------|----------|
| asset-001 | `9b542bc33521163a7ff3a05d1df1bcc0c0ec6a0638337e4b2870f6ea496e74726f76657274736d6361726430323133` | `496e74726f76657274736d6361726430323133` | yes |
| asset-002 | `9b542bc33521163a7ff3a05d1df1bcc0c0ec6a0638337e4b2870f6ea496e74726f76657274736d6361726430303637` | `496e74726f76657274736d6361726430303637` | yes |
| asset-003 | `9b542bc33521163a7ff3a05d1df1bcc0c0ec6a0638337e4b2870f6ea496e74726f76657274736d6361726431343536` | `496e74726f76657274736d6361726431343536` | yes |
| asset-004 | `9b542bc33521163a7ff3a05d1df1bcc0c0ec6a0638337e4b2870f6ea496e74726f76657274736d6361726430393837` | `496e74726f76657274736d6361726430393837` | yes |
| asset-005 | `9b542bc33521163a7ff3a05d1df1bcc0c0ec6a0638337e4b2870f6ea496e74726f76657274736d6361726431313539` | `496e74726f76657274736d6361726431313539` | yes |
| asset-006 | `9b542bc33521163a7ff3a05d1df1bcc0c0ec6a0638337e4b2870f6ea496e74726f76657274736d6361726430393435` | `496e74726f76657274736d6361726430393435` | yes |
| asset-007 | `9b542bc33521163a7ff3a05d1df1bcc0c0ec6a0638337e4b2870f6ea496e74726f76657274736d6361726430343830` | `496e74726f76657274736d6361726430343830` | yes |
| asset-008 | `9b542bc33521163a7ff3a05d1df1bcc0c0ec6a0638337e4b2870f6ea496e74726f76657274736d6361726431333932` | `496e74726f76657274736d6361726431333932` | yes |
| asset-009 | `9b542bc33521163a7ff3a05d1df1bcc0c0ec6a0638337e4b2870f6ea496e74726f76657274736d6361726430393331` | `496e74726f76657274736d6361726430393331` | yes |
| asset-010 | `9b542bc33521163a7ff3a05d1df1bcc0c0ec6a0638337e4b2870f6ea496e74726f76657274736d6361726430393439` | `496e74726f76657274736d6361726430393439` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 4 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
