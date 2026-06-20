import { describe, expect, it } from "vitest";
import { normalizeCollectionMetadata } from "./parser.js";
import type { TraitMapping } from "./schemas.js";
import { validateCollectionDefinition } from "./schemas.js";
import { extractTraitValue } from "./trait-extraction.js";

function mapping(partial: TraitMapping): TraitMapping {
  return partial;
}

describe("extractTraitValue", () => {
  it("direct_path reads value from extraction.source_path", () => {
    const result = extractTraitValue(
      { attributes: { Eyes: "Blue" } },
      mapping({
        canonical_trait: "Eyes",
        value_type: "string",
        extraction: {
          strategy: "direct_path",
          source_path: "$.attributes.Eyes",
        },
      }),
    );

    expect(result.value).toBe("Blue");
    expect(result.warnings).toEqual([]);
  });

  it("first_existing_path uses source_paths in order", () => {
    const result = extractTraitValue(
      { traits: { background: "Green" } },
      mapping({
        canonical_trait: "Background",
        value_type: "string",
        source_paths: ["$.attributes.Background", "$.traits.background"],
        extraction: { strategy: "first_existing_path" },
      }),
    );

    expect(result.value).toBe("Green");
    expect(result.warnings).toEqual([]);
  });

  it("falls back to source_paths when extraction is absent", () => {
    const result = extractTraitValue(
      { attributes: { background: "blue" } },
      mapping({
        canonical_trait: "Background",
        value_type: "string",
        source_paths: ["$.attributes.background"],
        normalization: { blue: "Blue" },
      }),
    );

    expect(result.value).toBe("Blue");
    expect(result.warnings).toEqual([]);
  });

  it("array_singleton_object finds keyed value in singleton object array", () => {
    const metadata = {
      Attributes: [
        { Accessories: "None" },
        { Eyes: "Blue" },
        { Background: "Green" },
      ],
    };

    const result = extractTraitValue(
      metadata,
      mapping({
        canonical_trait: "Eyes",
        value_type: "string",
        extraction: {
          strategy: "array_singleton_object",
          source_path: "$.Attributes",
          key: "Eyes",
        },
      }),
    );

    expect(result.value).toBe("Blue");
    expect(result.warnings).toEqual([]);
  });

  it("array_singleton_object supports Pavia land parcel layout", () => {
    const metadata = {
      "-----Land Sale 1-----": [{ type: "Land" }, { x: "-71" }, { y: "-82" }],
    };

    const xResult = extractTraitValue(
      metadata,
      mapping({
        canonical_trait: "x",
        value_type: "string",
        extraction: {
          strategy: "array_singleton_object",
          source_path: "$.-----Land Sale 1-----",
          key: "x",
        },
      }),
    );

    expect(xResult.value).toBe("-71");
  });

  it("key_value_array finds value by key_field match", () => {
    const metadata = {
      properties: [
        { key: "Background", value: "Blue" },
        { key: "Eyes", value: "Green" },
      ],
    };

    const result = extractTraitValue(
      metadata,
      mapping({
        canonical_trait: "Background",
        value_type: "string",
        extraction: {
          strategy: "key_value_array",
          source_path: "$.properties",
          key: "Background",
          key_field: "key",
          value_field: "value",
        },
      }),
    );

    expect(result.value).toBe("Blue");
    expect(result.warnings).toEqual([]);
  });

  it("root_flat_keys reads trait from metadata root", () => {
    const metadata = {
      Fur: "Gray Tabby",
      Eyes: "Serious Red",
      name: "Boss Cat Rocket Club #1",
    };

    const result = extractTraitValue(
      metadata,
      mapping({
        canonical_trait: "Fur",
        value_type: "string",
        extraction: {
          strategy: "root_flat_keys",
          key: "Fur",
        },
      }),
    );

    expect(result.value).toBe("Gray Tabby");
  });

  it("root_flat_keys supports keys with spaces", () => {
    const metadata = {
      "hats and hair": "Clay Nation Hat & Mullet",
      body: "Tan Clay",
    };

    const result = extractTraitValue(
      metadata,
      mapping({
        canonical_trait: "hats_and_hair",
        value_type: "string",
        extraction: {
          strategy: "root_flat_keys",
          key: "hats and hair",
        },
      }),
    );

    expect(result.value).toBe("Clay Nation Hat & Mullet");
  });

  it("applies normalization after extraction", () => {
    const result = extractTraitValue(
      {
        Attributes: [{ Background: "green" }],
      },
      mapping({
        canonical_trait: "Background",
        value_type: "enum",
        allowed_values: ["Green"],
        normalization: { green: "Green" },
        extraction: {
          strategy: "array_singleton_object",
          source_path: "$.Attributes",
          key: "Background",
        },
      }),
    );

    expect(result.value).toBe("Green");
    expect(result.warnings).toEqual([]);
  });

  it("returns warning when trait is not found", () => {
    const result = extractTraitValue(
      { Attributes: [{ Eyes: "Blue" }] },
      mapping({
        canonical_trait: "Background",
        value_type: "string",
        extraction: {
          strategy: "array_singleton_object",
          source_path: "$.Attributes",
          key: "Background",
        },
      }),
    );

    expect(result.value).toBeUndefined();
    expect(result.warnings).toContain("Trait not found: Background");
  });

  it("returns required warning when required trait is not found", () => {
    const result = extractTraitValue(
      {},
      mapping({
        canonical_trait: "Background",
        value_type: "string",
        required: true,
        source_paths: ["$.attributes.Background"],
      }),
    );

    expect(result.value).toBeUndefined();
    expect(result.warnings).toContain("Missing required trait: Background");
  });
});

describe("normalizeCollectionMetadata with extraction strategies", () => {
  it("normalizes Mallard-style Attributes via array_singleton_object", () => {
    const definition = validateCollectionDefinition({
      registry_version: "1.0.0",
      collection_id: "the-mallard-order",
      name: "The Mallard Order",
      definition_status: "partial",
      policy_ids: [
        "901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f4834",
      ],
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

    if (!definition.success) {
      throw new Error(definition.errors.join(", "));
    }

    const result = normalizeCollectionMetadata(
      {
        Attributes: [{ Accessories: "None" }, { Eyes: "Soulless" }],
      },
      definition.data,
    );

    expect(result.traits["Eyes"]).toBe("Soulless");
  });
});
