# Implementation Plan: MET4 Evolution (The "Giant Leap")

**Objective:** Transform the repository from a static archive into a generative, evolutionary engine ("MET4-GEN") that preserves the history of the work, codifies its unique linguistic DNA, and algorithmically generates future cycles.

## Strategic Phases

### Phase 1: The Codex (Language Codification)
*Goal: Mathematically define the "MET4" style to enable authentic generation.*
1.  **Style DNA Analyzer:** Create `scripts/analyze-style-dna.ts`.
    *   Extract frequency maps of `@` handles (Character vs. Concept).
    *   Analyze "Glitch Syntax": spacing patterns, capitalization rules, punctuation density.
    *   Output: `src/data/style-dna.json` (The "Rules").
2.  **The Lexicon:** Generate a structured dictionary of the "dialect" (e.g., `sikl`, `mvs`, `met4morfoses`).

### Phase 2: The Time Machine (Evolutionary Archive)
*Goal: Represent the transformation of the text itself.*
1.  **Draft Ingestion:** Expand `ingest-canonical.ts` to process the `older versions` folders in `public/mirror`.
2.  **Diff Engine:** Implement a "Textual Diff" mode (`/evolution/[docSlug]`) that visualizes the changes between Draft 4, Draft 5, and the Canonical (Draft 6) text.
3.  **Visual Metamorphosis:** Use the diff data to animate the text "morphing" from one draft to another.

### Phase 3: The Oracle (Generative Expansion)
*Goal: Continue the work algorithmically.*
1.  **Prompt Engineering (The "Ghost" Agent):** Create a robust System Prompt based on the `style-dna.json` that instructs an LLM to write in the voice of the author.
2.  **Generator Script:** `scripts/generate-cycle-4.ts`.
    *   Input: A raw Ovid myth (e.g., "Pygmalion").
    *   Process: Apply MET4 rules (Glitch, `@` entities, layout).
    *   Output: A new "Synthetic Cycle" markdown file.
3.  **Feed Bot:** Automate the posting of these synthetic snippets to the `/feed`.

### Phase 4: The Academy (Gravitas & Analysis)
*Goal: Prove value through rigorous study.*
1.  **Academic Report Generator:** A script that analyzes the text for specific literary devices (e.g., "The frequency of the word 'gold' vs 'synthetic' across cycles") and generates charts.
2.  **Sentiment Topology:** Visualize the "Emotional Landscape" of the cycles as a 3D terrain map.

---

## Immediate Next Step: Phase 1 (The Codex)

To build anything generative, we must first understand the rules.

**Proposed Task:**
1.  Create `src/lib/codex/` directory.
2.  Implement `scripts/analyze-style-dna.ts` to scan the current canonical text and extract:
    *   Entity Registry (All `@` terms).
    *   Syntax patterns (average sentence length, fragmentation ratio).
3.  Generate `src/data/style-dna.json`.

This JSON file will serve as the "Training Data" for the generative models in Phase 3.
