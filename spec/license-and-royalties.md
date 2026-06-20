# License and Royalties

License and royalty sections store **declared, informational** metadata. They do **not** enforce legal terms or on-chain royalties by themselves.

---

## license_info

```json
{
  "license": {
    "value": "CC BY-NC 4.0",
    "source": "registry"
  },
  "license_url": {
    "value": "https://creativecommons.org/licenses/by-nc/4.0/",
    "source": "registry"
  },
  "commercial_use": {
    "value": false,
    "source": "registry"
  },
  "derivative_use": {
    "value": true,
    "source": "registry"
  }
}
```

All sub-fields use the [sourced value pattern](../spec/collection-definition.md#sourced-value-pattern).

### Fields

| Field | Type | Purpose |
|-------|------|---------|
| `license` | string | Short license name or summary |
| `license_url` | string (URI) | Link to full license text |
| `commercial_use` | boolean | Whether commercial use is permitted (declared) |
| `derivative_use` | boolean | Whether derivatives are permitted (declared) |

### Rules

- Values **MAY** be extracted from on-chain metadata when present (`source: "cip25"`).
- Absence of `license_info` **MUST NOT** imply public domain.
- Implementations **MUST NOT** interpret these fields as legal advice.
- Marketplaces **SHOULD** display license text with link to authoritative source.

---

## royalty_info

```json
{
  "has_royalties": true,
  "source": "registry",
  "royalty_percentage": {
    "value": 5,
    "source": "registry"
  },
  "royalty_address": {
    "value": "addr1...",
    "source": "registry"
  },
  "notes": "Informational only; not enforced by this registry."
}
```

### Top-level fields

| Field | Requirement |
|-------|-------------|
| `has_royalties` | **MAY** be boolean flag |
| `source` | **SHOULD** be one of: `cip27`, `royalty_token`, `marketplace`, `registry`, `unknown` |
| `royalty_percentage` | Sourced value; numeric percent (document scale in notes) |
| `royalty_address` | Sourced value; Cardano address receiving royalties |
| `royalty_token` | Optional `{ policy_id, asset_name }` for royalty-bearing tokens |
| `notes` | Human-readable context |

### royalty_token (optional)

```json
"royalty_token": {
  "policy_id": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789ab",
  "asset_name": "ROYALTY"
}
```

Use when royalties are declared via a specific on-chain token rather than CIP-27 metadata alone.

---

## Informational only — normative disclaimers

Implementations **MUST** treat royalty fields as **informational** unless a separate enforcement layer exists.

| Claim | Allowed |
|-------|---------|
| “Registry documents declared royalty percentage” | **YES** |
| “Registry enforces marketplace royalties” | **NO** |
| “Registry verifies royalty address” | **NO** |
| “has_royalties: true guarantees payment” | **NO** |

- CIP-27, marketplace policies, and smart contracts **MAY** enforce royalties elsewhere.
- This registry **MAY** record known values for indexers and UIs.
- Creators **SHOULD** confirm royalty fields against official project statements.

---

## Relationship to ADAntis bulk import

ADAntis collection POST onboarding **MUST NOT** include royalty or verified fields in bulk manifests. Royalty data belongs in collection definition registry files and future enrichment flows.

---

## Absent data

- Missing `license_info` or `royalty_info` **MUST NOT** downgrade `definition_status` by itself.
- Indexers **SHOULD** emit empty objects `{}` for license/royalties in normalized output when unknown.
