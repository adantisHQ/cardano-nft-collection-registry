# Specification Readiness Review

**Date:** 2026-06-09  
**Registry schema version:** `1.0.0`  
**Spec package:** `spec/`  
**Reviewer:** Registry engineering (internal)

---

## Executive summary

| Milestone | Ready? | Assessment |
|-----------|:------:|------------|
| **Public preview** | **Yes** | Spec structure, schema, examples, and launchpad/indexer guidance are sufficient for external review and experimental adoption. |
| **v1.0 stable** | **Partial / not yet** | Core schema and strategies are proven on mainnet samples, but coverage gaps, enrichment tooling, and reference implementation polish remain. |
| **CIP submission** | **No** | No public CIP draft, no community review cycle, no independent reference implementation mandate. |

This review intentionally avoids overclaiming. The registry is **usable today** for ADAntis Launchpad alignment and partner onboarding; it is **not** a finalized industry standard.

---

## Evidence base

| Evidence | Status |
|----------|--------|
| 101 ADAntis mainnet collections onboarded (operational) | Confirmed (bulk onboarding tooling) |
| 50+ collections inspected during registry work | Confirmed (phase discovery / audits) |
| 30+ collection definitions authored | Confirmed (54 files in `registry/mainnet/collections/`) |
| Raw metadata normalization tested | Confirmed (core package tests + CLI inspect) |
| Dominant CIP-25 layouts covered | Confirmed |
| Five extraction strategies validated on mainnet | Confirmed |
| Public normative spec (`spec/`) | **New** — this deliverable |
| JSON Schema as machine-readable spec | Present (`schemas/*.schema.json`) |

---

## Public preview readiness — **YES**

### Strengths

- Clear scope: collection-level interpretation, not per-NFT storage
- JSON Schema validation tooling exists (`validate`, `validate-all`)
- Normative MUST/SHOULD/MAY language in `spec/`
- Launchpad and indexer guidance documents included
- Six validated spec examples covering major layout patterns
- Explicit disclaimers on verification, trust badges, and royalty enforcement
- Versioning rules documented

### Acceptable preview limitations

- Sparse social/link enrichment on many live collections (documented in enrichment roadmap)
- CIP-68 support is partial for some collections (e.g. SpaceBudz)
- No standalone hosted spec website (Markdown in repo is sufficient for preview)

### Preview recommendation

Publish `spec/README.md` as entry point for external creators and launchpads. Label as **“Public preview — not a CIP”**.

---

## v1.0 stable readiness — **NOT YET**

### Blockers and gaps

| Gap | Impact | Mitigation path |
|-----|--------|-----------------|
| Incomplete Top-100 registry definitions vs ADAntis onboarded count | Operational drift | Continue phase authoring; link policy IDs to definitions |
| Metadata enrichment pipeline immature | Sparse `social_mappings` / banners | `docs/mainnet-enrichment-roadmap.md` |
| CIP-68 trait decoding incomplete | `partial` definitions persist | Dedicated CIP-68 strategy work + tests |
| No published JSON Schema URL on stable CDN | External tooling friction | Host schema at `registry.adantis.io` (planned) |
| Category enum not closed in schema | Consistent UI grouping | Optional MINOR schema tightening |
| Limited golden fixtures for all five strategies | Regression risk | Expand `packages/core` test fixtures |
| Spec vs `docs/` duplication | Reader confusion | Cross-link; treat `spec/` as public, `docs/` as internal |

### v1.0 exit criteria (proposed)

- [ ] ≥80% of ADAntis-indexed mainnet collections have `definition_status` of `complete` or justified `partial`
- [ ] Hosted JSON Schema + spec index page
- [ ] Reference indexer documents normalized output contract with test vectors
- [ ] Enrichment pipeline v1 for socials/banners (registry-level)
- [ ] Changelog and migration guide for schema `1.0.0` → future `1.1.0`

---

## CIP submission readiness — **NO**

### Missing for CIP track

| Requirement | Status |
|-------------|--------|
| CIP number and GitHub PR to CIPs repo | Not started |
| Ecosystem stakeholder review | Not started |
| Independent implementations | ADAntis-only reference |
| Security / abuse analysis (link phishing, fake royalties) | Partially documented, not formal |
| Backward compatibility commitment across ecosystem | Documented locally only |
| Reference implementation separated from product | Monorepo includes ADAntis-specific onboarding |

### Recommendation

Do **not** submit as CIP until:

1. Public preview feedback from ≥2 external launchpads or indexers
2. Stable v1.0 schema with hosted artifacts
3. Clear boundary from ADAntis product APIs vs open registry format

---

## Schema validation status

Machine-readable schema files:

- `schemas/collection-definition.schema.json`
- `schemas/trait-mapping.schema.json`
- `schemas/sourced-value.schema.json`

Spec examples under `spec/examples/` **MUST** pass `validate` after this deliverable (see CI / local test run).

Production registry files under `registry/mainnet/collections/` are validated via:

```bash
pnpm validate-all --network mainnet
```

---

## Risk register (honest)

| Risk | Severity | Notes |
|------|----------|-------|
| Legacy metadata diversity | High | Five strategies cover observed mainnet patterns; edge cases remain |
| Link phishing | Medium | Spec disclaims verification; consumers must handle UX |
| Royalty misinformation | Medium | Informational fields only |
| Schema drift vs ADAntis API | Medium | Bulk POST uses subset of fields; definitions are richer |
| Over-promising completeness | High | `definition_status` discipline required |

---

## Conclusion

| Question | Answer |
|----------|--------|
| Is the registry ready for **public preview**? | **Yes** — with preview labeling and known gaps documented. |
| Is it ready for **v1.0 stable**? | **Not yet** — operational and enrichment work remains. |
| Is it ready for **CIP submission**? | **No** — intentional deferral. |

**Next recommended steps:**

1. Share `spec/` with ADAntis Launchpad team and one external creator for feedback.
2. Continue mainnet definition authoring for onboarded collections.
3. Ship metadata enrichment v1 (see enrichment roadmap).
4. Re-run this review when v1.0 exit criteria are met.
