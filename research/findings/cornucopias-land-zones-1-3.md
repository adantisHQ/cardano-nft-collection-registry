# Findings: Cornucopias Land

Phase 1 metadata discovery — 2026-06-08

**Policy ID:** `07b39a8ead0ef1e3054e816a3b6910060beaf2210fded63fb90ce137`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/cornucopias-land-zones-1-3/`

---

## Metadata summary

Cornucopias land claims are rich CIP-25v1: standard fields plus `files[]` (multi-resolution video/image), `attributes.zoneChoices` array, game identifiers, and social URLs nested under `media` object.

---

## Detected standards

| Signal | Finding |
|--------|---------|
| Blockfrost standard | CIP25v1 |
| Metadata root | `onchain_metadata` (Blockfrost asset response field) |
| Sample source | Blockfrost mainnet, unmodified JSON |

---

## Trait layout

`attributes.zoneChoices` (array), plus scalar game fields (`rarity`, `season`, `typeClass`, `gameid`)

---

## Media layout

`image`, `mediaType`, `files[]` with src/name/mediaType/resolution; `media.Website` / `media.Link Tree`

---

## Socials, links, license, royalties

| Area | Finding |
|------|---------|
| Socials | See audit — mostly absent on-chain except where noted in findings |
| Links | Collection-specific; see audit |
| License | Generally absent on-chain (class A) |
| Royalties | Not present in on-chain metadata samples (class A) |

---

## Notable customizations

Land-claim specific IDs (`tag`, `gameid`, `fullName`); socials under `media` not root

---

## Expected registry mappings

files via `media_mappings.files`; zoneChoices as array trait; socials from `$.media.Website`

---

## Potential indexing issues

Social links under `media` object; multi-file media stack

---

## Sample inventory

| Label | Asset unit | Asset name (hex) |
|-------|------------|------------------|
| asset-001 | `07b39a8ead0ef1e3054e816a3b6910060beaf2210fded63fb90ce137434c504331534d3030303233` | `434c504331534d3030303233` |
| asset-002 | `07b39a8ead0ef1e3054e816a3b6910060beaf2210fded63fb90ce137434c504331534d3030303033` | `434c504331534d3030303033` |
| asset-003 | `07b39a8ead0ef1e3054e816a3b6910060beaf2210fded63fb90ce137434c504331534d3030303134` | `434c504331534d3030303134` |
| asset-004 | `07b39a8ead0ef1e3054e816a3b6910060beaf2210fded63fb90ce137434c504331534d3030303230` | `434c504331534d3030303230` |
| asset-005 | `07b39a8ead0ef1e3054e816a3b6910060beaf2210fded63fb90ce137434c504331534d3030303036` | `434c504331534d3030303036` |
| asset-006 | `07b39a8ead0ef1e3054e816a3b6910060beaf2210fded63fb90ce137434c504331534d3030303330` | `434c504331534d3030303330` |
| asset-007 | `07b39a8ead0ef1e3054e816a3b6910060beaf2210fded63fb90ce137434c504331534d3030303639` | `434c504331534d3030303639` |
| asset-008 | `07b39a8ead0ef1e3054e816a3b6910060beaf2210fded63fb90ce137434c504331534d3030303731` | `434c504331534d3030303731` |
| asset-009 | `07b39a8ead0ef1e3054e816a3b6910060beaf2210fded63fb90ce137434c504331534d3030303930` | `434c504331534d3030303930` |
| asset-010 | `07b39a8ead0ef1e3054e816a3b6910060beaf2210fded63fb90ce137434c504331534d3030313134` | `434c504331534d3030313134` |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 3 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
