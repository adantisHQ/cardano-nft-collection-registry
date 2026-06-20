# Findings: Boss Cat Rocket Parts

Phase 2 metadata discovery — 2026-06-08

**Policy ID:** `761ed110b4040e153ffc20bd2203f2e7d57d610a0cf0eae6167e574d`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/boss-cat-rocket-parts/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 2 multi-policy: companion component policy paired with Phase 1 Boss Cat Rocket Club; tests modular part metadata vs PFP body.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **root_flat_keys** — Flat trait-like keys at metadata root.

Top-level keys observed: `Type`, `name`, `Color`, `Model`, `image`.

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

- `Type`
- `Color`
- `Model`

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
| asset-001 | `761ed110b4040e153ffc20bd2203f2e7d57d610a0cf0eae6167e574d426f7373436174526f636b65745061727473313034` | `426f7373436174526f636b65745061727473313034` | yes |
| asset-002 | `761ed110b4040e153ffc20bd2203f2e7d57d610a0cf0eae6167e574d426f7373436174526f636b65745061727473313035` | `426f7373436174526f636b65745061727473313035` | yes |
| asset-003 | `761ed110b4040e153ffc20bd2203f2e7d57d610a0cf0eae6167e574d426f7373436174526f636b657450617274733836` | `426f7373436174526f636b657450617274733836` | yes |
| asset-004 | `761ed110b4040e153ffc20bd2203f2e7d57d610a0cf0eae6167e574d426f7373436174526f636b65745061727473323239` | `426f7373436174526f636b65745061727473323239` | yes |
| asset-005 | `761ed110b4040e153ffc20bd2203f2e7d57d610a0cf0eae6167e574d426f7373436174526f636b65745061727473343538` | `426f7373436174526f636b65745061727473343538` | yes |
| asset-006 | `761ed110b4040e153ffc20bd2203f2e7d57d610a0cf0eae6167e574d426f7373436174526f636b65745061727473363335` | `426f7373436174526f636b65745061727473363335` | yes |
| asset-007 | `761ed110b4040e153ffc20bd2203f2e7d57d610a0cf0eae6167e574d426f7373436174526f636b6574506172747331303135` | `426f7373436174526f636b6574506172747331303135` | yes |
| asset-008 | `761ed110b4040e153ffc20bd2203f2e7d57d610a0cf0eae6167e574d426f7373436174526f636b6574506172747331313038` | `426f7373436174526f636b6574506172747331313038` | yes |
| asset-009 | `761ed110b4040e153ffc20bd2203f2e7d57d610a0cf0eae6167e574d426f7373436174526f636b6574506172747331313938` | `426f7373436174526f636b6574506172747331313938` | yes |
| asset-010 | `761ed110b4040e153ffc20bd2203f2e7d57d610a0cf0eae6167e574d426f7373436174526f636b6574506172747331333230` | `426f7373436174526f636b6574506172747331333230` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 5 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
