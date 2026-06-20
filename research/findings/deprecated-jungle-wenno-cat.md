# Findings: [DEPRECATED] Jungle Wenno Cat

Phase 2 metadata discovery — 2026-06-08

**Policy ID:** `3ca291585bbbd1deafab0495f8a7fda4753fbeae96c550492bcfd760`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/deprecated-jungle-wenno-cat/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

TapTools-deprecated label only — **on-chain metadata is present and parseable** on all 10 samples. Not a null-metadata collection. Notable quirks: **`image` stored as a two-element array** with IPFS CID split across strings (requires join/normalization); trait key **`mysterious number`** contains a space; numeric trait value type mixed with strings.

Top-level keys observed: `hats`, `name`, `skin`, `image`, `bottom`, `family`, `glasses`, `project`, `website`, `backgrounds`, `mysterious number`.

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

- `hats`
- `skin`
- `bottom`
- `family`
- `glasses`
- `backgrounds`
- `mysterious number`

---

## Media layout

- `image` array

---

## Socials and links

### Socials

| Field | Value |
|-------|-------|
| — | not present on-chain |

### Links

| Field | Value |
|-------|-------|
| website | `https://cnftjungle.io` |

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

- Trait extraction: `root_flat_keys` for flat traits; quote path for `mysterious number`
- Media: join `$.image[0]` + `$.image[1]` or normalize split IPFS array to single URI
- Identity: `$.name` where present

---

## Indexing caveats

- Split IPFS `image` array — normalize before display (class C)
- Trait keys with spaces require exact path quoting
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
| asset-001 | `3ca291585bbbd1deafab0495f8a7fda4753fbeae96c550492bcfd76057454e4e4f31303839` | `57454e4e4f31303839` | yes |
| asset-002 | `3ca291585bbbd1deafab0495f8a7fda4753fbeae96c550492bcfd76057454e4e4f31323933` | `57454e4e4f31323933` | yes |
| asset-003 | `3ca291585bbbd1deafab0495f8a7fda4753fbeae96c550492bcfd76057454e4e4f31333335` | `57454e4e4f31333335` | yes |
| asset-004 | `3ca291585bbbd1deafab0495f8a7fda4753fbeae96c550492bcfd76057454e4e4f333036` | `57454e4e4f333036` | yes |
| asset-005 | `3ca291585bbbd1deafab0495f8a7fda4753fbeae96c550492bcfd76057454e4e4f313130` | `57454e4e4f313130` | yes |
| asset-006 | `3ca291585bbbd1deafab0495f8a7fda4753fbeae96c550492bcfd76057454e4e4f313033` | `57454e4e4f313033` | yes |
| asset-007 | `3ca291585bbbd1deafab0495f8a7fda4753fbeae96c550492bcfd76057454e4e4f333137` | `57454e4e4f333137` | yes |
| asset-008 | `3ca291585bbbd1deafab0495f8a7fda4753fbeae96c550492bcfd76057454e4e4f31323031` | `57454e4e4f31323031` | yes |
| asset-009 | `3ca291585bbbd1deafab0495f8a7fda4753fbeae96c550492bcfd76057454e4e4f343630` | `57454e4e4f343630` | yes |
| asset-010 | `3ca291585bbbd1deafab0495f8a7fda4753fbeae96c550492bcfd76057454e4e4f31343438` | `57454e4e4f31343438` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 5 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
