# Phase input files

JSON arrays describing collections to prepare for a validation phase.

## Format

```json
[
  {
    "name": "Example Collection",
    "collection_id": "example-collection",
    "policy_ids": ["<56-char-hex-policy-id>"],
    "sample_assets": ["asset-name-or-id-1", "asset-name-or-id-2"],
    "notes": "Optional context for auditors"
  }
]
```

| Field | Required | Description |
|-------|----------|-------------|
| `name` | yes | Human-readable collection name |
| `collection_id` | yes | Stable lowercase kebab-case registry ID |
| `policy_ids` | yes | One or more 56-character hex policy IDs |
| `sample_assets` | yes | Asset names or IDs to sample (min 1) |
| `notes` | no | Known problems or selection rationale |

### Top-100 triage fields (Phase 3 selection only)

Used in triage logs (`research/phase-3-triage.json`) before populating `phase-3-selected.json`. Not required in final `prepare-phase` input.

| Field | Values | Description |
|-------|--------|-------------|
| `triage_status` | `include` \| `exclude` \| `include_later` | Selection outcome |
| `reason_code` | string | Machine-readable exclusion/defer reason |

**Automatic exclusion:** Rows with unknown, blank, 404, or invalid names must use:

```json
{
  "triage_status": "exclude",
  "reason_code": "unknown_or_broken_collection"
}
```

Do **not** assign `include_later` to these rows. See [top-100-triage-policy.md](./top-100-triage-policy.md).

## Phase 1 file

`research/phase-1-top-10.json` — populate with the top 10 known Cardano NFT collections before running:

```bash
pnpm --filter @cardano-nft-collection-registry/cli start prepare-phase research/phase-1-top-10.json
```

Future phases may use `phase-2.json`, `phase-3.json`, etc. Pass `--phase <n>` to tag audits when the filename does not imply a phase number.
