# Future Standardization

This document describes a **possible** path toward a formal Cardano Improvement Proposal (CIP). It is not a CIP draft and does not imply current standard status.

## Current status

The Cardano NFT Collection Definition Registry is a **practical specification format** maintained as an open repository. It is optimized for:

- ADAntis marketplace integration
- Indexer correctness
- Wallet and analytics consumption
- Real-world collection metadata messiness

## Why not a CIP yet

Formal CIPs benefit from battle-tested schemas and multiple independent implementations. This project prioritizes:

1. Real collection coverage
2. Indexer and marketplace validation
3. Schema iteration based on production feedback

Premature standardization would slow practical adoption and risk encoding wrong assumptions.

## What would migrate to a CIP

If the community later pursues standardization, a CIP might normatively specify:

- Collection Definition Record JSON schema
- Required and optional fields
- Policy-to-collection mapping semantics
- Trait schema format
- Indexing hint vocabulary
- Registry discovery and versioning

Non-normative appendices could include CLI/API patterns and example records.

## What would stay out of band

Even with a future CIP:

- **Per-NFT data** — remains in indexers
- **Marketplace listings** — commercial, not standard
- **Verification** — only if a real attestation model exists
- **Central registry operator** — governance is a separate concern

## Criteria before proposing a CIP

- [ ] Schema stable for multiple release cycles
- [ ] At least two independent consumer implementations (indexer, wallet, marketplace, etc.)
- [ ] Documented migration from v1 registry records
- [ ] Community review of governance and update process
- [ ] Clear relationship to CIP-25 and CIP-68 (complementary, not replacement)

## Relationship to existing CIPs

| CIP | Relationship |
|-----|--------------|
| CIP-25 | Defines NFT metadata format; registry interprets per collection |
| CIP-68 | Defines token datum patterns; registry documents extraction paths |
| Hypothetical collection CIP | Would standardize collection-level registry records |

## How to contribute to this path

1. Use the registry in production tooling and report schema gaps
2. Submit collection records with accurate indexing notes
3. Propose schema changes via issues and PRs with real-world justification
4. Discuss standardization in issues when criteria above are met

Until then, treat this repository as the source of truth for ADAntis and community integrations—not as an official Cardano standard.
