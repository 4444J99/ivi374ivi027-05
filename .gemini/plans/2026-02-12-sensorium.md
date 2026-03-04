# Implementation Plan: Phase 6 - The Sensorium

**Objective:** Escalate the MET4 experience from a textual archive to an immersive audio-visual universe using 3D rendering and generative sound.

## Strategic Components

### 1. The Chrono-Helix (3D Visualization)
*Concept: Time is a spiral. The 15 books of Ovid are not a flat list, but an ascending helix.*
- **Tech Stack:** `three`, `@react-three/fiber`, `@react-three/drei`.
- **Architecture:**
    - Replace `NodeMapExperience` SVG with a WebGL Canvas.
    - **Z-Axis Mapping:** Map `Sikl` number to vertical height (Cycle 1 is bottom, Cycle 15 is top).
    - **Helix Layout:** Position nodes using `x = cos(t), z = sin(t), y = sikl`.
    - **Interaction:** OrbitControls for "flying" through the mythic history.

### 2. The Glitch Synth (Generative Audio)
*Concept: The text sings its own structure.*
- **Tech Stack:** Native Web Audio API (no heavy external libs).
- **Logic:**
    - **Drone Layer:** A background ambient drone tuned to the "Theme" of the active node (e.g., `@APOLO` = Warm/Major, `@PLVTO` = Dark/Minor).
    - **Glitch Layer:** Stochastic clicks and cuts triggered by the text's `fragmentationScore`.
    - **Interaction:** Hovering nodes modulates the filter frequency (low-pass to high-pass).

## Execution Roadmap

### Step 1: Foundation (Dependencies)
- Install 3D libraries.
- Create `src/components/sensorium/` directory.

### Step 2: The Audio Engine
- Implement `src/lib/audio/synth.ts`.
- Create `useGlitchSynth` hook to bridge React state and AudioContext.

### Step 3: The 3D Canvas
- Create `src/components/sensorium/galaxy.tsx`.
- Implement `NodeStar` component (instanced mesh for performance).
- Implement `ConstellationLines` (3D geometry).

### Step 4: Integration
- Update `src/app/page.tsx` to conditionally render the 3D Sensorium or the 2D Mobile List based on device capability (or user toggle).

## Outcome
The project becomes a "World" rather than a "Website." Users don't just read the thesis; they inhabit it.
