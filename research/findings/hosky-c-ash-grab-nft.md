# Findings: HOSKY C(ash grab)NFT

Phase 3A metadata discovery — 2026-06-09

**Policy ID:** `a5bb0e5bb275a573d744a021f9b3bff73595468e002755b447e01559`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/hosky-c-ash-grab-nft/`  
**Metadata-bearing samples:** 100%

---

## Metadata summary

Phase 3A Top-100 include_now (TapTools rank 20). Type: utility. Discovery only — no final definition in this pass.. Blockfrost standard signal: **CIP25v1**. Primary trait layout: **array_singleton_object** — `-----Traits-----` array of single-key objects.

Top-level keys observed: `name`, `image`, `-----Traits-----`, `-----Product Information-----`.

---

## Metadata standard

| Signal | Finding |
|--------|---------|
| Blockfrost `onchain_metadata_standard` | CIP25v1 |
| Layout class | array_singleton_object |
| Metadata root | `onchain_metadata` (Blockfrost asset response) |

---

## Trait layout

`-----Traits-----` array of single-key objects

- `Background`
- `Fur`
- `Eyes`
- `Ear Decoration`
- `Neck`
- `Mouth`
- `Frame`

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
| Website | `https://hosky.io` |

---

## License and royalties

| Area | Finding |
|------|---------|
| -----Product Information-----.1.Copyright | HOSKY IO; all rights reserved |

| Royalties | Not present in on-chain metadata samples |

---

## Custom fields

- `-----Traits-----` (nested object or section)
- `-----Product Information-----` (nested object or section)

---

## Expected registry mappings

- Trait extraction: Use `extraction.strategy: array_singleton_object` (GAP-001 resolved in Phase 1)
- Media: `$.image` standard mapping
- Identity: `$.name` where present

---

## Indexing caveats

- Array-of-single-key-object sections require stable ordering or `array_singleton_object` extraction
- Raw samples are full Blockfrost asset responses; parsers must use `onchain_metadata` subtree

---

## Extraction strategy assessment

| Question | Answer |
|----------|--------|
| Are Phase 1 extraction strategies sufficient? | **Yes** — use `array_singleton_object` (GAP-001) |
| Recommended strategy | Use `extraction.strategy: array_singleton_object` |

---

## Sample inventory

| Label | Asset unit | Asset name (hex) | Metadata |
|-------|------------|------------------|----------|
| asset-001 | `a5bb0e5bb275a573d744a021f9b3bff73595468e002755b447e01559484f534b594361736847726162303030303030303031` | `484f534b594361736847726162303030303030303031` | yes |
| asset-002 | `a5bb0e5bb275a573d744a021f9b3bff73595468e002755b447e01559484f534b594361736847726162303030303030303032` | `484f534b594361736847726162303030303030303032` | yes |
| asset-003 | `a5bb0e5bb275a573d744a021f9b3bff73595468e002755b447e01559484f534b594361736847726162303030303030303033` | `484f534b594361736847726162303030303030303033` | yes |
| asset-004 | `a5bb0e5bb275a573d744a021f9b3bff73595468e002755b447e01559484f534b594361736847726162303030303030303230` | `484f534b594361736847726162303030303030303230` | yes |
| asset-005 | `a5bb0e5bb275a573d744a021f9b3bff73595468e002755b447e01559484f534b594361736847726162303030303030303339` | `484f534b594361736847726162303030303030303339` | yes |
| asset-006 | `a5bb0e5bb275a573d744a021f9b3bff73595468e002755b447e01559484f534b594361736847726162303030303030303538` | `484f534b594361736847726162303030303030303538` | yes |
| asset-007 | `a5bb0e5bb275a573d744a021f9b3bff73595468e002755b447e01559484f534b594361736847726162303030303030303736` | `484f534b594361736847726162303030303030303736` | yes |
| asset-008 | `a5bb0e5bb275a573d744a021f9b3bff73595468e002755b447e01559484f534b594361736847726162303030303030303935` | `484f534b594361736847726162303030303030303935` | yes |
| asset-009 | `a5bb0e5bb275a573d744a021f9b3bff73595468e002755b447e01559484f534b594361736847726162303030303030313133` | `484f534b594361736847726162303030303030313133` | yes |
| asset-010 | `a5bb0e5bb275a573d744a021f9b3bff73595468e002755b447e01559484f534b594361736847726162303030303030313332` | `484f534b594361736847726162303030303030313332` | yes |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 5 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
