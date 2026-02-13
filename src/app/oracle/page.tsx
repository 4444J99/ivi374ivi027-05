import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { Metadata } from "next";
import { z } from "zod";
import { OracleExperience } from "@/components/oracle-experience";
import type { StyleDNA } from "@/lib/codex/analyzer";

const styleDnaSchema = z.object({
  entityRegistry: z.record(z.string(), z.number()),
  vocabularySize: z.number(),
  avgSentenceLength: z.number(),
  fragmentationScore: z.number(),
  glitchPatterns: z.object({
    capsLockRatio: z.number(),
    symbolDensity: z.number(),
  }),
});

export const metadata: Metadata = {
  title: "Oracle",
  description:
    "AI-powered stylistic analysis of MET4MORFOSES — the Oracle reads the thesis DNA and reveals patterns in language, fragmentation, and glitch aesthetics.",
};

export default async function OraclePage() {
  const root = process.cwd();
  const dnaPath = join(root, "src/data/style-dna.json");
  const raw = JSON.parse(await readFile(dnaPath, "utf8"));
  const result = styleDnaSchema.safeParse(raw);

  let dna: StyleDNA;
  if (result.success) {
    dna = result.data;
  } else {
    console.error("[MET4:Oracle] style-dna.json validation failed:", result.error.message);
    dna = raw as StyleDNA;
  }

  return (
    <main>
      <OracleExperience dna={dna} />
    </main>
  );
}
