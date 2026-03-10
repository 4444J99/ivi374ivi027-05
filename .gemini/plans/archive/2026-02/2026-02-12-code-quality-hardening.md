# Implementation Plan: Code Quality & Hardening

**Objective:** Elevate the repository to production-grade engineering standards through modular refactoring, strict type safety, and comprehensive testing.

## 1. Modularization & Refactoring
- **Issue**: `src/components/node-map-experience.tsx` has grown too large (3D, 2D, Audio, UI logic).
- **Refactor**: 
    - Extract 2D SVG logic to `src/components/node-map/node-map-2d.tsx`.
    - Extract state management (zoom, pan, activeNode) to a custom hook `src/hooks/use-node-navigation.ts`.
- **Issue**: `src/lib/codex/ai-engine.ts` has hardcoded heuristics.
- **Refactor**: Move constants to a configuration file and use dependency injection for the `StyleDNA`.

## 2. Type Safety & Documentation
- **API Documentation**: Add JSDoc to all exported functions in `src/lib/content-engine`, `src/lib/codex`, and `src/lib/audio`.
- **Enforce Naming**: Ensure all types follow the `PascalCase` convention and props use `interface` where appropriate.
- **Strict Typing**: Audit new files for `any` or `any as any` and replace with specific Zod schemas or TS interfaces.

## 3. Comprehensive Testing
- **Unit Tests**:
    - `tests/unit/content-engine.test.ts`: Test `parseSections` with edge cases (empty text, nested markers).
    - `tests/unit/codex-ai.test.ts`: Verify `SmartGenerator` logic (entity injection, glitch consistency).
    - `tests/unit/audio-synth.test.ts`: Mock `AudioContext` to verify synth state transitions.
- **Integration Tests**:
    - `tests/integration/evolution-flow.test.tsx`: Verify the draft selector correctly updates the diff view.

## 4. Linting & Formatting
- **Standardization**: Run `npm run lint` and `prettier` (if configured) to ensure every file matches the 2-space, semicolon, double-quote standard defined in `AGENTS.md`.

## Execution Roadmap

### Step 1: In-depth Audit
- Read `src/components/node-map-experience.tsx` and `src/lib/codex/ai-engine.ts` again to plan the exact split points.

### Step 2: Refactor Components
- Create the smaller, focused sub-components and hooks.

### Step 3: API Documentation
- Apply JSDoc to the core libraries.

### Step 4: Test Suite Expansion
- Write the new unit tests.

### Step 5: Final Cleanup
- Fix all linting errors.
