# Findings: EarthNode

Phase 3A metadata discovery — 2026-06-09

**Policy ID:** `b97859c71e4e73af3ae83c30a3172c434c43041f6ff19c297fb76094`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/earthnode/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 3A Top-100 include_now (TapTools rank 5). Type: land. Discovery only — no final definition in this pass.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **minimal_or_custom** — Minimal or custom layout.

Top-level keys observed: `name`, `files`, `image`, `mediaType`, `description`.

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

_No trait grid in samples_

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

- Trait extraction: Direct paths only; may need manual mapping
- Media: `media_mappings.files` from `$.files[]`
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
| asset-001 | `b97859c71e4e73af3ae83c30a3172c434c43041f6ff19c297fb7609445617274684e6f646531` | `45617274684e6f646531` | yes |
| asset-002 | `b97859c71e4e73af3ae83c30a3172c434c43041f6ff19c297fb7609445617274684e6f64653130` | `45617274684e6f64653130` | yes |
| asset-003 | `b97859c71e4e73af3ae83c30a3172c434c43041f6ff19c297fb7609445617274684e6f64653131` | `45617274684e6f64653131` | yes |
| asset-004 | `b97859c71e4e73af3ae83c30a3172c434c43041f6ff19c297fb7609445617274684e6f646533` | `45617274684e6f646533` | yes |
| asset-005 | `b97859c71e4e73af3ae83c30a3172c434c43041f6ff19c297fb7609445617274684e6f64653337` | `45617274684e6f64653337` | yes |
| asset-006 | `b97859c71e4e73af3ae83c30a3172c434c43041f6ff19c297fb7609445617274684e6f64653536` | `45617274684e6f64653536` | yes |
| asset-007 | `b97859c71e4e73af3ae83c30a3172c434c43041f6ff19c297fb7609445617274684e6f64653734` | `45617274684e6f64653734` | yes |
| asset-008 | `b97859c71e4e73af3ae83c30a3172c434c43041f6ff19c297fb7609445617274684e6f64653932` | `45617274684e6f64653932` | yes |
| asset-009 | `b97859c71e4e73af3ae83c30a3172c434c43041f6ff19c297fb7609445617274684e6f6465313131` | `45617274684e6f6465313131` | yes |
| asset-010 | `b97859c71e4e73af3ae83c30a3172c434c43041f6ff19c297fb7609445617274684e6f6465313330` | `45617274684e6f6465313330` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 5 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
