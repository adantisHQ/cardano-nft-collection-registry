import { describe, expect, it } from "vitest";
import { normalizeCollectionMetadata } from "./parser.js";
import { validateCollectionDefinition } from "./schemas.js";

function assertDefinition(input: unknown) {
  const result = validateCollectionDefinition(input);
  if (!result.success) {
    throw new Error(result.errors.join(", "));
  }
  return result.data;
}

const definition = assertDefinition({
  registry_version: "1.0.0",
  collection_id: "pixel-pals",
  name: "Pixel Pals",
  definition_status: "complete",
  policy_ids: [
    "deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
  ],
  trait_mappings: [
    {
      canonical_trait: "Background",
      value_type: "enum",
      source_paths: ["$.attributes.background", "$.attributes.Background"],
      normalization: { blue: "Blue" },
    },
  ],
  media_mappings: {
    image: { source_path: "$.image", source: "cip25" },
    logo: { value: "https://example.com/logo.png", source: "registry" },
  },
  social_mappings: {
    x: { value: "https://x.com/pixelpals", source: "registry" },
  },
  link_mappings: {
    website: { value: "https://example.com", source: "registry" },
  },
  license_info: {
    license: { value: "CC BY-NC 4.0", source: "registry" },
  },
  royalty_info: {
    has_royalties: true,
    royalty_percentage: { value: 5, source: "registry" },
  },
  indexing_notes: [
    {
      severity: "info",
      message: "Test indexing note",
    },
  ],
});

describe("normalizeCollectionMetadata", () => {
  it("normalizes traits, media, socials, links, license, and royalties", () => {
    const result = normalizeCollectionMetadata(
      {
        attributes: { background: "blue" },
        image: "ipfs://asset-image",
      },
      definition,
    );

    expect(result.collection_id).toBe("pixel-pals");
    expect(result.traits["Background"]).toBe("Blue");
    expect(result.media["image"]).toBe("ipfs://asset-image");
    expect(result.media["logo"]).toBe("https://example.com/logo.png");
    expect(result.socials["x"]).toBe("https://x.com/pixelpals");
    expect(result.links["website"]).toBe("https://example.com");
    expect(result.license["license"]).toBe("CC BY-NC 4.0");
    expect(result.royalties["has_royalties"]).toBe(true);
    expect(result.royalties["royalty_percentage"]).toBe(5);
    expect(result.warnings.some((warning) => warning.includes("Test indexing note"))).toBe(
      true,
    );
  });
});
