# MET4MORFOSES Web Edition - Project Context

## Project Overview
MET4MORFOSES Web Edition is a digital representation of Anthony James Padavano's MFA thesis project. It is implemented as an immersive, multi-mode web experience using Next.js 16 and TypeScript. The site serves as a creative archive and exploration of a thesis reimagining Ovid's *Metamorphoses*.

### Core Technologies
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS 4
- **Validation:** Zod
- **Analytics:** PostHog (Client-side tracking with server-side proxy)
- **Testing:** Vitest (Unit/Integration), Playwright (E2E)
- **Content:** Markdown (Generated from source PDFs)

### Architectural Modes
The application features several viewing modes:
- `/`: **Mythic Node Map** - An interactive constellation of narrative nodes.
- `/feed`: **Faux Social Feed** - A simulated social media experience reflecting thesis motifs.
- `/scroll`: **Three-Cycle Scroll** - A continuous scroll experience of the three thesis cycles.
- `/read/[docSlug]`: **Canonical Reader** - An inline reader for the primary thesis texts.
- `/archive`: **Mirror Downloads** - A directory of original thesis artifacts (PDFs, Pages, etc.).
- `/about`: **Portfolio Context** - Contextual information about the project.

## Content Pipeline
The project features a custom build-time pipeline that ingests source PDFs and generates the data required for the web experience.

### Source Data
Canonical PDFs are stored in `public/mirror/2018-03-20 - met4 - sixth draft/`. These are treated as immutable source artifacts.

### Ingestion Scripts (`scripts/*.ts`)
1.  **`ingest-canonical`**: Extracts text from PDFs using `pdftotext` (requires Poppler installed on the system) and writes to `src/content/*.md`.
2.  **`build-mirror-manifest`**: Catalogs all files in `public/mirror` with metadata and SHA-256 hashes.
3.  **`build-node-map-data`**: Generates the narrative graph and feed items.
4.  **`qa-canonical-fidelity`**: Validates extraction quality, enforcing a ≤8% character delta between PDF and Markdown.
5.  **`verify-mirror-integrity`**: Checks data invariants and links.

The full pipeline is run via `npm run content:build`.

## Key Commands

### Development
- `npm run dev`: Starts the development server (using Turbopack).
- `npm run start`: Serves the production build.

### Building
- `npm run build`: Runs the content pipeline followed by the Next.js production build.
- `npm run content:build`: Runs the data ingestion and verification scripts only.
- `npm run build:analyze`: Build with bundle analyzer.

### Testing and Linting
- `npm run lint`: Runs ESLint.
- `npm run typecheck`: Runs strict TypeScript checks.
- `npm test`: Runs Vitest unit and integration tests.
- `npm run test:e2e`: Runs Playwright E2E tests (default port 3007).

## Development Conventions

### Coding Style
- **TypeScript:** Strict typing is mandatory. Use `@/*` path aliases for `src/*`.
- **Formatting:** 2-space indentation, semicolons, double quotes.
- **Naming:** kebab-case for filenames, PascalCase for React components.
- **React:** Functional components with standard Next.js file conventions (`page.tsx`, `layout.tsx`).

### Testing Practices
- **Layers:** Unit tests for logic, Integration tests for routes/components, E2E for critical user flows.
- **Mocks:** `next/link` and `next/navigation` are mocked in `vitest.setup.tsx`.
- **Coverage:** Meaningful coverage is expected for new logic or transforms.

### Git Conventions
- **Commits:** Use Conventional Commits (`feat:`, `fix:`, `chore:`, etc.).
- **Workflow:** PRs should include summaries and screenshots for UI changes.

## File Structure Highlights
- `src/app`: Routes and API handlers.
- `src/components`: UI components.
- `src/lib`: Domain logic (content loading, node map helpers, mirror utilities).
- `src/data`: Generated JSON manifests and reports.
- `src/content`: Generated Markdown files.
- `public/mirror`: Canonical thesis artifacts.
- `tests/`: Organized by `unit`, `integration`, and `e2e`.

## Environment Configuration
Set the following in `.env.local` (refer to `.env.example`):
- `NEXT_PUBLIC_POSTHOG_KEY`
- `NEXT_PUBLIC_POSTHOG_HOST`
- `POSTHOG_KEY`
- `POSTHOG_HOST`

If analytics keys are missing, the application will function correctly but events will not be forwarded.

<!-- ORGANVM:AUTO:START -->
## System Context (auto-generated — do not edit)

**Organ:** ORGAN-II (Art) | **Tier:** standard | **Status:** LOCAL
**Org:** `organvm-ii-poiesis` | **Repo:** `ivi374ivi027-05`

### Edges
- **Produces** → `unspecified`: creative-artifact
- **Consumes** ← `ORGAN-I`: theory-artifact

### Siblings in Art
`core-engine`, `performance-sdk`, `example-generative-music`, `metasystem-master`, `example-choreographic-interface`, `showcase-portfolio`, `archive-past-works`, `case-studies-methodology`, `learning-resources`, `example-generative-visual`, `example-interactive-installation`, `example-ai-collaboration`, `docs`, `a-mavs-olevm`, `a-i-council--coliseum` ... and 14 more

### Governance
- Consumes Theory (I) concepts, produces artifacts for Commerce (III).

*Last synced: 2026-03-08T20:11:34Z*

## Session Review Protocol

At the end of each session that produces or modifies files:
1. Run `organvm session review --latest` to get a session summary
2. Check for unimplemented plans: `organvm session plans --project .`
3. Export significant sessions: `organvm session export <id> --slug <slug>`
4. Run `organvm prompts distill --dry-run` to detect uncovered operational patterns

Transcripts are on-demand (never committed):
- `organvm session transcript <id>` — conversation summary
- `organvm session transcript <id> --unabridged` — full audit trail
- `organvm session prompts <id>` — human prompts only


## Active Directives

| Scope | Phase | Name | Description |
|-------|-------|------|-------------|
| system | any | prompting-standards | Prompting Standards |
| system | any | research-standards-bibliography | APPENDIX: Research Standards Bibliography |
| system | any | research-standards | METADOC: Architectural Typology & Research Standards |
| system | any | sop-ecosystem | METADOC: SOP Ecosystem — Taxonomy, Inventory & Coverage |
| system | foundation | agent-seeding-and-workforce-planning | agent-seeding-and-workforce-planning |
| system | any | autopoietic-systems-diagnostics | SOP: Autopoietic Systems Diagnostics (The Mirror of Eternity) |
| system | any | cicd-resilience-and-recovery | SOP: CI/CD Pipeline Resilience & Recovery |
| system | any | cross-agent-handoff | SOP: Cross-Agent Session Handoff |
| system | any | document-audit-feature-extraction | SOP: Document Audit & Feature Extraction |
| system | any | essay-publishing-and-distribution | SOP: Essay Publishing & Distribution |
| system | any | market-gap-analysis | SOP: Full-Breath Market-Gap Analysis & Defensive Parrying |
| system | foundation | ontological-renaming | ontological-renaming |
| system | any | pitch-deck-rollout | SOP: Pitch Deck Generation & Rollout |
| system | any | promotion-and-state-transitions | SOP: Promotion & State Transitions |
| system | foundation | readme-and-documentation | readme-and-documentation |
| system | any | repo-onboarding-and-habitat-creation | SOP: Repo Onboarding & Habitat Creation |
| system | any | research-to-implementation-pipeline | SOP: Research-to-Implementation Pipeline (The Gold Path) |
| system | any | security-and-accessibility-audit | SOP: Security & Accessibility Audit |
| system | any | session-self-critique | session-self-critique |
| system | any | source-evaluation-and-bibliography | SOP: Source Evaluation & Annotated Bibliography (The Refinery) |
| system | any | stranger-test-protocol | SOP: Stranger Test Protocol |
| system | any | strategic-foresight-and-futures | SOP: Strategic Foresight & Futures (The Telescope) |
| system | any | typological-hermeneutic-analysis | SOP: Typological & Hermeneutic Analysis (The Archaeology) |

Linked skills: cross-agent-handoff, evaluation-to-growth, planning-and-roadmapping, repo-onboarding-and-habitat-creation, structural-integrity-audit


**Prompting (Google)**: context 1M tokens (Gemini 1.5 Pro), format: markdown, thinking: thinking mode (thinkingConfig)

<!-- ORGANVM:AUTO:END -->


## ⚡ Conductor OS Integration
This repository is a managed component of the ORGANVM meta-workspace.
- **Orchestration:** Use `conductor patch` for system status and work queue.
- **Lifecycle:** Follow the `FRAME -> SHAPE -> BUILD -> PROVE` workflow.
- **Governance:** Promotions are managed via `conductor wip promote`.
- **Intelligence:** Conductor MCP tools are available for routing and mission synthesis.
