# Findings: Clay Nation

Phase 1 metadata discovery — 2026-06-08

**Policy ID:** `40fa2aa67258b4ce7b5782f74831d46a84c59a0ff0c28262fab21728`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/clay-nation/`

---

## Metadata summary

Clay Nation uses CIP-25v1 flat root fields: visual traits (`body`, `eyes`, `brows`, `mouth`, `clothes`, `background`, `accessories`, `hats and hair`) plus `Project` and `name`. No nested `attributes` object.

---

## Detected standards

| Signal | Finding |
|--------|---------|
| Blockfrost standard | CIP25v1 |
| Metadata root | `onchain_metadata` (Blockfrost asset response field) |
| Sample source | Blockfrost mainnet, unmodified JSON |

---

## Trait layout

Flat root trait keys (PFP-style). Keys include spaces (`hats and hair`). Values are plain strings.

---

## Media layout

`image` → IPFS

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

`Project` string identifies sub-brand (Clay Mates)

---

## Expected registry mappings

One `trait_mappings` entry per root trait key; `media_mappings.image` → `$.image`

---

## Potential indexing issues

Non-standard trait root (not `attributes`); trait keys with spaces

---

## Sample inventory

| Label | Asset unit | Asset name (hex) |
|-------|------------|------------------|
| asset-001 | `40fa2aa67258b4ce7b5782f74831d46a84c59a0ff0c28262fab21728436c61794e6174696f6e37383939` | `436c61794e6174696f6e37383939` |
| asset-002 | `40fa2aa67258b4ce7b5782f74831d46a84c59a0ff0c28262fab21728436c61794e6174696f6e38343838` | `436c61794e6174696f6e38343838` |
| asset-003 | `40fa2aa67258b4ce7b5782f74831d46a84c59a0ff0c28262fab21728436c61794e6174696f6e33323332` | `436c61794e6174696f6e33323332` |
| asset-004 | `40fa2aa67258b4ce7b5782f74831d46a84c59a0ff0c28262fab21728436c61794e6174696f6e37333036` | `436c61794e6174696f6e37333036` |
| asset-005 | `40fa2aa67258b4ce7b5782f74831d46a84c59a0ff0c28262fab21728436c61794e6174696f6e35343638` | `436c61794e6174696f6e35343638` |
| asset-006 | `40fa2aa67258b4ce7b5782f74831d46a84c59a0ff0c28262fab21728436c61794e6174696f6e35383538` | `436c61794e6174696f6e35383538` |
| asset-007 | `40fa2aa67258b4ce7b5782f74831d46a84c59a0ff0c28262fab21728436c61794e6174696f6e39313933` | `436c61794e6174696f6e39313933` |
| asset-008 | `40fa2aa67258b4ce7b5782f74831d46a84c59a0ff0c28262fab21728436c61794e6174696f6e33333031` | `436c61794e6174696f6e33333031` |
| asset-009 | `40fa2aa67258b4ce7b5782f74831d46a84c59a0ff0c28262fab21728436c61794e6174696f6e39373037` | `436c61794e6174696f6e39373037` |
| asset-010 | `40fa2aa67258b4ce7b5782f74831d46a84c59a0ff0c28262fab21728436c61794e6174696f6e37333136` | `436c61794e6174696f6e37333136` |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 4 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
