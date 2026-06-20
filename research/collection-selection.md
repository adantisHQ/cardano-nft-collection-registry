# Collection Selection

Progressive validation plan for the Cardano NFT Collection Definition Registry schema.

Start with **known, high-signal collections**. Increase complexity and volume only after the base schema proves stable.

## Principles

- **Do not start with pathological collections** — stabilize on normal collections first
- Prefer real production collections with accessible metadata
- A collection that cannot be parsed automatically **does not invalidate the registry**
- Represent difficult collections with `definition_status: "partial"` or `"broken"` plus `indexing_notes`
- The registry supports both clear parse rules **and** creator-provided definitions for inconsistent metadata
- **Do not change the schema** during active audit phases
- Log schema gaps (classification D) only after the same insufficiency appears in **2+ collections**

---

## Progressive phases

| Phase | Scope | Goal |
|-------|-------|------|
| **1** | Top 10 known collections | Confirm schema represents normal/high-signal collections |
| **2** | Next 10–20 collections | Find common variations (multi-policy, custom layouts, missing fields) |
| **3** | 50–100 collections | Determine robustness for broad registry usage |
| **4** | Random sampling | Estimate coverage across ~12,800+ collections |

Phase 5 (1000+ bulk validation) begins only after schema stabilization — not part of the current plan.

---

## Phase 1 — Top 10 known collections

**Target:** 10 collections  
**Input file:** `research/phase-1-top-10.json` (populate from shortlist)  
**Recommended candidates:** [phase-1-candidates.md](phase-1-candidates.md)  
**Dataset analysis:** [dataset-analysis.md](dataset-analysis.md)  
**Status:** Awaiting manual confirmation of Phase 1 list

### Goal

Confirm the current Collection Definition Record can represent normal, high-signal Cardano NFT collections before tackling edge cases.

### Selection criteria

- Well-known collections with verified policy IDs
- Accessible sample metadata (manual collection only — no Blockfrost yet)
- Mix of CIP-25 dominant patterns acceptable, but prioritize **clean, representative** collections
- Avoid deliberately broken or pathological collections in Phase 1

### Input format

```json
[
  {
    "name": "Example Collection",
    "collection_id": "example-collection",
    "policy_ids": ["<56-char-hex>"],
    "sample_assets": ["asset-name-or-id-1", "asset-name-or-id-2"],
    "notes": ""
  }
]
```

### Prepare scaffolds

After populating `research/phase-1-top-10.json`:

```bash
pnpm --filter @cardano-nft-collection-registry/cli start prepare-phase research/phase-1-top-10.json
```

This creates for each collection:

- `research/audits/<collection_id>.audit.md` (prefilled)
- `research/raw-samples/<collection_id>/asset-00N.json` placeholders
- `registry/collections/<collection_id>.json` placeholder definition (`definition_status: "partial"`)

### Phase 1 tracking

Confirmed selections will be tracked here after review of [phase-1-candidates.md](phase-1-candidates.md).

| # | collection_id | Name | Primary standard | Why selected | Audit status |
|---|---------------|------|------------------|--------------|--------------|
| — | _pending user confirmation_ | | | | pending |

**Phase 1 gate:** All 10 audits scored with `schema_fit` of `fits` or `fits_with_notes` before Phase 2.

---

## Phase 2 — Next 10–20 collections

**Target:** 10–20 collections  
**Recommended candidates:** [phase-1-candidates.md](phase-1-candidates.md) (Phase 2 section)  
**Status:** Blocked until Phase 1 complete

### Goal

Surface **common variations**, not worst-case pathology:

- Multi-policy collections
- Custom metadata layouts
- Different trait locations
- Missing socials
- Missing license data
- Different media patterns

Still avoid leading with unrepresentable broken collections. Use `definition_status: "broken"` when needed.

---

## Phase 3 — 50–100 collections

**Target:** 50–100 collections  
**Recommended candidates:** [phase-1-candidates.md](phase-1-candidates.md) (Phase 3 section)  
**Triage policy:** [top-100-triage-policy.md](top-100-triage-policy.md)  
**Status:** Blocked until Phase 2 complete

### Goal

Determine whether the schema is robust enough for broad registry usage across standards, sizes, and metadata quality levels.

### Automatic exclusions (Top-100 review)

Before Phase 3 selection, apply [top-100-triage-policy.md](top-100-triage-policy.md):

- **`Unknown`**, **`404 - Page Not Found`**, **`Page Not Found`**, **`invalid`**, blank names, and other non-identifying labels → `triage_status: "exclude"`, `reason_code: "unknown_or_broken_collection"`
- **Not** Phase 3 candidates; **not** `include_later`
- ~34 TapTools `Unknown` rows + ~2 broken label rows are excluded automatically (~36 total)
- Manual reintroduction only when a user verifies the policy as a real named collection

---

## Phase 4 — Random sampling

**Target:** Sample from full collection universe (~12,800+ collections)  
**Status:** Blocked until Phase 3 complete

### Goal

Estimate real-world coverage and failure rates. Random sampling validates generalizability — not individual collection correctness.

Scaffold creation may be automated; audits and definitions remain human-reviewed.

---

## Handling unparseable collections

When automatic parsing fails:

1. Set `definition_status: "partial"` or `"broken"`
2. Document gaps in `indexing_notes` with severity
3. Use explicit registry values where metadata is absent
4. Classify failures honestly (A–E); do not treat as schema invalidation

The registry must support **creator-provided definitions** for inconsistent metadata.

---

## Exclusion criteria (current phases)

Defer or exclude collections when:

- No sample metadata can be obtained manually
- Policy ID cannot be verified
- Duplicate policy mapping to an active definition
- Audit requires live chain crawling (out of scope until configured)
- **Top-100 triage:** name is `Unknown`, blank, 404, `invalid`, or otherwise non-identifying → [top-100-triage-policy.md](top-100-triage-policy.md) (`exclude` / `unknown_or_broken_collection`; not `include_later`)

---

## Related

- [phase-input.md](phase-input.md) — phase JSON file format
- [validation-methodology.md](validation-methodology.md) — audit process and scoring
- [schema-gap-log.md](schema-gap-log.md) — cross-collection schema gaps
