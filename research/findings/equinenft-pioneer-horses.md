# Findings: EquineNFT Pioneer Horses

Phase 3A metadata discovery — 2026-06-09

**Policy ID:** `30ed3d95db1d6bb2c12fc5228a2986eab4553f192a12a4607780e15b`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/equinenft-pioneer-horses/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 3A Top-100 include_now (TapTools rank 44). Type: gaming. Discovery only — no final definition in this pass.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **root_flat_keys** — Flat trait-like keys at metadata root.

Top-level keys observed: `Age`, `name`, `~DNA`, `Color`, `files`, `image`, `speed`, `Gender`, `~Links`, `agility`, `stamina`, `Markings`, `endurance`, `mediaType`, `Collection`, `acceleration`.

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

- `Age`
- `Color`
- `speed`
- `Gender`
- `agility`
- `stamina`
- `endurance`
- `Collection`
- `acceleration`

---

## Media layout

- `image` string
- `files[]` multi-media
- mediaType: image/jpeg

---

## Socials and links

### Socials

| Field | Value |
|-------|-------|
| Discord | `https://discord.com/invite/Equine` |
| Twitter | `https://twitter.com/equinenft` |

### Links

| Field | Value |
|-------|-------|
| Website | `https://equine.gg` |

---

## License and royalties

| Area | Finding |
|------|---------|
| — | not present on-chain |

| Royalties | Not present in on-chain metadata samples |

---

## Custom fields

- `~DNA` (nested object or section)
- `~Links` (nested object or section)
- `Markings` (nested object or section)

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
| asset-001 | `30ed3d95db1d6bb2c12fc5228a2986eab4553f192a12a4607780e15b457175696e6550696f6e656572486f7273653030303030` | `457175696e6550696f6e656572486f7273653030303030` | yes |
| asset-002 | `30ed3d95db1d6bb2c12fc5228a2986eab4553f192a12a4607780e15b457175696e6550696f6e656572486f7273653030303031` | `457175696e6550696f6e656572486f7273653030303031` | yes |
| asset-003 | `30ed3d95db1d6bb2c12fc5228a2986eab4553f192a12a4607780e15b457175696e6550696f6e656572486f7273653030303137` | `457175696e6550696f6e656572486f7273653030303137` | yes |
| asset-004 | `30ed3d95db1d6bb2c12fc5228a2986eab4553f192a12a4607780e15b457175696e6550696f6e656572486f7273653030303335` | `457175696e6550696f6e656572486f7273653030303335` | yes |
| asset-005 | `30ed3d95db1d6bb2c12fc5228a2986eab4553f192a12a4607780e15b457175696e6550696f6e656572486f7273653030303534` | `457175696e6550696f6e656572486f7273653030303534` | yes |
| asset-006 | `30ed3d95db1d6bb2c12fc5228a2986eab4553f192a12a4607780e15b457175696e6550696f6e656572486f7273653030303732` | `457175696e6550696f6e656572486f7273653030303732` | yes |
| asset-007 | `30ed3d95db1d6bb2c12fc5228a2986eab4553f192a12a4607780e15b457175696e6550696f6e656572486f7273653030303931` | `457175696e6550696f6e656572486f7273653030303931` | yes |
| asset-008 | `30ed3d95db1d6bb2c12fc5228a2986eab4553f192a12a4607780e15b457175696e6550696f6e656572486f7273653030313039` | `457175696e6550696f6e656572486f7273653030313039` | yes |
| asset-009 | `30ed3d95db1d6bb2c12fc5228a2986eab4553f192a12a4607780e15b457175696e6550696f6e656572486f7273653030313238` | `457175696e6550696f6e656572486f7273653030313238` | yes |
| asset-010 | `30ed3d95db1d6bb2c12fc5228a2986eab4553f192a12a4607780e15b457175696e6550696f6e656572486f7273653030313436` | `457175696e6550696f6e656572486f7273653030313436` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 4 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
