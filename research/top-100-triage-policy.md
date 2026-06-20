# Top-100 Triage Policy

**Date:** 2026-06-08  
**Applies to:** Phase 3 (~50–100 collection) selection from TapTools CSV and similar ranked lists  
**Status:** Active — automatic exclusion before Phase 3 onboarding

---

## Rule

Collections whose TapTools (or source) **name does not identify a real collection** must be **automatically excluded** from Phase 3 onboarding. They must **not** appear in `phase-3-selected.json`, `prepare-phase` input, or any automatic `include_later` queue.

### Required triage fields

When a row is excluded by this rule, record:

```json
{
  "triage_status": "exclude",
  "reason_code": "unknown_or_broken_collection"
}
```

Do **not** use `triage_status: "include_later"` for these rows.

---

## Automatic exclusion patterns

A row matches **`unknown_or_broken_collection`** when **any** of the following is true:

| Pattern | Examples |
|---------|----------|
| Name is blank or whitespace-only | `""`, `"   "` |
| Name is exactly `Unknown` (case-insensitive) | `Unknown`, `unknown` |
| Name contains HTTP-style error labels | `404 - Page Not Found`, `Page Not Found` |
| Name is exactly `invalid` (case-insensitive) | `invalid`, `Invalid` |
| Name matches broken/error placeholder regex | `/404\|page not found\|invalid\|not found/i` (substring) |
| Policy ID is not valid 56-char hex | Truncated or malformed `policy_id` (data error row) |

### What this rule does **not** exclude

These remain eligible for Phase 3 review (may use other triage codes):

- **Named deprecated collections** — e.g. `[DEPRECATED] Jungle Wenno Cat` (Phase 2 used one as a controlled partial-metadata test)
- **Suspicious metrics** with a **real name** — inflated `mcap`, low sales vs owners (`reason_code` would differ, e.g. `suspicious_metrics`)
- **Utility/token-like named collections** — e.g. `spacecoins`, `CCVault.io`
- **Lower-signal but named collections** — any row with a human-identifiable collection title

---

## Manual reintroduction (exception)

If a user **later manually identifies** an excluded policy as a real collection:

1. Assign a verified `collection_id` and display name (not `Unknown`)
2. Add the row to a phase input file with `triage_status: "include"` and manual notes
3. Do **not** remove the original exclusion record from triage logs (audit trail)

Automatic Top-100 onboarding must never re-include excluded rows without this manual step.

---

## Triage status vocabulary

| `triage_status` | Meaning | Phase 3 |
|-----------------|---------|---------|
| `include` | Named, verified candidate | Eligible |
| `exclude` | Do not onboard automatically | **Blocked** |
| `include_later` | Defer for other reasons (ecosystem dedup, awaiting samples, etc.) | Not now — **never use for unknown/broken names** |

### Common `reason_code` values

| `reason_code` | When |
|---------------|------|
| `unknown_or_broken_collection` | This policy — unknown/blank/404/invalid names or invalid policy ID |
| `already_onboarded` | Policy in Phase 1/2 baseline (30 collections) |
| `suspicious_metrics` | Named row with bad TapTools mcap/sales signals |
| `utility_token_like` | Named but likely non-NFT trait grid |
| `manual_include` | User override after prior exclusion |

---

## Top-100 review workflow

```
TapTools CSV row
       │
       ▼
apply unknown_or_broken_collection check
       │
       ├─ match ──► triage_status: exclude
       │            reason_code: unknown_or_broken_collection
       │            (stop — not Phase 3, not include_later)
       │
       └─ no match ──► continue taxonomy / diversity / dedup triage
                       │
                       ├─ include ──► phase-3 candidate pool
                       ├─ exclude ──► other reason_code
                       └─ include_later ──► deferred queue (named rows only)
```

### Output artifacts (Phase 3 prep)

| File | Purpose |
|------|---------|
| `research/phase-3-triage.json` | Full triage log (include + exclude + counts) |
| `research/phase-3-selected.json` | **`include` rows only** — input to `prepare-phase` when Phase 3 approved |
| `research/phase-3-excluded.json` | Subset with `exclude` + `unknown_or_broken_collection` for audit |

Implementation reference: `tmp/analyze-csv.mjs` (local CSV pass; not CI-gated).

---

## CSV impact (TapTools top-1000 filter)

From [dataset-analysis.md](./dataset-analysis.md):

| Category | Approx. count |
|----------|--------------:|
| `Unknown` name rows | **34** |
| Broken label rows (`404 - Page Not Found`, invalid policy) | **2** |
| **Auto-excluded by this policy** | **~36** |

These ~36 rows must **not** consume Phase 3 slots. Phase 3 capacity targets **named** problematic, utility, deprecated, and unusual collections instead.

---

## Related policy

- [open-issues.md](./open-issues.md) — Unknown/deprecated collection policy (updated to match this triage)
- [collection-selection.md](./collection-selection.md) — Phase 3 scope
- [phase-input.md](./phase-input.md) — Phase JSON + triage field extensions
