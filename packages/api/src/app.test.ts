import { describe, expect, it } from "vitest";
import { validateCollectionDefinition } from "@cardano-nft-collection-registry/core";
import { createRegistryApi } from "./app.js";

function assertDefinition(input: unknown) {
  const result = validateCollectionDefinition(input);
  if (!result.success) {
    throw new Error(result.errors.join(", "));
  }
  return result.data;
}

const definitions = [
  assertDefinition({
    registry_version: "1.0.0",
    collection_id: "example-collection",
    name: "Example Collection",
    definition_status: "minimal",
    policy_ids: [
      "a1b2c3d4e5f678901234567890123456789012345678901234567890",
    ],
  }),
];

describe("Registry API", () => {
  const api = createRegistryApi(definitions, {
    network: "mainnet",
    resolvedPath: "/tmp/registry/mainnet/collections",
    usedLegacyFallback: false,
  });

  it("lists collection definitions", () => {
    const response = api.handle({
      method: "GET",
      pathname: "/collections",
      searchParams: new URLSearchParams(),
    });
    expect(response.status).toBe(200);
    expect((response.body as { count: number }).count).toBe(1);
    expect(
      (response.body as { collections: Array<{ definition_status: string }> })
        .collections[0]?.definition_status,
    ).toBe("minimal");
  });

  it("gets collection definition by id", () => {
    const response = api.handle({
      method: "GET",
      pathname: "/collections/example-collection",
      searchParams: new URLSearchParams(),
    });
    expect(response.status).toBe(200);
    expect((response.body as { collection_id: string }).collection_id).toBe(
      "example-collection",
    );
  });

  it("resolves policy to collection definition", () => {
    const response = api.handle({
      method: "GET",
      pathname:
        "/policies/a1b2c3d4e5f678901234567890123456789012345678901234567890",
      searchParams: new URLSearchParams(),
    });
    expect(response.status).toBe(200);
    expect((response.body as { collection_id: string }).collection_id).toBe(
      "example-collection",
    );
  });

  it("searches collection definitions", () => {
    const response = api.handle({
      method: "GET",
      pathname: "/search",
      searchParams: new URLSearchParams({ q: "example" }),
    });
    expect(response.status).toBe(200);
    expect((response.body as { count: number }).count).toBe(1);
  });
});
