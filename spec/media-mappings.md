# Media Mappings

The `media_mappings` section defines how to resolve **visual and animated media** for a collection.

---

## Canonical structure

```json
{
  "image": {
    "source": "cip25",
    "source_path": "$.image"
  },
  "thumbnail": {
    "value": "ipfs://...",
    "source": "registry"
  },
  "banner": {
    "value": "ipfs://...",
    "source": "registry"
  },
  "logo": {
    "value": "ipfs://...",
    "source": "registry"
  },
  "animation": {
    "source_path": "$.animation_url",
    "source": "cip25"
  },
  "files": [
    {
      "label": "Primary file",
      "source_path": "$.files[0].src",
      "media_type_path": "$.files[0].mediaType",
      "source": "cip25"
    }
  ]
}
```

All leaf fields use the [sourced value pattern](./collection-definition.md#sourced-value-pattern).

---

## Field semantics

| Field | Scope | Description |
|-------|-------|-------------|
| `image` | Per-NFT | Primary token image **MUST** come from on-chain metadata when using `source_path` |
| `thumbnail` | Collection or per-NFT | Smaller preview; **MAY** be registry-level |
| `banner` | Collection | Wide header image; **MAY** be registry-level explicit `value` |
| `logo` | Collection | Square / mark logo; **MAY** be registry-level explicit `value` |
| `animation` | Per-NFT | Video, HTML, or interactive asset URI |
| `files` | Per-NFT | Additional media entries (CIP-25 `files[]`) |

---

## image

- **SHOULD** map to CIP-25 `image` field for standard mints.
- Indexers **MUST** resolve IPFS, HTTP, and bare CID forms when possible.
- Bare CIDs **SHOULD** be normalized to `ipfs://` in output (see `normalization_rules`).

```json
"image": {
  "source_path": "$.image",
  "source": "cip25"
}
```

---

## thumbnail, banner, logo

Collection-level branding **MAY** use explicit registry values when not present on each NFT:

```json
"banner": {
  "value": "https://cdn.example.com/banner.png",
  "source": "registry"
}
```

- Launchpads **SHOULD** still embed per-NFT `image` on chain.
- Banner/logo **MAY** be enriched later without changing trait mappings.

---

## animation

Maps interactive or video assets:

```json
"animation": {
  "source_path": "$.src",
  "source": "cip25",
  "notes": "HTML interactive asset (type text/html)."
}
```

Indexers **SHOULD** preserve `mediaType` when available from `files[]`.

---

## files array

Each entry **MAY** include:

| Field | Requirement |
|-------|-------------|
| `label` | **SHOULD** describe the file |
| `source_path` | **SHOULD** point to URI field |
| `media_type_path` | **SHOULD** point to MIME type field |
| `value` | **MAY** be used for registry-static file |
| `source` | **SHOULD** identify provenance |
| `notes` | Optional |

Example (CIP-25 files list):

```json
"files": [
  {
    "label": "Primary image file",
    "source_path": "$.files[0].src",
    "media_type_path": "$.files[0].mediaType",
    "source": "cip25"
  }
]
```

---

## Resolution order

For each media slot:

1. Use explicit `value` if present.
2. Else extract via `source_path`.
3. Else omit from normalized `media` output.

---

## URI normalization

Indexers **SHOULD**:

- Accept `ipfs://`, `https://`, and bare IPFS CIDs.
- Reject `javascript:` and other unsafe schemes.
- Emit warnings for unresolvable or relative URLs without a base.

---

## Relationship to trait mappings

- Media fields on metadata root (e.g. `image`, `mediaType`) **MUST NOT** be double-exposed as traits unless explicitly mapped.
- Gaming collections with HTML `src` **SHOULD** use `animation` mapping, not `image`.
