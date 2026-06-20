/**
 * Minimal source-path resolver for collection definition records.
 *
 * Supported syntax (v0.1):
 * - `$.attributes.Background`
 * - `attributes.Background`
 * - `$.files[0].src`
 * - `files[0].mediaType`
 *
 * Limitations:
 * - No JSONPath filters, wildcards, recursive descent, or unions
 * - Array indices must be non-negative integers in bracket notation
 * - Root `$` is optional and ignored
 */

export interface SourcePathLimitations {
  supported: string[];
  unsupported: string[];
}

export const SOURCE_PATH_LIMITATIONS: SourcePathLimitations = {
  supported: [
    "Dot-notation property access",
    "Optional leading `$` or `$.` prefix",
    "Array index access with `[n]`",
  ],
  unsupported: [
    "JSONPath filters (`[?()]`)",
    "Wildcards (`*`, `..`)",
    "Array slices",
    "Union expressions",
  ],
};

type PathSegment =
  | { type: "property"; key: string }
  | { type: "index"; index: number };

export function parseSourcePath(sourcePath: string): PathSegment[] {
  let path = sourcePath.trim();
  if (path.startsWith("$.")) {
    path = path.slice(2);
  } else if (path.startsWith("$")) {
    path = path.slice(1);
  }
  if (path.startsWith(".")) {
    path = path.slice(1);
  }

  if (!path) {
    return [];
  }

  const segments: PathSegment[] = [];
  const tokenPattern = /([^[.\]]+)|\[(\d+)\]/g;
  let match: RegExpExecArray | null;

  while ((match = tokenPattern.exec(path)) !== null) {
    if (match[1] !== undefined) {
      segments.push({ type: "property", key: match[1] });
      continue;
    }

    const indexValue = match[2];
    if (indexValue !== undefined) {
      segments.push({ type: "index", index: Number.parseInt(indexValue, 10) });
    }
  }

  return segments;
}

export function extractBySourcePath(
  rawMetadata: unknown,
  sourcePath: string,
): unknown {
  if (!sourcePath.trim()) {
    return undefined;
  }

  const segments = parseSourcePath(sourcePath);
  let current: unknown = rawMetadata;

  for (const segment of segments) {
    if (current === null || current === undefined) {
      return undefined;
    }

    if (segment.type === "property") {
      if (typeof current !== "object") {
        return undefined;
      }
      current = (current as Record<string, unknown>)[segment.key];
      continue;
    }

    if (!Array.isArray(current)) {
      return undefined;
    }
    current = current[segment.index];
  }

  return current;
}
