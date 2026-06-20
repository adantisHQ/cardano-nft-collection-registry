# Findings: ADA Invadaz Season 1 - Planet Zaguro

Phase 3A metadata discovery — 2026-06-09

**Policy ID:** `2d503a06893ced6641243f987403b2e094d41dc46153286c9f49b2e5`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/ada-invadaz-season-1-planet-zaguro/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 3A Top-100 include_now (TapTools rank 60). Type: land. Discovery only — no final definition in this pass.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **root_flat_keys** — Flat trait-like keys at metadata root.

Top-level keys observed: `Eyes`, `Face`, `Head`, `Skin`, `name`, `image`, `Armour`, `Weapon`, `project`, `Insignia`, `publisher`, `Background`, `description`.

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

- `Eyes`
- `Face`
- `Head`
- `Skin`
- `Armour`
- `Weapon`
- `Insignia`
- `Background`

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

- `publisher` (nested object or section)

---

## Expected registry mappings

- Trait extraction: Use `extraction.strategy: root_flat_keys` or per-key `direct_path`
- Media: `$.image` standard mapping
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
| asset-001 | `2d503a06893ced6641243f987403b2e094d41dc46153286c9f49b2e5414441496e766164617a313231` | `414441496e766164617a313231` | yes |
| asset-002 | `2d503a06893ced6641243f987403b2e094d41dc46153286c9f49b2e5414441496e766164617a31323136` | `414441496e766164617a31323136` | yes |
| asset-003 | `2d503a06893ced6641243f987403b2e094d41dc46153286c9f49b2e5414441496e766164617a32393733` | `414441496e766164617a32393733` | yes |
| asset-004 | `2d503a06893ced6641243f987403b2e094d41dc46153286c9f49b2e5414441496e766164617a32363131` | `414441496e766164617a32363131` | yes |
| asset-005 | `2d503a06893ced6641243f987403b2e094d41dc46153286c9f49b2e5414441496e766164617a343536` | `414441496e766164617a343536` | yes |
| asset-006 | `2d503a06893ced6641243f987403b2e094d41dc46153286c9f49b2e5414441496e766164617a32333937` | `414441496e766164617a32333937` | yes |
| asset-007 | `2d503a06893ced6641243f987403b2e094d41dc46153286c9f49b2e5414441496e766164617a32373633` | `414441496e766164617a32373633` | yes |
| asset-008 | `2d503a06893ced6641243f987403b2e094d41dc46153286c9f49b2e5414441496e766164617a333233` | `414441496e766164617a333233` | yes |
| asset-009 | `2d503a06893ced6641243f987403b2e094d41dc46153286c9f49b2e5414441496e766164617a32323135` | `414441496e766164617a32323135` | yes |
| asset-010 | `2d503a06893ced6641243f987403b2e094d41dc46153286c9f49b2e5414441496e766164617a32373035` | `414441496e766164617a32373035` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 6 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
