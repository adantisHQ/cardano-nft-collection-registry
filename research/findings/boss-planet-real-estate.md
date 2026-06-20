# Findings: Boss Planet Real Estate

Phase 2 metadata discovery — 2026-06-08

**Policy ID:** `5a2cdc6e3aa9612fe4676672f443e7efd39c309d45e7919a4bf27750`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/boss-planet-real-estate/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 2 land/real-estate variant in Boss Cat universe; tests parcel-style fields distinct from Pavia/Cornucopias land claims.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **root_flat_keys** — Flat trait-like keys at metadata root.

Top-level keys observed: `name`, `image`, `District`, `XCoordinate`, `YCoordinate`.

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

- `District`
- `XCoordinate`
- `YCoordinate`

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
| asset-001 | `5a2cdc6e3aa9612fe4676672f443e7efd39c309d45e7919a4bf27750426f7373506c616e657444697374726963744f6e6537323331` | `426f7373506c616e657444697374726963744f6e6537323331` | yes |
| asset-002 | `5a2cdc6e3aa9612fe4676672f443e7efd39c309d45e7919a4bf27750426f7373506c616e657444697374726963744f6e6537323835` | `426f7373506c616e657444697374726963744f6e6537323835` | yes |
| asset-003 | `5a2cdc6e3aa9612fe4676672f443e7efd39c309d45e7919a4bf27750426f7373506c616e657444697374726963744f6e6537333031` | `426f7373506c616e657444697374726963744f6e6537333031` | yes |
| asset-004 | `5a2cdc6e3aa9612fe4676672f443e7efd39c309d45e7919a4bf27750426f7373506c616e657444697374726963744f6e6537333432` | `426f7373506c616e657444697374726963744f6e6537333432` | yes |
| asset-005 | `5a2cdc6e3aa9612fe4676672f443e7efd39c309d45e7919a4bf27750426f7373506c616e657444697374726963744f6e6537343138` | `426f7373506c616e657444697374726963744f6e6537343138` | yes |
| asset-006 | `5a2cdc6e3aa9612fe4676672f443e7efd39c309d45e7919a4bf27750426f7373506c616e657444697374726963744f6e6537343534` | `426f7373506c616e657444697374726963744f6e6537343534` | yes |
| asset-007 | `5a2cdc6e3aa9612fe4676672f443e7efd39c309d45e7919a4bf27750426f7373506c616e657444697374726963744f6e6537353335` | `426f7373506c616e657444697374726963744f6e6537353335` | yes |
| asset-008 | `5a2cdc6e3aa9612fe4676672f443e7efd39c309d45e7919a4bf27750426f7373506c616e657444697374726963744f6e6537353634` | `426f7373506c616e657444697374726963744f6e6537353634` | yes |
| asset-009 | `5a2cdc6e3aa9612fe4676672f443e7efd39c309d45e7919a4bf27750426f7373506c616e657444697374726963744f6e6537353834` | `426f7373506c616e657444697374726963744f6e6537353834` | yes |
| asset-010 | `5a2cdc6e3aa9612fe4676672f443e7efd39c309d45e7919a4bf27750426f7373506c616e657444697374726963744f6e6537363630` | `426f7373506c616e657444697374726963744f6e6537363630` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 5 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
