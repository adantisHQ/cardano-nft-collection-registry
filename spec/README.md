# Cardano NFT Collection Definition Registry — Public Specification

**Registry schema version:** `1.0.0`  
**Spec status:** Public preview (not a CIP submission)

---

## What this registry is

The **Cardano NFT Collection Definition Registry** is a collection-level metadata standard.

It does **not** store every NFT’s metadata. It stores **interpretation rules** that explain how applications should parse, normalize, and present a collection given a Cardano **policy ID**.

**Core question:**

> Given a `policy_id`, how should an application interpret this collection?

---

## What the registry supports

| Area | Purpose |
|------|---------|
| Collection identity | Name, description, category, tags |
| Policy IDs | One or more minting policies for the collection |
| Metadata layout | CIP-25 / CIP-68 / custom structure hints |
| Trait mappings | How to extract and normalize traits |
| Trait normalization | Value aliases, allowed enums |
| Media mappings | Image, thumbnail, banner, logo, animation, files |
| Social links | X, Discord, Telegram, etc. |
| Official links | Website, docs, mint page, etc. |
| External resources | Manifests, archives, license URIs |
| License information | Declared license terms (informational) |
| Royalty information | Declared royalty data (informational) |
| Indexing notes | Warnings and operator context |

---

## What this registry is not

- **Not** a per-NFT metadata database
- **Not** a replacement for [CIP-25](https://github.com/cardano-foundation/CIPs/blob/master/CIP-0025/README.md) or [CIP-68](https://github.com/cardano-foundation/CIPs/blob/master/CIP-0068/README.md)
- **Not** a trust, verification, or badge system for social links
- **Not** marketplace royalty enforcement
- **Not** a submitted public CIP (yet)

---

## Normative language

This specification uses [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119) keywords:

| Term | Meaning |
|------|---------|
| **MUST** | Absolute requirement |
| **MUST NOT** | Absolute prohibition |
| **SHOULD** | Recommended; valid reasons may exist to differ |
| **SHOULD NOT** | Discouraged |
| **MAY** | Optional |

---

## Specification documents

| Document | Topic |
|----------|--------|
| [collection-definition.md](./collection-definition.md) | Canonical record structure and required fields |
| [metadata-layout.md](./metadata-layout.md) | CIP-25 / CIP-68 layout interpretation |
| [trait-mappings.md](./trait-mappings.md) | Trait mapping objects |
| [extraction-strategies.md](./extraction-strategies.md) | Supported extraction strategies |
| [media-mappings.md](./media-mappings.md) | Image, banner, logo, animation, files |
| [social-link-mappings.md](./social-link-mappings.md) | Social and official link mappings |
| [license-and-royalties.md](./license-and-royalties.md) | License and royalty fields |
| [launchpad-guidance.md](./launchpad-guidance.md) | Guidance for mint platforms |
| [indexer-guidance.md](./indexer-guidance.md) | Guidance for indexers and wallets |
| [versioning.md](./versioning.md) | Schema versioning rules |
| [examples.md](./examples.md) | Worked examples |

**JSON Schema (normative machine-readable):**

- `schemas/collection-definition.schema.json`
- `schemas/trait-mapping.schema.json`
- `schemas/sourced-value.schema.json`

---

## Evidence base (implementation status)

As of this spec preview, the registry has been validated against real Cardano mainnet collections:

- 101 ADAntis mainnet collections onboarded (operational reference)
- 50+ collections inspected during registry authoring
- 30+ collection definitions in `registry/mainnet/collections/`
- Raw metadata normalization tested against dominant CIP-25 layouts
- Extraction strategies validated: `direct_path`, `first_existing_path`, `array_singleton_object`, `key_value_array`, `root_flat_keys`

---

## Audience

| Reader | Start here |
|--------|------------|
| Launchpad / mint tool | [launchpad-guidance.md](./launchpad-guidance.md) |
| Indexer / marketplace | [indexer-guidance.md](./indexer-guidance.md) |
| Creator / project | [collection-definition.md](./collection-definition.md), [examples.md](./examples.md) |
| Wallet / bridge | [indexer-guidance.md](./indexer-guidance.md) |
| Schema implementer | JSON Schema + [versioning.md](./versioning.md) |

---

## Related repository docs

Internal engineering docs remain in `docs/` (e.g. `docs/registry-model.md`, `docs/trait-mappings.md`). This `spec/` directory is the **public-facing normative package** for external adopters.
