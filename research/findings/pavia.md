# Findings: Pavia

Phase 1 metadata discovery — 2026-06-08

**Policy ID:** `4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/pavia/`

---

## Metadata summary

Pavia land parcels use CIP-25v1 with decorative section keys (`-----Info-----`, `-----Land Sale 1-----`, `-----Product Information-----`). Coordinates and type live in an array of single-key objects. `image` is sometimes a bare IPFS CID without `ipfs://` prefix.

---

## Detected standards

| Signal | Finding |
|--------|---------|
| Blockfrost standard | CIP25v1 |
| Metadata root | `onchain_metadata` (Blockfrost asset response field) |
| Sample source | Blockfrost mainnet, unmodified JSON |

---

## Trait layout

Land `type`, `x`, `y` at `-----Land Sale 1-----[0..2]` singleton-object entries (stable order in samples).

---

## Media layout

`image` → IPFS CID or URI

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

Banner-style section keys; copyright and website embedded in Product Information array

---

## Expected registry mappings

Use `extraction.strategy: array_singleton_object` on `$.-----Land Sale 1-----` for `type`, `x`, `y`. `link_mappings.website` from Product Information; normalize bare CIDs to IPFS URIs. **GAP-001 resolved** in schema/parser (2026-06-08).

---

## Potential indexing issues

Land section uses keyed singleton-object array (order-independent extraction). Bare CID images; description split across string array.

---

## Sample inventory

| Label | Asset unit | Asset name (hex) |
|-------|------------|------------------|
| asset-001 | `4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d50617669614d696e757337314d696e75733832` | `50617669614d696e757337314d696e75733832` |
| asset-002 | `4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d50617669614d696e75733131344d696e75733131` | `50617669614d696e75733131344d696e75733131` |
| asset-003 | `4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d50617669614d696e757331344d696e75733236` | `50617669614d696e757331344d696e75733236` |
| asset-004 | `4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d50617669614d696e7573313036506c75733736` | `50617669614d696e7573313036506c75733736` |
| asset-005 | `4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d50617669614d696e7573313135506c75733830` | `50617669614d696e7573313135506c75733830` |
| asset-006 | `4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d50617669614d696e757333506c75733537` | `50617669614d696e757333506c75733537` |
| asset-007 | `4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d5061766961506c75733130506c75733630` | `5061766961506c75733130506c75733630` |
| asset-008 | `4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d5061766961506c757334304d696e7573313233` | `5061766961506c757334304d696e7573313233` |
| asset-009 | `4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d5061766961506c757332304d696e75733436` | `5061766961506c757332304d696e75733436` |
| asset-010 | `4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d5061766961506c75733336506c75733637` | `5061766961506c75733336506c75733637` |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 5 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
