# Implementation Plan: Phase 1 - Performance & Reliability

Objective: Harden the content ingestion pipeline and optimize runtime performance by moving from on-the-fly Markdown parsing to a pre-rendered structured JSON data model.

## User Stories
- As a Developer, I want a single source of truth for text normalization and section parsing so that my data stays consistent between scripts and the website.
- As a User, I want the reader and node map to load faster without the server having to parse Markdown files on every request.
- As a CI Engineer, I want a clear way to ensure all dependencies like `pdftotext` are present before the build starts.

## Proposed Changes

### 1. Shared Ingestion Library
- Create `src/lib/content-engine/index.ts` to export shared utilities.
- Implement `slugify`, `normalizeText`, and `parseSections` in the engine.
- Ensure `parseSections` handles unique section ID generation to prevent collisions (e.g., Cycle-prefixed IDs).

### 2. Static Pre-parsing Pipeline
- Update `scripts/ingest-canonical.ts`:
    - Use the shared engine logic.
    - Instead of just writing raw `.md` files, also generate a single `src/data/processed-content.json` file.
    - This JSON will contain the full `CanonicalDoc` structure including pre-parsed `sections`.

### 3. Runtime Optimization
- Update `src/lib/content.ts`:
    - Deprecate `parseSections` inside this file.
    - Update `getCanonicalDocBySlug` to read from `src/data/processed-content.json`.
    - This turns the doc loading into a simple O(1) lookup in memory (or a single JSON read).

### 4. Integrity Verification
- Update `scripts/verify-mirror-integrity.ts` to use the shared engine for anchor validation.
- Add a check to ensure `src/data/processed-content.json` is in sync with the Markdown files.

### 5. Dependency Management
- Create `scripts/setup-deps.sh` to provide a one-line command for installing `poppler-utils`.
- Update `README.md` with "System Dependencies" section.

## Verification Plan

### Automated Tests
- Run `npm test` to ensure existing `CanonicalDoc` tests still pass with the new data source.
- Update `tests/unit/canonical-content.test.ts` to verify the pre-parsed JSON structure.
- Run `npm run content:build` and verify `src/data/processed-content.json` is generated correctly.

### Manual Verification
- Start the site with `npm run dev`.
- Navigate to `/read/intro` and verify all sections and anchors work.
- Use the Node Map to jump to sections and ensure the scroll positions are correct.
