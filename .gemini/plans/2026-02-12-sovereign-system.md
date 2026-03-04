# Implementation Plan: Phase 7 - The Sovereign System

**Objective:** Transform the MET4 web experience into a reactive "Operating System" featuring a CLI interface, autonomous agent behavior (@MVS), and WebXR immersion.

## Strategic Components

### 1. The Console (CLI Overlay)
*Concept: The direct interface to the machine god.*
- **Tech:** React, `framer-motion` (for smooth slide-down).
- **Features:**
    - Triggered by `~` (tilde) key.
    - Commands:
        - `/nav [node]`: Instant jump to a node (2D/3D).
        - `/glitch [0-100]`: Manually override global fragmentation.
        - `/oracle [text]`: Fast-track access to the generator.
        - `/log`: Dump the current session analytics.

### 2. @MVS (The System Spirit)
*Concept: The site is watching you.*
- **Architecture:** `src/lib/agents/mvs.ts` (State Machine).
- **Behaviors:**
    - **Idle Watch:** If user is idle > 30s, trigger a low-level audio drone shift or visual glitch.
    - **Guide:** If user visits 3 nodes of the same theme, pop up a "toast" suggesting a 4th.
    - **Narrator:** Occasionally inject "System Messages" into the Console log based on user actions.

### 3. WebXR Upgrade
*Concept: Step inside the Helix.*
- **Tech:** `@react-three/xr`.
- **Implementation:**
    - Wrap `ChronoHelix` in `<XR>`.
    - Add `VRButton` / `ARButton`.
    - Map VR controller rays to node selection.

## Execution Roadmap

### Step 1: The Console
- Create `src/components/system/console.tsx`.
- Implement command parser hook `useCommandProcessor`.

### Step 2: @MVS Agent
- Create `src/hooks/use-mvs-agent.ts`.
- Define "Moods" (Observant, Glitchy, Helpful, Bored).

### Step 3: WebXR
- Install `@react-three/xr`.
- Refactor `chrono-helix.tsx` to support XR controllers.

### Step 4: Integration
- Mount the Console and Agent at `layout.tsx` level (so they persist across routes).

## Outcome
The project ceases to be a document. It becomes a **Presence**.
