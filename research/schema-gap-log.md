# Schema Gap Log

Track **schema insufficiencies** discovered during real-collection validation.

## Rules

1. **Do not change the schema during active audit phases.**
2. Only log a gap here when failures are classified **D — Schema insufficient**.
3. **Do not propose schema changes** unless at least **two real audited collections** expose the **same** insufficiency.
4. Parser bugs (**B**) and mapping errors (**C**) do not belong in this log.

## Status values

| Status | Meaning |
|--------|---------|
| `observed` | Seen in one collection; waiting for second confirmation |
| `confirmed` | Seen in 2+ collections; candidate for schema change |
| `deferred` | Acknowledged; handle via notes/manual process for now |
| `resolved` | Addressed in a future schema version |

---

## Gap entries

### GAP-001: Array-of-single-key-object field groups

- **Status:** resolved
- **First observed:** the-mallard-order (Phase 1, 2026-06-08)
- **Confirmed by:** the-mallard-order, pavia
- **Description:** Trait and parcel fields are stored as JSON arrays where each element is a one-key object (e.g. `Attributes: [{Accessories: "None"}, ...]` or `-----Land Sale 1-----: [{type:"Land"},{x:"-71"},{y:"-82"}]`). Fixed array indices in `source_paths` were fragile when order changed.
- **Example collections:** the-mallard-order, pavia
- **Resolution (2026-06-08):** Added optional `extraction` object on trait mappings with `array_singleton_object` strategy and `extractTraitValue()` in core parser. See `docs/trait-mappings.md` and `examples/collection.extraction-strategies.json`.
- **Related audits:** research/audits/the-mallard-order.audit.md, research/audits/pavia.audit.md

---

## Observed gaps

### GAP-002: CIP-68 hex-encoded trait payload (single field)

- **Status:** observed
- **First observed:** spacebudz (Phase 1, 2026-06-08)
- **Confirmed by:** _pending second collection_ (Phase 2 negative: chilled-kongs-vox-avatar, epoch-genesis-v2 are CIP25v1)
- **Description:** Trait data lives in a single hex-encoded `traits` string (CIP-68 reference metadata), not extractable via JSON paths without custom decoding rules beyond generic normalization.
- **Example collections:** spacebudz
- **Current workaround:** `normalization_rules` + external decoder; classify as edge case (E) until second collection confirms
- **Related audits:** research/audits/spacebudz.audit.md

---

## Confirmed gaps (2+ collections)

_None open._ GAP-001 resolved.

---

## D-class issue summary (Phase 1)

| Classification | Count (across 10 audits) | Notes |
|----------------|--------------------------|-------|
| **A** — Missing data | Dominant | Socials, license, royalties rarely on-chain |
| **B** — Parser issue | 0 | |
| **C** — Mapping issue | Several | Flat root traits, nested socials, bare IPFS CIDs |
| **D** — Schema insufficient | GAP-001 resolved | Use `extraction.strategy: array_singleton_object` |
| **E** — Rare edge case | spacebudz hex traits; deadpxlz properties array | GAP-002 remains observed-only |

**GAP-002 (CIP-68 hex traits) not addressed.** Phase 2 (2026-06-08) did not confirm a second collection.

---

## D-class issue summary (Phase 2)

| Classification | Count (across 20 audits) | Notes |
|----------------|--------------------------|-------|
| **A** — Missing data | Dominant | License/royalty rarely on-chain |
| **B** — Parser issue | 0 | |
| **C** — Mapping issue | Several | Flat root traits, nested socials, split IPFS images, dual music paths |
| **D** — Schema insufficient | 1 flag (introverts-membership-card) | Covered by resolved GAP-001 |
| **E** — Rare edge case | clay-nation-good-charlotte traits string array | Single collection |

**No new D-class entries added in Phase 2.**

### Phase 2 observed patterns (not schema gaps)

| Pattern | Collection(s) | Handling |
|---------|---------------|----------|
| Traits as `"Key: Value"` string array | clay-nation-good-charlotte | Parse in normalization (E) |
| Dual music metadata v1/v2 | epoch-genesis-v2 | `first_existing_path` |
| Split IPFS `image` array | deprecated-jungle-wenno-cat | Join/normalize URI (C) |
| Book.io `data` + `extraAttributes` | book-io-* | Direct nested paths |

See [findings/phase-2-discovery-summary.md](findings/phase-2-discovery-summary.md).

---

## D-class issue summary (Phase 3A)

| Classification | Count (across 23 audits) | Notes |
|----------------|--------------------------|-------|
| **A** — Missing data | Dominant | Socials, license, royalties rarely on-chain |
| **B** — Parser issue | 0 | |
| **C** — Mapping issue | Several | Flat root traits, nested sections, sparse pass metadata |
| **D** — Schema insufficient | 1 flag (hosky-c-ash-grab-nft) | Covered by resolved GAP-001 (`array_singleton_object`) |
| **E** — Rare edge case | cardano-warriors traits string array | Single collection in 3A batch |

**No new D-class entries added in Phase 3A.** No repeated schema insufficiency across 2+ collections.

See [findings/phase-3a-discovery-summary.md](findings/phase-3a-discovery-summary.md).

---

## Deferred / resolved

| ID | Title | Status |
|----|-------|--------|
| GAP-001 | Array-of-single-key-object field groups | resolved |
