# Findings: Boss Cat Rocket Club

Phase 1 metadata discovery — 2026-06-08

**Policy ID:** `c364930bd612f42e14d156e1c5410511e77f64cab8f2367a9df544d1`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/boss-cat-rocket-club/`

---

## Metadata summary

Boss Cat Rocket Club CIP-25v1 PFP metadata: capitalized flat trait keys (`Fur`, `Eyes`, `Mouth`, `Earring`, `Background`) with `name` and IPFS `image`. Policy reference asset may appear without metadata.

---

## Detected standards

| Signal | Finding |
|--------|---------|
| Blockfrost standard | CIP25v1 |
| Metadata root | `onchain_metadata` (Blockfrost asset response field) |
| Sample source | Blockfrost mainnet, unmodified JSON |

---

## Trait layout

Flat root string traits (same pattern as Clay Nation)

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

Companion Rocket Parts policy exists separately (not in this audit)

---

## Expected registry mappings

Per-trait `source_paths` at root; image mapping standard

---

## Potential indexing issues

Policy token sample without metadata; flat root traits

---

## Sample inventory

| Label | Asset unit | Asset name (hex) |
|-------|------------|------------------|
| asset-001 | `c364930bd612f42e14d156e1c5410511e77f64cab8f2367a9df544d1` | — |
| asset-002 | `c364930bd612f42e14d156e1c5410511e77f64cab8f2367a9df544d1426f7373436174526f636b6574436c756231` | `426f7373436174526f636b6574436c756231` |
| asset-003 | `c364930bd612f42e14d156e1c5410511e77f64cab8f2367a9df544d1426f7373436174526f636b6574436c75623130` | `426f7373436174526f636b6574436c75623130` |
| asset-004 | `c364930bd612f42e14d156e1c5410511e77f64cab8f2367a9df544d1426f7373436174526f636b6574436c75623134` | `426f7373436174526f636b6574436c75623134` |
| asset-005 | `c364930bd612f42e14d156e1c5410511e77f64cab8f2367a9df544d1426f7373436174526f636b6574436c75623238` | `426f7373436174526f636b6574436c75623238` |
| asset-006 | `c364930bd612f42e14d156e1c5410511e77f64cab8f2367a9df544d1426f7373436174526f636b6574436c75623432` | `426f7373436174526f636b6574436c75623432` |
| asset-007 | `c364930bd612f42e14d156e1c5410511e77f64cab8f2367a9df544d1426f7373436174526f636b6574436c75623536` | `426f7373436174526f636b6574436c75623536` |
| asset-008 | `c364930bd612f42e14d156e1c5410511e77f64cab8f2367a9df544d1426f7373436174526f636b6574436c75623730` | `426f7373436174526f636b6574436c75623730` |
| asset-009 | `c364930bd612f42e14d156e1c5410511e77f64cab8f2367a9df544d1426f7373436174526f636b6574436c75623834` | `426f7373436174526f636b6574436c75623834` |
| asset-010 | `c364930bd612f42e14d156e1c5410511e77f64cab8f2367a9df544d1426f7373436174526f636b6574436c75623935` | `426f7373436174526f636b6574436c75623935` |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 5 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
