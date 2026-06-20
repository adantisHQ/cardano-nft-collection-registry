# Open Issues

Tracked gaps, edge cases, and operational policies from Phase 1 + Phase 2 validation (30 audited collections).

**Rules:** No schema change unless the same D-class insufficiency appears in **2+ independent collections**. Parser changes follow the same bar unless fixing a confirmed bug.

Related: [schema-gap-log.md](schema-gap-log.md) · [definition-readiness.md](definition-readiness.md) · [end-to-end-validation.md](end-to-end-validation.md)

---

## GAP-002 — CIP-68 hex-encoded trait payload

| Field | Detail |
|-------|--------|
| **Description** | Trait data lives in a single hex-encoded `traits` string (and related encoded `type` field) on CIP-68 reference-token metadata. Values are not JSON objects; generic path extraction returns opaque strings. |
| **Affected collections** | `spacebudz` |
| **Severity** | **High** (blocked trait grid for one major collection) |
| **Schema change required?** | **Maybe** — only if a second collection confirms; could remain `normalization_rules` + external decoder |
| **Parser change required?** | **Yes** — dedicated hex decode step or pluggable decoder hook |
| **Manual registry definition enough?** | **Partial** — definition maps raw encoded fields; decoded PFP traits need consumer-side or future parser support |
| **Recommended next action** | Keep `definition_status: partial`. Do not implement preemptively. Re-evaluate if Phase 3 finds a second CIP-68 hex-trait collection. ADAntis may use SpaceBudz-specific decoder until then. |

---

## EDGE-001 — `traits[]` as `"Key: Value"` strings

| Field | Detail |
|-------|--------|
| **Description** | Collab drop stores visual traits as a string array (`"Background: Purple"`, `"Eyes: Normal"`) instead of an object or `attributes` map. |
| **Affected collections** | `clay-nation-good-charlotte` |
| **Severity** | **Medium** (traits present but not decomposed) |
| **Schema change required?** | **No** — single collection; not D-class |
| **Parser change required?** | **Optional** — `normalization_rules` or new strategy only if 2+ collections confirm |
| **Manual registry definition enough?** | **Yes (partial)** — definition maps `$.traits` as array trait; per-trait filters need post-processing |
| **Recommended next action** | Document in definition `indexing_notes`. Consumer splits on first `:`. Monitor Phase 3 for repeats before new extraction strategy. |

---

## EDGE-002 — Split IPFS `image` array joining

| Field | Detail |
|-------|--------|
| **Description** | `image` is a two-element array with IPFS CID split across strings (`["ipfs://Qm...", "ZmC6u/wenno1293.png"]`). Mapping `image[0]` alone yields incomplete URI. |
| **Affected collections** | `deprecated-jungle-wenno-cat` |
| **Severity** | **Low–Medium** (media display broken without join) |
| **Schema change required?** | **No** |
| **Parser change required?** | **Optional** — array join transform in media resolution or `normalization_rules` |
| **Manual registry definition enough?** | **Partial** — definition maps `$.image[0]` with warning in `indexing_notes` |
| **Recommended next action** | ADAntis media layer joins array when `image` is string[]. Controlled test collection; do not generalize until second instance found. |

---

## Book.io media / document normalization

| Field | Detail |
|-------|--------|
| **Description** | Book.io policies use document stack: `data` (primary IPFS URI), `sha256`, `files[]`, variable `attributes` keys (Gold, Stroke, Swirls, Dots, Black_Knot), `extraAttributes`, split `description` arrays. Whitepaper lacks on-chain license text. |
| **Affected collections** | `book-io-gutenberg-bible`, `book-io-wizard-tim-audiobook`, `book-io-whitepaper-2` |
| **Severity** | **Medium** (definitions work; optional-trait warnings on variable keys) |
| **Schema change required?** | **No** |
| **Parser change required?** | **No** — optional trait paths sufficient |
| **Manual registry definition enough?** | **Yes** — `partial` definitions with multiple optional attribute paths; registry-level `license_info` for off-chain terms |
| **Recommended next action** | Obtain Book.io terms URL from creator for `book-io-whitepaper-2` license mapping. Accept sparse attribute warnings in normalization reports. |

---

## Epoch Genesis v2 versioned metadata layout

| Field | Detail |
|-------|--------|
| **Description** | Single policy mixes `music_metadata_version: v1` (flat root music fields) and `v2` (nested `release` object). Same semantic fields, different paths. |
| **Affected collections** | `epoch-genesis-v2` |
| **Severity** | **Medium** (handled; requires careful mappings) |
| **Schema change required?** | **No** |
| **Parser change required?** | **No** — `first_existing_path` per field works today |
| **Manual registry definition enough?** | **Yes** — `partial` definition with dual paths; `indexing_notes` document version drift |
| **Recommended next action** | No action before Phase 3 unless another music policy repeats pattern (then document as playbook, not schema change). |

---

## Cornucopias ecosystem scoping

| Field | Detail |
|-------|--------|
| **Description** | Cornucopias spans multiple policies: land zones (Phase 1), GTI vehicles (Phase 2), and other game assets not yet audited. Definitions are per-policy; no registry-level ecosystem grouping schema. |
| **Affected collections** | `cornucopias-land-zones-1-3`, `cornucopias-gti-javelin-2022` |
| **Severity** | **Low** (operational / UX, not parsing failure) |
| **Schema change required?** | **No** — `indexing_notes` + ADAntis grouping sufficient for now |
| **Parser change required?** | **No** |
| **Manual registry definition enough?** | **Yes** — both policies normalize with 0 failures |
| **Recommended next action** | ADAntis groups by brand in UI. Phase 3 may add related policies; defer `collection_group` schema until 3+ policies need linked navigation. |

---

## Unknown / deprecated collection policy

| Field | Detail |
|-------|--------|
| **Description** | TapTools CSV contains ~34 `Unknown` rows (scam risk, null names) and deprecated labels (e.g. `[DEPRECATED] Jungle Wenno Cat`). Phase 2 used one **named** deprecated row as controlled partial-metadata test — not an `Unknown` row. |
| **Affected collections** | CSV rows not onboarded; `deprecated-jungle-wenno-cat` as controlled sample |
| **Severity** | **Medium** (ops / trust, not technical blocker) |
| **Schema change required?** | **No** |
| **Parser change required?** | **No** |
| **Manual registry definition enough?** | **N/A for Unknown** — block until identified; deprecated only if deliberately selected |
| **Recommended next action** | **Active:** Auto-exclude TapTools `Unknown`, blank, 404, and invalid names with `triage_status: "exclude"`, `reason_code: "unknown_or_broken_collection"` — not Phase 3, not `include_later`. See [top-100-triage-policy.md](./top-100-triage-policy.md). Named deprecated rows (e.g. `[DEPRECATED] Jungle Wenno Cat`) remain eligible when explicitly chosen. Suspicious mcap uses separate triage codes. Manual reintroduction only after user verifies real collection name. |

---

## Issue summary matrix

| ID | Schema? | Parser? | Definition enough? | Blocks scale? |
|----|---------|---------|-------------------|---------------|
| GAP-002 | Maybe | Yes | Partial | Single collection only |
| EDGE-001 | No | Optional | Partial | No |
| EDGE-002 | No | Optional | Partial | No |
| Book.io | No | No | Yes | No |
| Epoch Genesis v2 | No | No | Yes | No |
| Cornucopias scope | No | No | Yes | No |
| Unknown/deprecated policy | No | No | N/A | Ops gate for Phase 3 |

---

## Resolved (reference)

| ID | Title | Resolution |
|----|-------|------------|
| GAP-001 | Array-of-single-key-object field groups | `array_singleton_object` extraction strategy (2026-06-08) |
