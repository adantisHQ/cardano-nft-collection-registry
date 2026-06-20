# Findings: Salty Seagulls Society

Phase 3A metadata discovery — 2026-06-09

**Policy ID:** `5329a9b87459e1df8e86ce56bae4b3770862c0969011e6faf474b65f`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/salty-seagulls-society/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 3A Top-100 include_now (TapTools rank 40). Type: gaming. Discovery only — no final definition in this pass.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **root_flat_keys** — Flat trait-like keys at metadata root.

Top-level keys observed: `Hat`, `Beak`, `Eyes`, `Role`, `name`, `Level`, `Shirt`, `files`, `image`, `Tattoo`, `Glasses`, `Earrings`, `Feathers`, `Homeland`, `mediaType`, `Background`, `Mated Pair`.

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

- `Hat`
- `Beak`
- `Eyes`
- `Role`
- `Level`
- `Shirt`
- `Tattoo`
- `Glasses`
- `Earrings`
- `Feathers`
- `Homeland`
- `Background`
- `Mated Pair`

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
| asset-001 | `5329a9b87459e1df8e86ce56bae4b3770862c0969011e6faf474b65f41646d6972616c42726164646f636b48756e74696e67746f6e` | `41646d6972616c42726164646f636b48756e74696e67746f6e` | yes |
| asset-002 | `5329a9b87459e1df8e86ce56bae4b3770862c0969011e6faf474b65f41646d6972616c47756c6c6448756e74696e67746f6e` | `41646d6972616c47756c6c6448756e74696e67746f6e` | yes |
| asset-003 | `5329a9b87459e1df8e86ce56bae4b3770862c0969011e6faf474b65f4c6f7264486173746f64656e4d6176657269636b73` | `4c6f7264486173746f64656e4d6176657269636b73` | yes |
| asset-004 | `5329a9b87459e1df8e86ce56bae4b3770862c0969011e6faf474b65f456e7465727461696e6572416e616c6973614e61766167696f` | `456e7465727461696e6572416e616c6973614e61766167696f` | yes |
| asset-005 | `5329a9b87459e1df8e86ce56bae4b3770862c0969011e6faf474b65f4c6f726444616e7362794d6176657269636b73` | `4c6f726444616e7362794d6176657269636b73` | yes |
| asset-006 | `5329a9b87459e1df8e86ce56bae4b3770862c0969011e6faf474b65f4361707461696e426f6a61636b48756e74696e67746f6e` | `4361707461696e426f6a61636b48756e74696e67746f6e` | yes |
| asset-007 | `5329a9b87459e1df8e86ce56bae4b3770862c0969011e6faf474b65f456e7465727461696e65724368616e63656c6c6f724e617a617265` | `456e7465727461696e65724368616e63656c6c6f724e617a617265` | yes |
| asset-008 | `5329a9b87459e1df8e86ce56bae4b3770862c0969011e6faf474b65f43656c65627269747947756c6c3137` | `43656c65627269747947756c6c3137` | yes |
| asset-009 | `5329a9b87459e1df8e86ce56bae4b3770862c0969011e6faf474b65f456e7465727461696e65724275667942616e7a6169` | `456e7465727461696e65724275667942616e7a6169` | yes |
| asset-010 | `5329a9b87459e1df8e86ce56bae4b3770862c0969011e6faf474b65f4361707461696e4e696d726f64486f737365676f72` | `4361707461696e4e696d726f64486f737365676f72` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 5 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
