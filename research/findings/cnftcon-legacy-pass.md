# Findings: cNFTcon Legacy Pass

Phase 2 metadata discovery — 2026-06-08

**Policy ID:** `5fa72fbeecbe80a3e15de1cacab54ba5e310e2c36ae85351132ed4ad`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/cnftcon-legacy-pass/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 2 event legacy pass; tests pass-style commemorative metadata distinct from Cardano Summit 2021 badges.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **minimal_or_custom** — Minimal or custom layout.

Top-level keys observed: `name`, `files`, `image`, `artist`, `Website`, `mediaType`, `publisher`, `Max Supply`.

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

- `artist`
- `Website`
- `publisher`
- `Max Supply`

---

## Media layout

- `image` string
- `files[]` multi-media
- mediaType: image/gif

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

- `Website` (nested object or section)
- `publisher` (nested object or section)

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
| asset-001 | `5fa72fbeecbe80a3e15de1cacab54ba5e310e2c36ae85351132ed4ad4c65676163795061737330303139` | `4c65676163795061737330303139` | yes |
| asset-002 | `5fa72fbeecbe80a3e15de1cacab54ba5e310e2c36ae85351132ed4ad4c65676163795061737330373638` | `4c65676163795061737330373638` | yes |
| asset-003 | `5fa72fbeecbe80a3e15de1cacab54ba5e310e2c36ae85351132ed4ad4c65676163795061737331313934` | `4c65676163795061737331313934` | yes |
| asset-004 | `5fa72fbeecbe80a3e15de1cacab54ba5e310e2c36ae85351132ed4ad4c65676163795061737331353931` | `4c65676163795061737331353931` | yes |
| asset-005 | `5fa72fbeecbe80a3e15de1cacab54ba5e310e2c36ae85351132ed4ad4c65676163795061737332343039` | `4c65676163795061737332343039` | yes |
| asset-006 | `5fa72fbeecbe80a3e15de1cacab54ba5e310e2c36ae85351132ed4ad4c65676163795061737332333731` | `4c65676163795061737332333731` | yes |
| asset-007 | `5fa72fbeecbe80a3e15de1cacab54ba5e310e2c36ae85351132ed4ad4c65676163795061737331343431` | `4c65676163795061737331343431` | yes |
| asset-008 | `5fa72fbeecbe80a3e15de1cacab54ba5e310e2c36ae85351132ed4ad4c65676163795061737332313833` | `4c65676163795061737332313833` | yes |
| asset-009 | `5fa72fbeecbe80a3e15de1cacab54ba5e310e2c36ae85351132ed4ad4c65676163795061737332303630` | `4c65676163795061737332303630` | yes |
| asset-010 | `5fa72fbeecbe80a3e15de1cacab54ba5e310e2c36ae85351132ed4ad4c65676163795061737332303438` | `4c65676163795061737332303438` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 5 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
