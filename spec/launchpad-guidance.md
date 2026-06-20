# Launchpad Guidance

This document guides **mint platforms, launchpads, and creators** publishing new Cardano NFT collections compatible with the Collection Definition Registry and ADAntis indexing.

---

## Goals for new mints

Launchpads **SHOULD** optimize for:

1. Predictable CIP-25 layout (easy `direct_path` trait extraction)
2. Valid per-NFT `image` and `mediaType`
3. Stable `collection_id` and policy ID linkage
4. Auto-generated `collection-definition.json` at mint time

Missing collection-level banner, socials, or description **MUST NOT** block mint or indexing.

---

## Recommended on-chain CIP-25 metadata

For new profile-picture (PFP) and gaming item mints, use:

```json
{
  "721": {
    "<POLICY_ID>": {
      "<ASSET_NAME>": {
        "name": "Example #1234",
        "image": "ipfs://bafy...",
        "mediaType": "image/png",
        "description": "Example NFT description.",
        "files": [
          {
            "name": "image",
            "mediaType": "image/png",
            "src": "ipfs://bafy..."
          }
        ],
        "attributes": {
          "Background": "Blue",
          "Eyes": "Laser"
        }
      }
    }
  }
}
```

### Rules

- `attributes` **SHOULD** use PascalCase or consistent casing for trait keys.
- Trait values **SHOULD** be strings (numbers **MAY** be stringified).
- `image` and `files[0].src` **SHOULD** reference the same primary asset for simple collections.
- `mediaType` **SHOULD** be a valid MIME type.

---

## Recommended collection-definition.json

Minimal viable definition for a new CIP-25 PFP drop:

```json
{
  "registry_version": "1.0.0",
  "collection_id": "example-collection",
  "name": "Example Collection",
  "definition_status": "complete",
  "policy_ids": ["<POLICY_ID>"],
  "metadata_layout": {
    "primary_standard": "cip25",
    "metadata_root": "$",
    "asset_name_encoding": "utf8",
    "cip25": {
      "label": "721",
      "policy_path": "$.721.<policy_id>",
      "asset_metadata_path": "$.721.<policy_id>.<asset_name>"
    },
    "cip68": {
      "enabled": false,
      "datum_path": null,
      "reference_token_pattern": null
    }
  },
  "trait_mappings": [
    {
      "canonical_trait": "Background",
      "display_name": "Background",
      "value_type": "string",
      "category": "visual",
      "source": "cip25",
      "extraction": {
        "strategy": "direct_path",
        "source_path": "$.attributes.Background"
      }
    }
  ],
  "media_mappings": {
    "image": {
      "source_path": "$.image",
      "source": "cip25"
    }
  }
}
```

---

## Trait mapping template

For each trait in the mint UI:

```json
{
  "canonical_trait": "Background",
  "source": "cip25",
  "extraction": {
    "strategy": "direct_path",
    "source_path": "$.attributes.Background"
  }
}
```

Launchpads **SHOULD**:

- Set `value_type` to `enum` when mint UI uses closed lists.
- Populate `allowed_values` from mint configuration.
- Add `normalization` for case variants.

---

## Automation expectations

| Actor | Responsibility |
|-------|----------------|
| Launchpad | **SHOULD** generate `collection-definition.json` from mint config |
| Launchpad | **SHOULD** validate against JSON Schema before publish |
| Creator | **MAY** hand-edit definition for legacy or complex layouts |
| Registry maintainer | **MAY** upgrade `definition_status` after review |

Advanced creators **MAY** edit definitions manually for:

- `array_singleton_object` legacy compatibility
- CIP-68 reference token collections
- Multi-policy ecosystem collections

---

## Collection-level metadata at mint time

Launchpads **MAY** include in the definition (not required on each NFT):

| Field | Location |
|-------|----------|
| Website | `link_mappings.website` |
| X / Discord | `social_mappings` |
| Banner / logo | `media_mappings.banner`, `media_mappings.logo` |
| License | `license_info` |

These **MAY** be added later via enrichment; indexing **MUST NOT** wait for them.

---

## CIP-68 mints

CIP-68 collections **SHOULD**:

- Set `metadata_layout.primary_standard` to `cip68`
- Set `cip68.enabled` to `true`
- Document reference token resolution in `indexing_notes`
- Use `definition_status: "partial"` until trait decoding is fully specified

See [examples/cip68-partial.collection-definition.json](./examples/cip68-partial.collection-definition.json).

---

## Anti-patterns

Launchpads **SHOULD NOT**:

- Store per-NFT traits only in the registry (traits belong on chain)
- Rely on undeclared extraction strategies
- Mark `definition_status: "complete"` without validating sample metadata
- Embed “verified” or royalty enforcement flags not in schema

---

## ADAntis operational onboarding

ADAntis bulk import accepts minimal operational payloads (`policyId`, `name`, `metadataProfile`, `parseEnabled`) plus optional URLs when available.

Collection definition registry files are the **technical parsing standard**; ADAntis POST is the **operational registration** step. Both **MAY** proceed independently.

ADAntis bulk-import scripts, batch manifests, and dry-run logs are maintained locally by ADAntis operators under `ops/` and `tools/adantis-private/` (excluded from the public registry preview).
