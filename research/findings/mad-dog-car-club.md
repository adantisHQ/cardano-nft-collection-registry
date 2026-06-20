# Findings: Mad Dog Car Club

Phase 3A metadata discovery — 2026-06-09

**Policy ID:** `7e605894cdcbe8d1933f0a8760d93bd121aca583cf21ad1c25e51fd3`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/mad-dog-car-club/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 3A Top-100 include_now (TapTools rank 53). Type: pfp. Discovery only — no final definition in this pass.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **root_flat_keys** — Flat trait-like keys at metadata root.

Top-level keys observed: `Fur`, `Hat`, `Eyes`, `name`, `Mouth`, `image`, `Clothes`, `Background`.

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

- `Fur`
- `Hat`
- `Eyes`
- `Mouth`
- `Clothes`
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

_No notable nested sections beyond standard fields_

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
| asset-001 | `7e605894cdcbe8d1933f0a8760d93bd121aca583cf21ad1c25e51fd34d6164446f67436172436c756231323130` | `4d6164446f67436172436c756231323130` | yes |
| asset-002 | `7e605894cdcbe8d1933f0a8760d93bd121aca583cf21ad1c25e51fd34d6164446f67436172436c756231333233` | `4d6164446f67436172436c756231333233` | yes |
| asset-003 | `7e605894cdcbe8d1933f0a8760d93bd121aca583cf21ad1c25e51fd34d6164446f67436172436c756233353131` | `4d6164446f67436172436c756233353131` | yes |
| asset-004 | `7e605894cdcbe8d1933f0a8760d93bd121aca583cf21ad1c25e51fd34d6164446f67436172436c756234343631` | `4d6164446f67436172436c756234343631` | yes |
| asset-005 | `7e605894cdcbe8d1933f0a8760d93bd121aca583cf21ad1c25e51fd34d6164446f67436172436c756236363732` | `4d6164446f67436172436c756236363732` | yes |
| asset-006 | `7e605894cdcbe8d1933f0a8760d93bd121aca583cf21ad1c25e51fd34d6164446f67436172436c756235313231` | `4d6164446f67436172436c756235313231` | yes |
| asset-007 | `7e605894cdcbe8d1933f0a8760d93bd121aca583cf21ad1c25e51fd34d6164446f67436172436c756239363433` | `4d6164446f67436172436c756239363433` | yes |
| asset-008 | `7e605894cdcbe8d1933f0a8760d93bd121aca583cf21ad1c25e51fd34d6164446f67436172436c7562333232` | `4d6164446f67436172436c7562333232` | yes |
| asset-009 | `7e605894cdcbe8d1933f0a8760d93bd121aca583cf21ad1c25e51fd34d6164446f67436172436c756235313936` | `4d6164446f67436172436c756235313936` | yes |
| asset-010 | `7e605894cdcbe8d1933f0a8760d93bd121aca583cf21ad1c25e51fd34d6164446f67436172436c756233333635` | `4d6164446f67436172436c756233333635` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 5 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
