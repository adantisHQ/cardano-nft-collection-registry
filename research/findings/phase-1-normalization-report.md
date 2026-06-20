# Phase 1 Normalization Report

Generated: 2026-06-08

Normalization run against Blockfrost raw samples (`onchain_metadata` only) using Phase 1 collection definitions in `registry/collections/`.

## Reporting semantics

| Category | Meaning |
|----------|---------|
| `definition_notes` | Collection-level `indexing_notes` from the definition (shown once per collection, not multiplied per sample) |
| `extraction_warnings` | Per-sample trait extraction messages (`Trait not found`, `Missing required trait`, enum mismatch, optional resolve notes) |
| `sample_warnings` | Other parser warnings not classified as definition notes or extraction warnings |
| `skipped_null_metadata` | Sample had null/missing `onchain_metadata`; skipped for extraction totals |
| `failures` | Sample had metadata but produced no traits when trait mappings exist, or null metadata when the definition requires metadata on all samples |

## Summary

| Collection | Status | Samples | Parsed | Skipped (null) | Traits | Media | Extraction warnings | Sample warnings | Failures |
|------------|--------|--------:|-------:|---------------:|-------:|------:|--------------------:|----------------:|---------:|
| SpaceBudz | partial | 10 | 10 | 0 | 40 | 10 | 20 | 0 | 0 |
| Clay Nation | complete | 10 | 10 | 0 | 90 | 10 | 0 | 0 | 0 |
| Pavia | complete | 10 | 10 | 0 | 30 | 10 | 0 | 0 | 0 |
| ADA Handle | partial | 10 | 9 | 1 | 36 | 9 | 0 | 0 | 0 |
| DEADPXLZ | complete | 10 | 10 | 0 | 20 | 20 | 10 | 0 | 0 |
| Boss Cat Rocket Club | complete | 10 | 9 | 1 | 45 | 9 | 0 | 0 | 0 |
| Cornucopias Land Sale - Zones 1-3 | partial | 10 | 10 | 0 | 60 | 20 | 0 | 0 | 0 |
| Cardano Summit 2021 | complete | 10 | 10 | 0 | 0 | 10 | 0 | 0 | 0 |
| The Mallard Order | complete | 10 | 9 | 1 | 126 | 9 | 0 | 0 | 0 |
| Jellycubes | complete | 10 | 9 | 1 | 162 | 9 | 0 | 0 | 0 |

## Per-collection detail

### SpaceBudz (`spacebudz`)

- Definition status: `partial`
- Samples processed: 10
- Samples parsed: 10
- Skipped (null metadata): 0
- Traits extracted (aggregate): 40
- Media extracted (aggregate): 10
- Socials extracted (aggregate): 0
- Links extracted (aggregate): 0
- Extraction warnings (aggregate): 20
- Sample warnings (aggregate): 0
- Failures: 0

**Definition notes (collection-level):**

- [warning] Traits appear as CIP-68 hex-encoded values in the traits field and are not fully normalized to per-trait JSON yet (GAP-002).
- [warning] Many assets under this policy return null on-chain metadata in Blockfrost; index reference tokens with CIP-68 metadata.
- [info] Social links, license, and royalties were not present in sampled on-chain metadata.

| Sample | Status | Traits | Media | Socials | Links | Extraction warnings | Sample warnings | Failure |
|--------|--------|-------:|------:|--------:|------:|--------------------:|----------------:|---------|
| asset-001.json | ok | 4 | 1 | 0 | 0 | 2 | 0 | — |
| asset-002.json | ok | 4 | 1 | 0 | 0 | 2 | 0 | — |
| asset-003.json | ok | 4 | 1 | 0 | 0 | 2 | 0 | — |
| asset-004.json | ok | 4 | 1 | 0 | 0 | 2 | 0 | — |
| asset-005.json | ok | 4 | 1 | 0 | 0 | 2 | 0 | — |
| asset-006.json | ok | 4 | 1 | 0 | 0 | 2 | 0 | — |
| asset-007.json | ok | 4 | 1 | 0 | 0 | 2 | 0 | — |
| asset-008.json | ok | 4 | 1 | 0 | 0 | 2 | 0 | — |
| asset-009.json | ok | 4 | 1 | 0 | 0 | 2 | 0 | — |
| asset-010.json | ok | 4 | 1 | 0 | 0 | 2 | 0 | — |

### Clay Nation (`clay-nation`)

- Definition status: `complete`
- Samples processed: 10
- Samples parsed: 10
- Skipped (null metadata): 0
- Traits extracted (aggregate): 90
- Media extracted (aggregate): 10
- Socials extracted (aggregate): 0
- Links extracted (aggregate): 0
- Extraction warnings (aggregate): 0
- Sample warnings (aggregate): 0
- Failures: 0

**Definition notes (collection-level):**

- [info] Social links and license were not present in sampled on-chain metadata.
- [info] Related Clay Nation ecosystem policies (Pitches, collabs) use separate policy IDs.

| Sample | Status | Traits | Media | Socials | Links | Extraction warnings | Sample warnings | Failure |
|--------|--------|-------:|------:|--------:|------:|--------------------:|----------------:|---------|
| asset-001.json | ok | 9 | 1 | 0 | 0 | 0 | 0 | — |
| asset-002.json | ok | 9 | 1 | 0 | 0 | 0 | 0 | — |
| asset-003.json | ok | 9 | 1 | 0 | 0 | 0 | 0 | — |
| asset-004.json | ok | 9 | 1 | 0 | 0 | 0 | 0 | — |
| asset-005.json | ok | 9 | 1 | 0 | 0 | 0 | 0 | — |
| asset-006.json | ok | 9 | 1 | 0 | 0 | 0 | 0 | — |
| asset-007.json | ok | 9 | 1 | 0 | 0 | 0 | 0 | — |
| asset-008.json | ok | 9 | 1 | 0 | 0 | 0 | 0 | — |
| asset-009.json | ok | 9 | 1 | 0 | 0 | 0 | 0 | — |
| asset-010.json | ok | 9 | 1 | 0 | 0 | 0 | 0 | — |

### Pavia (`pavia`)

- Definition status: `complete`
- Samples processed: 10
- Samples parsed: 10
- Skipped (null metadata): 0
- Traits extracted (aggregate): 30
- Media extracted (aggregate): 10
- Socials extracted (aggregate): 0
- Links extracted (aggregate): 10
- Extraction warnings (aggregate): 0
- Sample warnings (aggregate): 0
- Failures: 0

**Definition notes (collection-level):**

- [warning] Image field may be a bare IPFS CID without ipfs:// prefix on some parcels.
- [info] Land fields extracted via array_singleton_object on -----Land Sale 1----- (GAP-001 resolved).
- [info] Social links were not present at metadata root in samples; copyright appears in Product Information array.

| Sample | Status | Traits | Media | Socials | Links | Extraction warnings | Sample warnings | Failure |
|--------|--------|-------:|------:|--------:|------:|--------------------:|----------------:|---------|
| asset-001.json | ok | 3 | 1 | 0 | 1 | 0 | 0 | — |
| asset-002.json | ok | 3 | 1 | 0 | 1 | 0 | 0 | — |
| asset-003.json | ok | 3 | 1 | 0 | 1 | 0 | 0 | — |
| asset-004.json | ok | 3 | 1 | 0 | 1 | 0 | 0 | — |
| asset-005.json | ok | 3 | 1 | 0 | 1 | 0 | 0 | — |
| asset-006.json | ok | 3 | 1 | 0 | 1 | 0 | 0 | — |
| asset-007.json | ok | 3 | 1 | 0 | 1 | 0 | 0 | — |
| asset-008.json | ok | 3 | 1 | 0 | 1 | 0 | 0 | — |
| asset-009.json | ok | 3 | 1 | 0 | 1 | 0 | 0 | — |
| asset-010.json | ok | 3 | 1 | 0 | 1 | 0 | 0 | — |

### ADA Handle (`ada-handle`)

- Definition status: `partial`
- Samples processed: 10
- Samples parsed: 9
- Skipped (null metadata): 1
- Traits extracted (aggregate): 36
- Media extracted (aggregate): 9
- Socials extracted (aggregate): 0
- Links extracted (aggregate): 18
- Extraction warnings (aggregate): 0
- Sample warnings (aggregate): 0
- Failures: 0

**Definition notes (collection-level):**

- [info] Identity collection; not trait-grid oriented. Twitter/discord not present in sampled metadata.
- [info] Policy-level asset entries may appear without per-handle metadata.

| Sample | Status | Traits | Media | Socials | Links | Extraction warnings | Sample warnings | Failure |
|--------|--------|-------:|------:|--------:|------:|--------------------:|----------------:|---------|
| asset-001.json | skipped_null_metadata | 0 | 0 | 0 | 0 | 0 | 0 | — |
| asset-002.json | ok | 4 | 1 | 0 | 2 | 0 | 0 | — |
| asset-003.json | ok | 4 | 1 | 0 | 2 | 0 | 0 | — |
| asset-004.json | ok | 4 | 1 | 0 | 2 | 0 | 0 | — |
| asset-005.json | ok | 4 | 1 | 0 | 2 | 0 | 0 | — |
| asset-006.json | ok | 4 | 1 | 0 | 2 | 0 | 0 | — |
| asset-007.json | ok | 4 | 1 | 0 | 2 | 0 | 0 | — |
| asset-008.json | ok | 4 | 1 | 0 | 2 | 0 | 0 | — |
| asset-009.json | ok | 4 | 1 | 0 | 2 | 0 | 0 | — |
| asset-010.json | ok | 4 | 1 | 0 | 2 | 0 | 0 | — |

### DEADPXLZ (`deadpxlz`)

- Definition status: `complete`
- Samples processed: 10
- Samples parsed: 10
- Skipped (null metadata): 0
- Traits extracted (aggregate): 20
- Media extracted (aggregate): 20
- Socials extracted (aggregate): 0
- Links extracted (aggregate): 0
- Extraction warnings (aggregate): 10
- Sample warnings (aggregate): 0
- Failures: 0

**Definition notes (collection-level):**

- [info] properties[{key,value}] type field mapped via key_value_array; additional property keys not observed in samples.
- [warning] Individual visual tags in tags[] are not mapped to separate canonical traits without per-tag extraction.
- [info] Social links and license were not present in sampled on-chain metadata.

| Sample | Status | Traits | Media | Socials | Links | Extraction warnings | Sample warnings | Failure |
|--------|--------|-------:|------:|--------:|------:|--------------------:|----------------:|---------|
| asset-001.json | ok | 2 | 2 | 0 | 0 | 1 | 0 | — |
| asset-002.json | ok | 2 | 2 | 0 | 0 | 1 | 0 | — |
| asset-003.json | ok | 2 | 2 | 0 | 0 | 1 | 0 | — |
| asset-004.json | ok | 2 | 2 | 0 | 0 | 1 | 0 | — |
| asset-005.json | ok | 2 | 2 | 0 | 0 | 1 | 0 | — |
| asset-006.json | ok | 2 | 2 | 0 | 0 | 1 | 0 | — |
| asset-007.json | ok | 2 | 2 | 0 | 0 | 1 | 0 | — |
| asset-008.json | ok | 2 | 2 | 0 | 0 | 1 | 0 | — |
| asset-009.json | ok | 2 | 2 | 0 | 0 | 1 | 0 | — |
| asset-010.json | ok | 2 | 2 | 0 | 0 | 1 | 0 | — |

### Boss Cat Rocket Club (`boss-cat-rocket-club`)

- Definition status: `complete`
- Samples processed: 10
- Samples parsed: 9
- Skipped (null metadata): 1
- Traits extracted (aggregate): 45
- Media extracted (aggregate): 9
- Socials extracted (aggregate): 0
- Links extracted (aggregate): 0
- Extraction warnings (aggregate): 0
- Sample warnings (aggregate): 0
- Failures: 0

**Definition notes (collection-level):**

- [warning] Policy/reference assets may have null on-chain metadata; skip or handle separately.
- [info] Boss Cat Rocket Parts uses a separate policy ID. Social links not present in sampled metadata.

| Sample | Status | Traits | Media | Socials | Links | Extraction warnings | Sample warnings | Failure |
|--------|--------|-------:|------:|--------:|------:|--------------------:|----------------:|---------|
| asset-001.json | skipped_null_metadata | 0 | 0 | 0 | 0 | 0 | 0 | — |
| asset-002.json | ok | 5 | 1 | 0 | 0 | 0 | 0 | — |
| asset-003.json | ok | 5 | 1 | 0 | 0 | 0 | 0 | — |
| asset-004.json | ok | 5 | 1 | 0 | 0 | 0 | 0 | — |
| asset-005.json | ok | 5 | 1 | 0 | 0 | 0 | 0 | — |
| asset-006.json | ok | 5 | 1 | 0 | 0 | 0 | 0 | — |
| asset-007.json | ok | 5 | 1 | 0 | 0 | 0 | 0 | — |
| asset-008.json | ok | 5 | 1 | 0 | 0 | 0 | 0 | — |
| asset-009.json | ok | 5 | 1 | 0 | 0 | 0 | 0 | — |
| asset-010.json | ok | 5 | 1 | 0 | 0 | 0 | 0 | — |

### Cornucopias Land Sale - Zones 1-3 (`cornucopias-land-zones-1-3`)

- Definition status: `partial`
- Samples processed: 10
- Samples parsed: 10
- Skipped (null metadata): 0
- Traits extracted (aggregate): 60
- Media extracted (aggregate): 20
- Socials extracted (aggregate): 0
- Links extracted (aggregate): 20
- Extraction warnings (aggregate): 0
- Sample warnings (aggregate): 0
- Failures: 0

**Definition notes (collection-level):**

- [info] Social URLs appear under media object (Website, Link Tree), not standard root social keys.
- [info] License not present in sampled on-chain metadata.

| Sample | Status | Traits | Media | Socials | Links | Extraction warnings | Sample warnings | Failure |
|--------|--------|-------:|------:|--------:|------:|--------------------:|----------------:|---------|
| asset-001.json | ok | 6 | 2 | 0 | 2 | 0 | 0 | — |
| asset-002.json | ok | 6 | 2 | 0 | 2 | 0 | 0 | — |
| asset-003.json | ok | 6 | 2 | 0 | 2 | 0 | 0 | — |
| asset-004.json | ok | 6 | 2 | 0 | 2 | 0 | 0 | — |
| asset-005.json | ok | 6 | 2 | 0 | 2 | 0 | 0 | — |
| asset-006.json | ok | 6 | 2 | 0 | 2 | 0 | 0 | — |
| asset-007.json | ok | 6 | 2 | 0 | 2 | 0 | 0 | — |
| asset-008.json | ok | 6 | 2 | 0 | 2 | 0 | 0 | — |
| asset-009.json | ok | 6 | 2 | 0 | 2 | 0 | 0 | — |
| asset-010.json | ok | 6 | 2 | 0 | 2 | 0 | 0 | — |

### Cardano Summit 2021 (`cardano-summit-2021`)

- Definition status: `complete`
- Samples processed: 10
- Samples parsed: 10
- Skipped (null metadata): 0
- Traits extracted (aggregate): 0
- Media extracted (aggregate): 10
- Socials extracted (aggregate): 0
- Links extracted (aggregate): 0
- Extraction warnings (aggregate): 0
- Sample warnings (aggregate): 0
- Failures: 0

**Definition notes (collection-level):**

- [info] No trait fields observed; name and image only. This is valid for event badge collections.
- [info] Social links, license, and royalties were not present in sampled on-chain metadata.
- [info] Distinct from generic Cardano Summit and later Summit year policies.

| Sample | Status | Traits | Media | Socials | Links | Extraction warnings | Sample warnings | Failure |
|--------|--------|-------:|------:|--------:|------:|--------------------:|----------------:|---------|
| asset-001.json | ok | 0 | 1 | 0 | 0 | 0 | 0 | — |
| asset-002.json | ok | 0 | 1 | 0 | 0 | 0 | 0 | — |
| asset-003.json | ok | 0 | 1 | 0 | 0 | 0 | 0 | — |
| asset-004.json | ok | 0 | 1 | 0 | 0 | 0 | 0 | — |
| asset-005.json | ok | 0 | 1 | 0 | 0 | 0 | 0 | — |
| asset-006.json | ok | 0 | 1 | 0 | 0 | 0 | 0 | — |
| asset-007.json | ok | 0 | 1 | 0 | 0 | 0 | 0 | — |
| asset-008.json | ok | 0 | 1 | 0 | 0 | 0 | 0 | — |
| asset-009.json | ok | 0 | 1 | 0 | 0 | 0 | 0 | — |
| asset-010.json | ok | 0 | 1 | 0 | 0 | 0 | 0 | — |

### The Mallard Order (`the-mallard-order`)

- Definition status: `complete`
- Samples processed: 10
- Samples parsed: 9
- Skipped (null metadata): 1
- Traits extracted (aggregate): 126
- Media extracted (aggregate): 9
- Socials extracted (aggregate): 9
- Links extracted (aggregate): 9
- Extraction warnings (aggregate): 0
- Sample warnings (aggregate): 0
- Failures: 0

**Definition notes (collection-level):**

- [info] Traits extracted via array_singleton_object on $.Attributes (GAP-001 resolved).
- [info] License not present in sampled on-chain metadata.

| Sample | Status | Traits | Media | Socials | Links | Extraction warnings | Sample warnings | Failure |
|--------|--------|-------:|------:|--------:|------:|--------------------:|----------------:|---------|
| asset-001.json | skipped_null_metadata | 0 | 0 | 0 | 0 | 0 | 0 | — |
| asset-002.json | ok | 14 | 1 | 1 | 1 | 0 | 0 | — |
| asset-003.json | ok | 14 | 1 | 1 | 1 | 0 | 0 | — |
| asset-004.json | ok | 14 | 1 | 1 | 1 | 0 | 0 | — |
| asset-005.json | ok | 14 | 1 | 1 | 1 | 0 | 0 | — |
| asset-006.json | ok | 14 | 1 | 1 | 1 | 0 | 0 | — |
| asset-007.json | ok | 14 | 1 | 1 | 1 | 0 | 0 | — |
| asset-008.json | ok | 14 | 1 | 1 | 1 | 0 | 0 | — |
| asset-009.json | ok | 14 | 1 | 1 | 1 | 0 | 0 | — |
| asset-010.json | ok | 14 | 1 | 1 | 1 | 0 | 0 | — |

### Jellycubes (`jellycubes`)

- Definition status: `complete`
- Samples processed: 10
- Samples parsed: 9
- Skipped (null metadata): 1
- Traits extracted (aggregate): 162
- Media extracted (aggregate): 9
- Socials extracted (aggregate): 9
- Links extracted (aggregate): 9
- Extraction warnings (aggregate): 0
- Sample warnings (aggregate): 0
- Failures: 0

**Definition notes (collection-level):**

- [info] Description field is a string array; not mapped as a single sourced value.
- [info] License not present in sampled on-chain metadata.

| Sample | Status | Traits | Media | Socials | Links | Extraction warnings | Sample warnings | Failure |
|--------|--------|-------:|------:|--------:|------:|--------------------:|----------------:|---------|
| asset-001.json | skipped_null_metadata | 0 | 0 | 0 | 0 | 0 | 0 | — |
| asset-002.json | ok | 18 | 1 | 1 | 1 | 0 | 0 | — |
| asset-003.json | ok | 18 | 1 | 1 | 1 | 0 | 0 | — |
| asset-004.json | ok | 18 | 1 | 1 | 1 | 0 | 0 | — |
| asset-005.json | ok | 18 | 1 | 1 | 1 | 0 | 0 | — |
| asset-006.json | ok | 18 | 1 | 1 | 1 | 0 | 0 | — |
| asset-007.json | ok | 18 | 1 | 1 | 1 | 0 | 0 | — |
| asset-008.json | ok | 18 | 1 | 1 | 1 | 0 | 0 | — |
| asset-009.json | ok | 18 | 1 | 1 | 1 | 0 | 0 | — |
| asset-010.json | ok | 18 | 1 | 1 | 1 | 0 | 0 | — |

## Notes

- Absent on-chain socials, license, and royalties are not treated as failures or warnings.
- SpaceBudz stores encoded trait blobs; per-trait decoding remains partial (GAP-002).
- Cardano Summit 2021 intentionally has no trait mappings.
- Null-metadata policy/reference assets are common; they are skipped unless a definition opts in to `REQUIRE_METADATA_ON_ALL_SAMPLES` in an indexing note.

