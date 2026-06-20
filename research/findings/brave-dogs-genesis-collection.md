# Findings: Brave Dogs - Genesis Collection

Phase 3A metadata discovery — 2026-06-09

**Policy ID:** `09787e7c506749f5561668d91ed8979b09b1df5f86c84cb9bdd080a0`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/brave-dogs-genesis-collection/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 3A Top-100 include_now (TapTools rank 100). Type: event. Discovery only — no final definition in this pass.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **root_flat_keys** — Flat trait-like keys at metadata root.

Top-level keys observed: `Eyes`, `Hand`, `Nose`, `name`, `Coats`, `Mouth`, `files`, `image`, `Clothes`, `Station`, `Division`, `Headgear`, `mediaType`, `Background`, `Number of Shares`.

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
- `Hand`
- `Nose`
- `Coats`
- `Mouth`
- `Clothes`
- `Station`
- `Division`
- `Headgear`
- `Background`
- `Number of Shares`

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
| asset-001 | `09787e7c506749f5561668d91ed8979b09b1df5f86c84cb9bdd080a0427261766520446f67202330323431` | `427261766520446f67202330323431` | yes |
| asset-002 | `09787e7c506749f5561668d91ed8979b09b1df5f86c84cb9bdd080a0427261766520446f67202330323838` | `427261766520446f67202330323838` | yes |
| asset-003 | `09787e7c506749f5561668d91ed8979b09b1df5f86c84cb9bdd080a0427261766520446f67202334373531` | `427261766520446f67202334373531` | yes |
| asset-004 | `09787e7c506749f5561668d91ed8979b09b1df5f86c84cb9bdd080a0427261766520446f67202331373734` | `427261766520446f67202331373734` | yes |
| asset-005 | `09787e7c506749f5561668d91ed8979b09b1df5f86c84cb9bdd080a0427261766520446f67202331373133` | `427261766520446f67202331373133` | yes |
| asset-006 | `09787e7c506749f5561668d91ed8979b09b1df5f86c84cb9bdd080a0427261766520446f67202330393939` | `427261766520446f67202330393939` | yes |
| asset-007 | `09787e7c506749f5561668d91ed8979b09b1df5f86c84cb9bdd080a0427261766520446f67202333313736` | `427261766520446f67202333313736` | yes |
| asset-008 | `09787e7c506749f5561668d91ed8979b09b1df5f86c84cb9bdd080a0427261766520446f67202331313339` | `427261766520446f67202331313339` | yes |
| asset-009 | `09787e7c506749f5561668d91ed8979b09b1df5f86c84cb9bdd080a0427261766520446f67202333393938` | `427261766520446f67202333393938` | yes |
| asset-010 | `09787e7c506749f5561668d91ed8979b09b1df5f86c84cb9bdd080a0427261766520446f67202334383835` | `427261766520446f67202334383835` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 5 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
