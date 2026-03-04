# Implementation Plan: Phase 5 - The Masterwork

Objective: Transform the MET4 ecosystem into a scholarly, relational, and intelligently generative platform that project's the author's voice into the full Metamorphoses corpus.

## Phase 1: Scholarly Framework (Immediate)
- **Goal**: Add an academic layer to the reading experience.
- **Actions**:
    - Update `src/types/content.ts` with `CommentaryEntry`.
    - Create `src/data/commentary.json`.
    - Refactor `src/components/reader-sections.tsx` to support a "Scholarly View" (dual-pane).

## Phase 2: Transformation Ontology (Foundational)
- **Goal**: Define relationships between myths based on the nature of change.
- **Actions**:
    - Create `src/data/ontology.json` mapping myths to "Metamorphosis Categories" (Avian, Floral, Mineral, Divine, etc.).
    - Update `scripts/build-node-map-data.ts` to draw edges based on these categories.

## Phase 3: Multimedia Synthesis (Visual)
- **Goal**: Link original thesis designs to digital cycles.
- **Actions**:
    - Create `scripts/map-visual-artifacts.ts` to scan `public/mirror` for relevant images.
    - Implement `ArtifactOverlay` component.

## Phase 4: Intelligent Oracle (Generative)
- **Goal**: Move from Regex to semantic AI.
- **Actions**:
    - Implement `src/lib/codex/ai-engine.ts`.
    - (Future) Integrate with an LLM API using the Style DNA as a system prompt.

## Phase 5: Signal Broadcasting (Outflow)
- **Goal**: Automate real-world publishing.
- **Actions**:
    - Create `scripts/broadcast-signal.ts` targeting Bluesky/X APIs.

---

### Starting Phase 1...
