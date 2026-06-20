# Findings: SpaceBudz

Phase 1 metadata discovery — 2026-06-08

**Policy ID:** `4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/spacebudz/`

---

## Metadata summary

SpaceBudz Phase 1 samples are CIP-68 reference-token metadata with a flat root: `name`, hex-encoded `traits` string, hex `type`, IPFS `image`, and `sha256`. Blockfrost labels `onchain_metadata_standard` as CIP68v1 with `onchain_metadata_extra` CBOR present. Many policy-listed assets (outside this filtered sample) return null on-chain metadata.

---

## Detected standards

| Signal | Finding |
|--------|---------|
| Blockfrost standard | CIP-68v1 (100% of metadata-bearing samples); legacy/null metadata common elsewhere in policy |
| Metadata root | `onchain_metadata` (Blockfrost asset response field) |
| Sample source | Blockfrost mainnet, unmodified JSON |

---

## Trait layout

Single `traits` field holds hex-encoded trait payload (not a JSON object). `type` is also hex-encoded. Requires collection-specific decoding; not CIP-25 `attributes`.

---

## Media layout

`image` → IPFS URI; `sha256` content hash at root

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

CIP-68 extra datum; trait/type hex encoding; policy contains assets with no Blockfrost on-chain metadata

---

## Expected registry mappings

Map `name`, `image`, `sha256`; treat `traits`/`type` via custom normalization rules; set `metadata_layout.primary_standard=cip68`

---

## Potential indexing issues

Hex trait decoding not in base parser (E); null metadata on many assets (A); no per-trait JSON paths (C if expecting attributes object)

---

## Sample inventory

| Label | Asset unit | Asset name (hex) |
|-------|------------|------------------|
| asset-001 | `4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f000de14042756431373830` | `000de14042756431373830` |
| asset-002 | `4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f000de14042756439393632` | `000de14042756439393632` |
| asset-003 | `4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f000de140427564313230` | `000de140427564313230` |
| asset-004 | `4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f000de14042756434393338` | `000de14042756434393338` |
| asset-005 | `4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f000de140427564363530` | `000de140427564363530` |
| asset-006 | `4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f000de14042756433313831` | `000de14042756433313831` |
| asset-007 | `4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f000de14042756433383039` | `000de14042756433383039` |
| asset-008 | `4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f000de14042756431353533` | `000de14042756431353533` |
| asset-009 | `4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f000de140427564323238` | `000de140427564323238` |
| asset-010 | `4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f000de14042756432353334` | `000de14042756432353334` |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 6 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
