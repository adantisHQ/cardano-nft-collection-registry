# Social and Link Mappings

Collection definitions carry **declared links**. The registry describes links; it **does not certify** them.

---

## Important limitations

- Implementations **MUST NOT** define “verified socials” in this schema.
- Implementations **MUST NOT** define trust badges or creator verification flags here.
- Links are **informational** for display and discovery.
- Users and applications **SHOULD** apply their own phishing and safety checks.

---

## social_mappings

Maps known social platforms to sourced values:

```json
{
  "x": {
    "value": "https://x.com/example",
    "source": "registry"
  },
  "discord": {
    "value": "https://discord.gg/example",
    "source": "registry"
  }
}
```

### Supported social keys

Implementations **SHOULD** accept these keys (additional keys **MAY** use `other` pattern via custom keys — schema allows any string key):

| Key | Platform |
|-----|----------|
| `x` | X (formerly Twitter) |
| `discord` | Discord invite or server URL |
| `telegram` | Telegram group or channel |
| `github` | GitHub organization or repo |
| `youtube` | YouTube channel or video |
| `instagram` | Instagram profile |
| `tiktok` | TikTok profile |
| `medium` | Medium publication |
| `reddit` | Subreddit or user |
| `linkedin` | LinkedIn page |
| `other` | Fallback; **SHOULD** include context in `notes` |

Keys are lowercase. URLs **SHOULD** use `https://`.

### Extraction from metadata

Social links **MAY** be extracted from on-chain metadata when stable:

```json
"discord": {
  "source_path": "$.Official Links[2].Discord",
  "source": "cip25",
  "notes": "Array order assumed stable."
}
```

Resolution follows the sourced value pattern: explicit `value` overrides `source_path`.

---

## link_mappings

Official and project URLs distinct from social platforms:

```json
{
  "website": {
    "value": "https://example.com",
    "source": "registry"
  },
  "documentation": {
    "value": "https://docs.example.com",
    "source": "registry"
  }
}
```

### Supported link types

| Key | Purpose |
|-----|---------|
| `website` | Primary project website |
| `mint` | Mint or launch page |
| `documentation` | Docs site |
| `whitepaper` | Whitepaper or litepaper |
| `game` | Game client or world URL |
| `app` | Web app or dashboard |
| `explorer` | Collection-specific explorer view |
| `marketplace` | Preferred marketplace link |
| `terms` | Terms of service |
| `support` | Support portal or contact |
| `metadata` | Metadata manifest or policy page |
| `other` | Other official link (describe in `notes`) |

Schema allows additional keys via `additionalProperties` on `link_mappings`.

---

## Overlap with trait mappings

Some legacy collections embed links inside metadata arrays (e.g. `Official Links`). Projects **MAY**:

- Map links only in `social_mappings` / `link_mappings`, **or**
- Also expose per-token link traits for indexing (see membership example in [examples/](./examples/)).

Indexers **SHOULD** prefer collection-level mappings for UI footers and marketplaces.

---

## Normalized output

Indexers **SHOULD** emit:

```json
{
  "socials": {
    "x": "https://x.com/example",
    "discord": "https://discord.gg/example"
  },
  "links": {
    "website": "https://example.com"
  }
}
```

Omit keys with no resolved URL.

---

## Enrichment lifecycle

Bulk onboarding **MAY** register collections with minimal links. A separate enrichment pipeline **MAY** update registry files or ADAntis records later without changing policy IDs.

See `docs/mainnet-enrichment-roadmap.md`.
