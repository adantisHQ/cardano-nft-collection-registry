import { describe, expect, it } from "vitest";
import { extractBySourcePath, parseSourcePath } from "./source-path.js";

describe("parseSourcePath", () => {
  it("parses dot notation with optional root prefix", () => {
    expect(parseSourcePath("$.attributes.Background")).toEqual([
      { type: "property", key: "attributes" },
      { type: "property", key: "Background" },
    ]);
  });

  it("parses array indices", () => {
    expect(parseSourcePath("$.files[0].src")).toEqual([
      { type: "property", key: "files" },
      { type: "index", index: 0 },
      { type: "property", key: "src" },
    ]);
  });
});

describe("extractBySourcePath", () => {
  const metadata = {
    attributes: { Background: "Blue", background: "blue" },
    files: [{ src: "ipfs://file", mediaType: "image/png" }],
    project: { telegram: "https://t.me/example" },
  };

  it("extracts nested properties", () => {
    expect(extractBySourcePath(metadata, "$.attributes.Background")).toBe("Blue");
  });

  it("extracts array values", () => {
    expect(extractBySourcePath(metadata, "$.files[0].src")).toBe("ipfs://file");
  });

  it("returns undefined for missing paths", () => {
    expect(extractBySourcePath(metadata, "$.missing.path")).toBeUndefined();
  });
});
