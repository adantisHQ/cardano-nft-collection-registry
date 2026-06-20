# Findings: Chilled Kongs

Phase 2 metadata discovery — 2026-06-08

**Policy ID:** `c56d4cceb8a8550534968e1bf165137ca41e908d2d780cc1402079bd`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/chilled-kongs/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 2 major PFP with likely attributes-object or non-flat trait layout; pairs with Vox policy; not a Phase 1 flat-root duplicate.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **root_flat_keys** — Flat trait-like keys at metadata root.

Top-level keys observed: `hat`, `body`, `eyes`, `name`, `files`, `image`, `mouth`, `clothes`, `project`, `special`, `earrings`, `mediaType`, `background`.

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

- `hat`
- `body`
- `eyes`
- `mouth`
- `clothes`
- `special`
- `earrings`
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
| asset-001 | `c56d4cceb8a8550534968e1bf165137ca41e908d2d780cc1402079bd4368696c6c65644b6f6e6730313030` | `4368696c6c65644b6f6e6730313030` | yes |
| asset-002 | `c56d4cceb8a8550534968e1bf165137ca41e908d2d780cc1402079bd4368696c6c65644b6f6e6730333036` | `4368696c6c65644b6f6e6730333036` | yes |
| asset-003 | `c56d4cceb8a8550534968e1bf165137ca41e908d2d780cc1402079bd4368696c6c65644b6f6e6731303532` | `4368696c6c65644b6f6e6731303532` | yes |
| asset-004 | `c56d4cceb8a8550534968e1bf165137ca41e908d2d780cc1402079bd4368696c6c65644b6f6e6737363330` | `4368696c6c65644b6f6e6737363330` | yes |
| asset-005 | `c56d4cceb8a8550534968e1bf165137ca41e908d2d780cc1402079bd4368696c6c65644b6f6e6734323437` | `4368696c6c65644b6f6e6734323437` | yes |
| asset-006 | `c56d4cceb8a8550534968e1bf165137ca41e908d2d780cc1402079bd4368696c6c65644b6f6e6732323937` | `4368696c6c65644b6f6e6732323937` | yes |
| asset-007 | `c56d4cceb8a8550534968e1bf165137ca41e908d2d780cc1402079bd4368696c6c65644b6f6e6731303731` | `4368696c6c65644b6f6e6731303731` | yes |
| asset-008 | `c56d4cceb8a8550534968e1bf165137ca41e908d2d780cc1402079bd4368696c6c65644b6f6e6734303333` | `4368696c6c65644b6f6e6734303333` | yes |
| asset-009 | `c56d4cceb8a8550534968e1bf165137ca41e908d2d780cc1402079bd4368696c6c65644b6f6e6731323834` | `4368696c6c65644b6f6e6731323834` | yes |
| asset-010 | `c56d4cceb8a8550534968e1bf165137ca41e908d2d780cc1402079bd4368696c6c65644b6f6e6736353830` | `4368696c6c65644b6f6e6736353830` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 5 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
