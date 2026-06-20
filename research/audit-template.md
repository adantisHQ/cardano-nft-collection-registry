# Collection Audit: {{collection_name}}

Per-collection audit output for schema validation against real Cardano NFT collections.

**Do not edit this master template directly for audits.** Use:

```bash
pnpm --filter @cardano-nft-collection-registry/cli start audit-template <collection_id>
```

Generated audits live at `research/audits/<collection_id>.audit.md`.

---

## Audit metadata

| Field | Value |
|-------|-------|
| `collection_id` | `{{collection_id}}` |
| `collection_name` | _TBD_ |
| `audit_phase` | _TBD_ (1 \| 2 \| 3 \| 4 \| 5) |
| `auditor` | _TBD_ |
| `audit_date` | {{audit_date}} |
| `audit_status` | draft |

## Input provided

### Policy IDs

```
_TBD_
```

### Sample assets

| Label | Asset name or asset ID | Notes |
|-------|------------------------|-------|
| asset-001 | _TBD_ | |
| asset-002 | _TBD_ | |
| asset-003 | _TBD_ | |

Raw samples directory: `research/raw-samples/{{collection_id}}/`

Expected files:

- `asset-001.json`
- `asset-002.json`
- `asset-003.json`

### Known problems (optional)

_TBD_

---

## Metadata analysis

| Field | Finding |
|-------|---------|
| Metadata standard | _TBD_ (`cip25` \| `cip68` \| `custom` \| `mixed` \| `unknown`) |
| Metadata root | _TBD_ |
| Asset name encoding | _TBD_ (`utf8` \| `hex` \| `mixed` \| `unknown`) |
| CIP-25 layout notes | _TBD_ |
| CIP-68 layout notes | _TBD_ |
| Custom conventions | _TBD_ |

---

## Media analysis

| Field | Path or value | Source | Notes |
|-------|---------------|--------|-------|
| Image | _TBD_ | | |
| Animation | _TBD_ | | |
| Files / multi-media | _TBD_ | | |
| Thumbnail | _TBD_ | | |
| Collection logo | _TBD_ | | |
| Collection banner | _TBD_ | | |

---

## Trait analysis

| Field | Finding |
|-------|---------|
| Trait grouping style | _TBD_ (e.g. CIP-25 attributes object, attributes array, custom nested map) |
| Primary trait root path | _TBD_ |
| Canonical trait names | _TBD_ |
| Value types observed | _TBD_ |
| Normalization requirements | _TBD_ |
| Dynamic traits | _TBD_ (yes/no + notes) |

### Trait path inventory

| Canonical trait | Source path(s) | Value type | Normalization | Required |
|-----------------|----------------|------------|---------------|----------|
| _TBD_ | _TBD_ | _TBD_ | _TBD_ | _TBD_ |

---

## Socials

| Platform | Location or explicit value | Status |
|----------|----------------------------|--------|
| x | _TBD_ | found \| missing \| registry-only |
| discord | _TBD_ | found \| missing \| registry-only |
| telegram | _TBD_ | found \| missing \| registry-only |
| github | _TBD_ | found \| missing \| registry-only |
| other | _TBD_ | found \| missing \| registry-only |

---

## Links

| Link type | Location or explicit value | Status |
|-----------|----------------------------|--------|
| website | _TBD_ | found \| missing \| registry-only |
| mint | _TBD_ | found \| missing \| registry-only |
| documentation | _TBD_ | found \| missing \| registry-only |
| other | _TBD_ | found \| missing \| registry-only |

---

## License

| Field | Location or value | Status |
|-------|-------------------|--------|
| License text | _TBD_ | found \| missing \| registry-only |
| License URL | _TBD_ | found \| missing \| registry-only |
| Commercial use | _TBD_ | found \| missing \| registry-only |
| Derivative use | _TBD_ | found \| missing \| registry-only |

---

## Royalties

| Field | Finding |
|-------|---------|
| Discoverable | _TBD_ (yes/no) |
| Source | _TBD_ (`cip27` \| `royalty_token` \| `marketplace` \| `registry` \| `unknown`) |
| Percentage | _TBD_ |
| Address | _TBD_ |
| Notes | _TBD_ |

---

## Indexing caveats

| Severity | Message |
|----------|---------|
| _TBD_ | _TBD_ |

---

## Schema fit assessment

| Question | Answer |
|----------|--------|
| Can current schema represent this collection? | _TBD_ (yes/no + summary) |
| `schema_fit` | _TBD_ |
| Proposed definition status | _TBD_ |
| Blockers | _TBD_ |

### Schema fit values

- `fits` — maps cleanly to current Collection Definition Record
- `fits_with_notes` — representable with `indexing_notes` and mappings
- `requires_schema_change` — same insufficiency seen in 2+ collections (log in `research/schema-gap-log.md`)
- `not_representable` — cannot model with current schema even with notes

---

## Failures

Classify every failure:

| # | Area | Description | Classification |
|---|------|-------------|----------------|
| | | | _TBD_ |

**Classification key:**

- **A** — Missing data in collection
- **B** — Parser bug
- **C** — Incorrect mapping
- **D** — Schema insufficient (log only after 2+ collections share the same gap)
- **E** — Rare edge case; handle via notes/manual process

---

## Scoring

```
parse_success_score: _TBD_
trait_mapping_confidence: _TBD_
media_mapping_confidence: _TBD_
social_mapping_confidence: _TBD_
schema_fit: _TBD_
```

### Score guidance

- **parse_success_score (0–100):** percentage of intended fields successfully extracted and normalized from samples
- **Confidence levels:** `low` \| `medium` \| `high`
- **schema_fit:** `fits` \| `fits_with_notes` \| `requires_schema_change` \| `not_representable`

---

## Outputs

| Artifact | Path |
|----------|------|
| Raw samples | `research/raw-samples/{{collection_id}}/` |
| Audit report | `research/audits/{{collection_id}}.audit.md` |
| Generated definition | `registry/collections/{{collection_id}}.json` |
| Schema gap entry (if D) | `research/schema-gap-log.md` |
| Detailed finding (optional) | `research/findings/{{collection_id}}.md` |

---

## Definition draft checklist

- [ ] `registry_version` set
- [ ] `collection_id` matches audit
- [ ] `policy_ids` verified (56-char hex)
- [ ] `definition_status` set honestly
- [ ] `metadata_layout` populated
- [ ] `trait_mappings` cover observed traits
- [ ] `media_mappings` cover observed media
- [ ] Socials/links explicit or path-mapped
- [ ] License/royalty documented or marked absent
- [ ] `indexing_notes` capture caveats
- [ ] `pnpm validate` passes on generated definition

---

## Notes

_TBD_
