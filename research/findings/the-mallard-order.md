# Findings: The Mallard Order

Phase 1 metadata discovery — 2026-06-08

**Policy ID:** `901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f4834`  
**Samples:** 10 Blockfrost `GET /assets/{unit}` responses in `research/raw-samples/the-mallard-order/`

---

## Metadata summary

The Mallard Order uses CIP-25v1 with `Attributes` array of single-key objects (stable trait order across samples). Root-level `Twitter`, `Website`, `mediaType`, and IPFS `image`.

---

## Detected standards

| Signal | Finding |
|--------|---------|
| Blockfrost standard | CIP25v1 |
| Metadata root | `onchain_metadata` (Blockfrost asset response field) |
| Sample source | Blockfrost mainnet, unmodified JSON |

---

## Trait layout

`Attributes[n].<TraitName>` — 14 traits in fixed order (Accessories through School of Thought)

---

## Media layout

`image` IPFS; `mediaType`

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

Capitalized `Attributes` key; socials at root

---

## Expected registry mappings

Use `extraction.strategy: array_singleton_object` with `source_path: $.Attributes` and per-trait `key` values. Social mappings from root `Twitter` / `Website`. **GAP-001 resolved** in schema/parser (2026-06-08).

---

## Potential indexing issues

Trait order in `Attributes` must remain keyed lookup (order-independent via `array_singleton_object`). Bare CID images not applicable here.

---

## Sample inventory

| Label | Asset unit | Asset name (hex) |
|-------|------------|------------------|
| asset-001 | `901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f4834` | — |
| asset-002 | `901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f48344d616c6c6172644f7264657232363136` | `4d616c6c6172644f7264657232363136` |
| asset-003 | `901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f48344d616c6c6172644f7264657231313536` | `4d616c6c6172644f7264657231313536` |
| asset-004 | `901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f48344d616c6c6172644f7264657231373131` | `4d616c6c6172644f7264657231373131` |
| asset-005 | `901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f48344d616c6c6172644f7264657234353336` | `4d616c6c6172644f7264657234353336` |
| asset-006 | `901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f48344d616c6c6172644f7264657232373635` | `4d616c6c6172644f7264657232373635` |
| asset-007 | `901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f48344d616c6c6172644f7264657233393738` | `4d616c6c6172644f7264657233393738` |
| asset-008 | `901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f48344d616c6c6172644f7264657236343739` | `4d616c6c6172644f7264657236343739` |
| asset-009 | `901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f48344d616c6c6172644f7264657234343339` | `4d616c6c6172644f7264657234343339` |
| asset-010 | `901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f48344d616c6c6172644f7264657232343137` | `4d616c6c6172644f7264657232343137` |

---

## Schema classification preview

| Metric | Value |
|--------|-------|
| `schema_fit` | fits_with_notes |
| Failures logged | 3 (see audit) |

**Do not modify schema or definitions based on this document alone.** Cross-collection D-class review in `research/schema-gap-log.md`.
