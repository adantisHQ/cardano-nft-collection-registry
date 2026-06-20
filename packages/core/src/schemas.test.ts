import { describe, expect, it } from "vitest";
import type { CollectionDefinition } from "./schemas.js";
import {
  getPoliciesForCollection,
  getTraitMappings,
  normalizeCollectionId,
  validateCollectionDefinition,
} from "./schemas.js";

const validDefinition = {
  registry_version: "1.0.0",
  collection_id: "test-collection",
  name: "Test Collection",
  definition_status: "minimal" as const,
  policy_ids: [
    "a1b2c3d4e5f678901234567890123456789012345678901234567890",
  ],
};

describe("validateCollectionDefinition", () => {
  it("accepts a valid minimal definition", () => {
    const result = validateCollectionDefinition(validDefinition);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.collection_id).toBe("test-collection");
    }
  });

  it("rejects empty policy_ids", () => {
    const result = validateCollectionDefinition({
      ...validDefinition,
      policy_ids: [],
    });
    expect(result.success).toBe(false);
  });

  it("accepts trait extraction strategies", () => {
    const result = validateCollectionDefinition({
      ...validDefinition,
      trait_mappings: [
        {
          canonical_trait: "Eyes",
          value_type: "string",
          extraction: {
            strategy: "array_singleton_object",
            source_path: "$.Attributes",
            key: "Eyes",
          },
        },
      ],
    });
    expect(result.success).toBe(true);
  });

  it("rejects invalid collection_id", () => {
    const result = validateCollectionDefinition({
      ...validDefinition,
      collection_id: "Invalid_ID",
    });
    expect(result.success).toBe(false);
  });
});

describe("normalizeCollectionId", () => {
  it("normalizes names to slug format", () => {
    expect(normalizeCollectionId("  My Cool Collection!! ")).toBe(
      "my-cool-collection",
    );
  });
});

describe("getPoliciesForCollection", () => {
  it("returns a copy of policy ids", () => {
    const definition = validDefinition as CollectionDefinition;
    const policies = getPoliciesForCollection(definition);
    expect(policies).toEqual(validDefinition.policy_ids);
    expect(policies).not.toBe(validDefinition.policy_ids);
  });
});

describe("getTraitMappings", () => {
  it("returns empty array when trait_mappings is missing", () => {
    expect(getTraitMappings(validDefinition as CollectionDefinition)).toEqual([]);
  });
});
