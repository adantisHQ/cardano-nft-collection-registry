# Collection Definition Record

A **Collection Definition Record** is the canonical JSON document stored in the registry for one logical NFT collection.

Implementations **MUST** validate records against `schemas/collection-definition.schema.json`.

---

## Purpose

Given one or more Cardano policy IDs, the record tells applications:

1. How to locate NFT metadata (layout)
2. How to extract traits (mappings + strategies)
3. How to resolve media URIs
4. Where to read collection-level social and official links
5. What license and royalty information is known (informational)

The record does **not** contain per-token trait values.

---

## Canonical structure

```json
{
  "registry_version": "1.0.0",
  "collection_id": "example-collection",
  "name": "Example Collection",
  "definition_status": "complete",
  "policy_ids": ["..."],
  "identity": {},
  "metadata_layout": {},
  "trait_mappings": [],
  "media_mappings": {},
  "social_mappings": {},
  "link_mappings": {},
  "external_resources": [],
  "license_info": {},
  "royalty_info": {},
  "normalization_rules": [],
  "indexing_notes": []
}
```

---

## Required fields

| Field | Requirement |
|-------|-------------|
| `registry_version` | **MUST** be present. Semver string matching `^\d+\.\d+\.\d+$`. |
| `collection_id` | **MUST** be present. Stable identifier; **SHOULD** be lowercase kebab-case (`^[a-z0-9]+(?:-[a-z0-9]+)*$`). |
| `name` | **MUST** be present. Human-readable collection name. |
| `definition_status` | **MUST** be present. One of the enum values below. |
| `policy_ids` | **MUST** be present. Non-empty array of valid Cardano policy IDs. |

### policy_ids

- **MUST** contain at least one policy ID.
- Each policy ID **MUST** be exactly 56 hexadecimal characters (`^[0-9a-fA-F]{56}$`).
- Multiple policies **MAY** represent sibling mints, legacy policies, or ecosystem splits under one logical collection.
- Applications **MUST** treat any listed policy as belonging to this collection definition.

### collection_id

- **SHOULD** remain stable across registry updates.
- **SHOULD NOT** change when display name or social links change.
- **MAY** differ from on-chain asset names or marketplace slugs.

---

## definition_status

The `definition_status` field communicates **definition completeness for parsing**, not marketplace quality or creator verification.

| Status | Meaning |
|--------|---------|
| `minimal` | Only identity and policy information is known. Trait/media parsing rules are absent or not usable. |
| `partial` | Some core parsing information is missing or unresolved (encoded traits, unknown layout, incomplete CIP-68 handling, etc.). |
| `complete` | The definition is sufficient to parse the known metadata layout for this collection. Optional socials, license, or royalties **MAY** still be absent. |
| `inferred` | Definition was inferred from samples; not confirmed by the creator or project. |
| `broken` | Metadata layout is inconsistent or unreliable; definition documents limits or workarounds. |
| `unknown` | Not enough information to assess completeness. |

### Status rules

- Absent optional fields (socials, license, royalties, banner) alone **MUST NOT** force `partial`.
- Use `partial` when trait extraction, media resolution, or metadata layout remains unresolved.
- Use `broken` when indexing is expected to fail or produce unreliable output without manual handling.
- Launchpads **SHOULD** target `complete` for new mints with known CIP-25 `attributes` layout.

---

## Optional sections

All sections below **MAY** be omitted or empty when unknown.

| Section | Purpose |
|---------|---------|
| `identity` | Display name, description, category, tags |
| `metadata_layout` | Standard and path layout (see [metadata-layout.md](./metadata-layout.md)) |
| `trait_mappings` | Trait extraction rules (see [trait-mappings.md](./trait-mappings.md)) |
| `media_mappings` | Per-NFT and collection-level media (see [media-mappings.md](./media-mappings.md)) |
| `social_mappings` | Social URLs (see [social-link-mappings.md](./social-link-mappings.md)) |
| `link_mappings` | Official / project links |
| `external_resources` | URIs to external manifests or archives |
| `license_info` | License declarations (informational) |
| `royalty_info` | Royalty declarations (informational) |
| `normalization_rules` | Cross-field string normalization |
| `indexing_notes` | Operator warnings (`info`, `warning`, `critical`) |

---

## identity

```json
{
  "display_name": { "value": "Example Collection" },
  "description": { "value": "Short collection description." },
  "category": { "value": "pfp" },
  "tags": ["pfp", "gaming"]
}
```

- Fields except `tags` use the [sourced value pattern](./collection-definition.md#sourced-value-pattern).
- `tags` is a plain string array (registry-level labels).

---

## external_resources

```json
{
  "type": "metadata_manifest",
  "label": "Official trait manifest",
  "uri": "ipfs://...",
  "hash": null,
  "notes": ""
}
```

Supported `type` values: `metadata_manifest`, `trait_manifest`, `rarity_manifest`, `media_archive`, `license`, `other`.

- `type` and `uri` **MUST** be present on each entry.
- URIs **SHOULD** use `https://`, `ipfs://`, or other resolvable schemes.

---

## normalization_rules

Collection-wide string normalization applied before or after extraction:

```json
{
  "type": "trait_value",
  "from": "blue",
  "to": "Blue",
  "scope": "trait",
  "notes": ""
}
```

Supported `type`: `trait_name`, `trait_value`, `media_uri`, `asset_name`, `metadata_field`.  
Supported `scope`: `collection`, `trait`, `media`, `global`.

---

## indexing_notes

```json
{
  "severity": "warning",
  "message": "Image field may be bare IPFS CID without ipfs:// prefix."
}
```

- `severity` **MUST** be `info`, `warning`, or `critical`.
- `message` **MUST** be a non-empty string.
- Indexers **SHOULD** surface `warning` and `critical` notes in normalized output.

---

## Sourced value pattern

Many fields use a sourced value object (see also [media-mappings.md](./media-mappings.md)):

```json
{
  "value": "https://example.com",
  "source_path": "$.project.website",
  "source": "registry",
  "notes": ""
}
```

| Field | Role |
|-------|------|
| `value` | Explicit registry-declared value |
| `source_path` | Dot-path into per-NFT metadata |
| `source` | Provenance: `registry`, `cip25`, `cip68`, `custom`, `external` |
| `notes` | Human context for implementers |

### Resolution rules

1. If `value` is present, parsers **MUST** use `value` unless a field-specific rule says otherwise.
2. Else if `source_path` is present, parsers **MUST** extract from raw metadata.
3. Else the field is absent in normalized output.
4. `value` and `source_path` **MAY** both exist; `value` takes priority.
5. `source` **SHOULD** identify where the data originates.

---

## File naming convention

Registry files **SHOULD** be named:

```
{collection_id}.json
```

Example: `clay-nation.json` with `"collection_id": "clay-nation"`.

Launchpads **MAY** emit `collection-definition.json` at mint time using the same schema.
