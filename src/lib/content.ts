import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { z } from "zod";

import evolutionMap from "@/data/evolution-map.json";
import processedContent from "@/data/processed-content.json";
import type { CanonicalDoc, EvolutionaryDoc } from "@/types/content";

const canonicalSectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  order: z.number(),
  anchor: z.string(),
  body: z.string(),
});

const canonicalDocSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  order: z.number(),
  sourcePdf: z.string(),
  markdownPath: z.string(),
  wordCount: z.number(),
  sections: z.array(canonicalSectionSchema),
});

const processedContentSchema = z.array(canonicalDocSchema);

let validatedContent: CanonicalDoc[] | null = null;

function getValidatedContent(): CanonicalDoc[] {
  if (!validatedContent) {
    const result = processedContentSchema.safeParse(processedContent);
    if (!result.success) {
      console.error("[MET4] processed-content.json validation failed:", result.error.message);
      // Fall back to unvalidated cast rather than crashing the entire site
      validatedContent = processedContent as CanonicalDoc[];
    } else {
      validatedContent = result.data;
    }
  }
  return validatedContent;
}

const root = process.cwd();

/**
 * Loads the pre-parsed canonical document manifest.
 */
export function getCanonicalManifest(): CanonicalDoc[] {
  return getValidatedContent().sort((a, b) => a.order - b.order);
}

/**
 * Retrieves a full canonical document by its slug.
 * Uses the pre-parsed JSON data for O(1) retrieval.
 */
export async function getCanonicalDocBySlug(slug: string): Promise<CanonicalDoc | null> {
  const doc = getValidatedContent().find((d) => d.slug === slug);
  return doc ?? null;
}

/**
 * Retrieves evolution data for a document.
 */
export async function getEvolutionaryDocBySlug(slug: string): Promise<EvolutionaryDoc | null> {
  const doc = (evolutionMap as EvolutionaryDoc[]).find((d) => d.slug === slug);
  return doc ?? null;
}

/**
 * Retrieves all evolutionary documents.
 */
export async function getAllEvolutionaryDocs(): Promise<EvolutionaryDoc[]> {
  return evolutionMap as EvolutionaryDoc[];
}

/**
 * Retrieves all canonical documents with their sections.
 */
export async function getAllCanonicalDocs(): Promise<CanonicalDoc[]> {
  return getCanonicalManifest();
}

/**
 * Generates a plain-text excerpt from a string.
 */
export function excerpt(text: string, maxChars = 220): string {
  const flat = text.replace(/\s+/g, " ").trim();
  if (flat.length <= maxChars) {
    return flat;
  }

  return `${flat.slice(0, maxChars)}...`;
}

/**
 * Helper to read raw markdown if still needed for legacy reasons.
 */
export async function getRawMarkdown(slug: string): Promise<string | null> {
  const doc = getValidatedContent().find((d) => d.slug === slug);
  if (!doc) return null;

  try {
    const markdownAbsPath = join(root, doc.markdownPath);
    return await readFile(markdownAbsPath, "utf8");
  } catch {
    return null;
  }
}
