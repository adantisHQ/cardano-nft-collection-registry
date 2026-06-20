# Internal Baseline

**Status:** Validated internal baseline — 2026-06-08  
**Scope:** Phase 1 (10 collections) + Phase 2 (20 collections) = **30 audited collections**  
**Registry definitions:** 30 collection records + 1 schema example (`example-collection.json`)

This document is the consolidated snapshot of what the project is, what it has proven, and what remains unresolved. It does **not** authorize Phase 3 onboarding or public release.

---

## Purpose

The **Cardano NFT Collection Definition Registry** is a collection-level registry that defines **how to interpret, normalize, and present** Cardano NFT metadata across inconsistent CIP-25, CIP-68, custom, legacy, and broken collection layouts.

**This registry does not store every NFT's metadata or traits.** It stores **collection-level interpretation rules** — one definition per collection (or policy group), not one row per asset.

---

## Problem it solves

Cardano NFT metadata is inconsistent:

- CIP-25 flat root traits vs `attributes` objects vs nested sections
- CIP-68 reference tokens with encoded payloads
- Gaming, land, media, membership, and document NFTs with project-specific keys
- Sparse, null, or broken on-chain fields
- Socials, license, and royalties often absent on-chain

Applications currently re-implement heuristics per collection. This project provides a **shared, auditable definition format** and a **single normalizer** so indexers, marketplaces, and wallets can resolve `policy_id → interpretation rules → normalized output` without bespoke code per collection.

---

## Validated evidence (30 collections)

### Discovery and audit

| Phase | Collections | Samples | Audits | Findings |
|-------|-------------|--------:|-------:|---------:|
| Phase 1 | 10 | 100 | 10 complete | 10 |
| Phase 2 | 20 | 200 | 20 complete | 20 |
| **Total** | **30** | **300** | **30** | **30** |

Sources: Blockfrost `GET /assets/{unit}` raw samples (`research/raw-samples/`), per-collection audits (`research/audits/`), findings (`research/findings/`).

### End-to-end normalization

Using registry definitions only (`registry/collections/*.json`) and `normalizeCollectionMetadata()`:

| Metric | Result |
|--------|-------:|
| Collections tested | 30 |
| Samples processed | 300 |
| Samples parsed (metadata present) | 296 |
| Skipped (null metadata) | 4 |
| Normalization failures | **0** |
| Collections with 0 extraction warnings | 27 / 30 |
| Traits extracted (aggregate) | 1,780 |
| Media fields extracted | 456 |
| Socials extracted | 53 |
| Links extracted | 216 |

Full report: [research/end-to-end-validation.md](../research/end-to-end-validation.md)

### Definition readiness

| Classification | Count |
|----------------|------:|
| ready | 19 |
| ready_with_notes | 10 |
| blocked | 1 (spacebudz) |
| deferred | 0 |

See [research/definition-readiness.md](../research/definition-readiness.md).

### Layout coverage proven

| Pattern | Example collections |
|---------|---------------------|
| Flat root traits | Clay Nation, Boss Cat, OREMOB, Chilled Kongs |
| `attributes` object | Yummi Universe Naru, Book.io, Cornucopias GTI |
| `array_singleton_object` | The Mallard Order, Pavia, Introverts Membership Card |
| `key_value_array` | DEADPXLZ |
| `first_existing_path` | Epoch Genesis v2 (music v1/v2) |
| Minimal badge (no traits) | Cardano Summit 2021 |
| Identity namespace | ADA Handle |
| `files[]` multi-media | Cornucopias, Book.io, OREMOB, Chilled Kongs Vox |
| Nested social/link objects | Cornucopias land, cNFTcon pass |
| Land / gaming / membership / document | Phase 2 batch |

---

## Current registry model

**Collection Definition Record** (`registry_version: 1.0.0`) — see [registry-model.md](registry-model.md).

| Section | Role |
|---------|------|
| `collection_id`, `name`, `policy_ids` | Identity and policy binding |
| `definition_status` | `complete` \| `partial` \| `draft` — honesty about coverage |
| `identity` | Display name, description, category, tags (explicit or sourced) |
| `metadata_layout` | CIP-25 / CIP-68 / custom layout hints |
| `trait_mappings` | Canonical trait extraction + normalization |
| `media_mappings` | Image, animation, files[] |
| `social_mappings`, `link_mappings` | On-chain or registry-level links |
| `license_info`, `royalty_info` | Rights interpretation |
| `normalization_rules` | Post-extraction renames/value aliases |
| `indexing_notes` | Collection-level caveats (not per-sample failures) |

**Sourced value principle:** every field is either an explicit registry value or extracted via `source_path` / extraction strategy.

---

## Current parser capabilities

Package: `@cardano-nft-collection-registry/core`

| Capability | API / mechanism |
|------------|-----------------|
| Schema validation | Zod + JSON Schema |
| Path extraction | `extractBySourcePath` (minimal dot-path, not full JSONPath) |
| Trait extraction strategies | `direct_path`, `first_existing_path`, `array_singleton_object`, `key_value_array`, `root_flat_keys` |
| Normalization | `normalizeCollectionMetadata(rawMetadata, definition)` → traits, media, socials, links, license, royalties, warnings |
| Registry loading | `loadCollectionsFromDirectory` |
| CLI | validate, inspect, list, search, prepare-phase, audit-report |
| API / indexer packages | REST lookup + policy resolution utilities |

Extraction strategies documented in [trait-mappings.md](trait-mappings.md). GAP-001 (`array_singleton_object`) resolved in baseline.

---

## Current limitations

1. **Not a trait database** — no per-NFT storage; rules only.
2. **No on-chain verification** — definitions are curated, not cryptographically anchored.
3. **Minimal path language** — no wildcards, filters, or transforms in paths.
4. **Optional fields often absent on-chain** — socials, license, royalties frequently missing (class A); not treated as failures.
5. **Null-metadata assets** — policy index / reference tokens skipped, not failed (4/300 samples).
6. **Partial definitions are intentional** — ecosystem scope, edge layouts, or missing creator input.
7. **Single confirmed blocked case** — SpaceBudz GIP-002 hex traits (see open issues).
8. **Manual audit pipeline** — Blockfrost fetch and audit authoring not fully automated in CLI.
9. **No Phase 3 scale yet** — 30 collections validated; ~970 TapTools-filtered rows not onboarded.

---

## Known unresolved cases

Tracked in [research/open-issues.md](../research/open-issues.md) and [schema-gap-log.md](../research/schema-gap-log.md).

| ID | Summary | Collections |
|----|---------|-------------|
| GAP-002 | CIP-68 hex-encoded trait blobs | spacebudz |
| EDGE-001 | `traits[]` as `"Key: Value"` strings | clay-nation-good-charlotte |
| EDGE-002 | Split IPFS `image` array | deprecated-jungle-wenno-cat |
| — | Book.io document/media normalization | book-io-* (3) |
| — | Dual music metadata v1/v2 | epoch-genesis-v2 |
| — | Cornucopias multi-policy ecosystem | cornucopias-land-zones-1-3, cornucopias-gti-javelin-2022 |
| — | Unknown / deprecated TapTools rows | policy TBD |

---

## Repository artifacts (baseline)

| Path | Contents |
|------|----------|
| `registry/collections/` | 30 audited definitions + example |
| `research/audits/` | 30 audit reports |
| `research/findings/` | 30 findings + phase summaries + e2e validation |
| `research/raw-samples/` | 300 Blockfrost samples (gitignored) |
| `schemas/` | JSON Schema for definition records |
| `packages/core` | Parser + validation |
| `packages/cli`, `api`, `indexer` | Tooling |

---

## Baseline invariants (do not break without review)

1. Phase 1 definitions stable unless regression found.
2. Schema changes require 2+ collection confirmation (D-class rule).
3. No per-collection TypeScript in core parser — behavior via definitions + strategies only.
4. Null metadata = skip, not failure (unless definition opts in).
5. Phase 3 not started until explicitly approved.

---

## Related documents

- [roadmap.md](roadmap.md) — forward plan
- [research/open-issues.md](../research/open-issues.md) — tracked gaps and edges
- [research/end-to-end-validation.md](../research/end-to-end-validation.md) — normalization proof
- [vision.md](vision.md) — original goals and scope
