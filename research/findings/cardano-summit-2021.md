# Findings: Cardano Summit 2021

Phase 1 metadata discovery — 2026-06-08

**Policy ID:** `0ad7f7a3281ba7c832344eb267594899147709b708176bc1084979f1`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/cardano-summit-2021/`

---

## Metadata summary

Cardano Summit 2021 badges are minimal CIP-25v1: only `name` and IPFS `image` across all 10 samples. Event commemorative pattern.

---

## Detected standards

| Signal | Finding |
|--------|---------|
| Blockfrost standard | CIP25v1 |
| Metadata root | `onchain_metadata` (Blockfrost asset response field) |
| Sample source | Blockfrost mainnet, unmodified JSON |

---

## Trait layout

None observed

---

## Media layout

`image` only

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

Minimal two-field layout

---

## Expected registry mappings

Identity + image only; no trait_mappings required

---

## Potential indexing issues

No traits, socials, license, or royalties on-chain

---

## Sample inventory

| Label | Asset unit | Asset name (hex) |
|-------|------------|------------------|
| asset-001 | `0ad7f7a3281ba7c832344eb267594899147709b708176bc1084979f131353036363530` | `31353036363530` |
| asset-002 | `0ad7f7a3281ba7c832344eb267594899147709b708176bc1084979f131353037373934` | `31353037373934` |
| asset-003 | `0ad7f7a3281ba7c832344eb267594899147709b708176bc1084979f131353038313435` | `31353038313435` |
| asset-004 | `0ad7f7a3281ba7c832344eb267594899147709b708176bc1084979f131303936343931` | `31303936343931` |
| asset-005 | `0ad7f7a3281ba7c832344eb267594899147709b708176bc1084979f131303533323030` | `31303533323030` |
| asset-006 | `0ad7f7a3281ba7c832344eb267594899147709b708176bc1084979f131303530303239` | `31303530303239` |
| asset-007 | `0ad7f7a3281ba7c832344eb267594899147709b708176bc1084979f131303436383735` | `31303436383735` |
| asset-008 | `0ad7f7a3281ba7c832344eb267594899147709b708176bc1084979f131303839313938` | `31303839313938` |
| asset-009 | `0ad7f7a3281ba7c832344eb267594899147709b708176bc1084979f131303836393033` | `31303836393033` |
| asset-010 | `0ad7f7a3281ba7c832344eb267594899147709b708176bc1084979f131303633323537` | `31303633323537` |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits |
| Failures logged | 4 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
