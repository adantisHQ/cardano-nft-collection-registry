# Findings: Magic Kongs

Phase 3A metadata discovery — 2026-06-09

**Policy ID:** `2eeb39204c3d104b40ec56bfd612bb1067fdea45de15f3a8aad9db71`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/magic-kongs/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 3A Top-100 include_now (TapTools rank 70). Type: gaming. Discovery only — no final definition in this pass.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **root_flat_keys** — Flat trait-like keys at metadata root.

Top-level keys observed: `hat`, `body`, `eyes`, `name`, `type`, `image`, `mouth`, `clothes`, `project`, `special`, `earrings`, `mediaType`, `background`.

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
- `type`
- `mouth`
- `clothes`
- `special`
- `earrings`
- `background`

---

## Media layout

- `image` array
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
- Media: `$.image[0]`
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
| asset-001 | `2eeb39204c3d104b40ec56bfd612bb1067fdea45de15f3a8aad9db714d616769634b6f6e6734373133` | `4d616769634b6f6e6734373133` | yes |
| asset-002 | `2eeb39204c3d104b40ec56bfd612bb1067fdea45de15f3a8aad9db714d616769634b6f6e6731313534` | `4d616769634b6f6e6731313534` | yes |
| asset-003 | `2eeb39204c3d104b40ec56bfd612bb1067fdea45de15f3a8aad9db714d616769634b6f6e6734313931` | `4d616769634b6f6e6734313931` | yes |
| asset-004 | `2eeb39204c3d104b40ec56bfd612bb1067fdea45de15f3a8aad9db714d616769634b6f6e6732343535` | `4d616769634b6f6e6732343535` | yes |
| asset-005 | `2eeb39204c3d104b40ec56bfd612bb1067fdea45de15f3a8aad9db714d616769634b6f6e6732363638` | `4d616769634b6f6e6732363638` | yes |
| asset-006 | `2eeb39204c3d104b40ec56bfd612bb1067fdea45de15f3a8aad9db714d616769634b6f6e6731393938` | `4d616769634b6f6e6731393938` | yes |
| asset-007 | `2eeb39204c3d104b40ec56bfd612bb1067fdea45de15f3a8aad9db714d616769634b6f6e6731363333` | `4d616769634b6f6e6731363333` | yes |
| asset-008 | `2eeb39204c3d104b40ec56bfd612bb1067fdea45de15f3a8aad9db714d616769634b6f6e6730363737` | `4d616769634b6f6e6730363737` | yes |
| asset-009 | `2eeb39204c3d104b40ec56bfd612bb1067fdea45de15f3a8aad9db714d616769634b6f6e6733323831` | `4d616769634b6f6e6733323831` | yes |
| asset-010 | `2eeb39204c3d104b40ec56bfd612bb1067fdea45de15f3a8aad9db714d616769634b6f6e6734343433` | `4d616769634b6f6e6734343433` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 6 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
