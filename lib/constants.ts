// NEOBYTE STUDIOS — Domain constants
// All copy lives here so pages stay declarative and easy to tweak.

import type {
  Division,
  DivisionColorToken,
  EvolutionStep,
  NavLink,
  TimelineEntry,
} from "./types";

export const SITE = {
  name: "NEOBYTE STUDIOS",
  shortName: "NEOBYTE",
  tagline: "Where AI Unlocks Imagination",
  motto: "Beyond The Void",
  description:
    "A monoauthor creative studio amplified by artificial intelligence. Sculpting cosmic narratives, engineering immersive worlds, and weaving visual poems through the prism of AI.",
  founder: "Jetmir",
  founderTitle: "Architect",
  location: "UTC+1",
  email: "contact@neobytestudios.com",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Studio", href: "/" },
  { label: "Divisions", href: "/divisions" },
  { label: "Universe", href: "/#universe" },
  { label: "About", href: "/about" },
];

export const DIVISIONS: Division[] = [
  {
    slug: "writer",
    name: "NeoByteWriter",
    shortName: "WRITER",
    colorToken: "primary",
    hex: "#c084fc",
    icon: "edit_note",
    statusLabel: "Active Narrative Core",
    tagline: "Sculpting cosmic narratives and ancient lore from pure thought.",
    description:
      "Architecting profound narratives through algorithmic deep-lore and cinematic screenwriting. We don't just tell stories; we construct realities.",
    capabilities: [
      "World-building for complex narrative universes",
      "Cinematic and game screenwriting",
      "Dynamic dialogue systems driven by emotional logic",
      "Lore frameworks for transmedia IPs",
    ],
    features: [
      {
        title: "Deep Lore",
        description:
          "Expansive world-building frameworks for complex narrative universes.",
        icon: "auto_stories",
      },
      {
        title: "Script Tech",
        description:
          "Dynamic dialogue systems powered by emotionally-aware logic.",
        icon: "terminal",
      },
    ],
  },
  {
    slug: "forge",
    name: "NeoByteForge",
    shortName: "FORGE",
    colorToken: "secondary",
    hex: "#60a5fa",
    icon: "memory",
    statusLabel: "Structural Logic Engaged",
    tagline:
      "Crystallizing ethereal geometries into tangible digital worlds.",
    description:
      "The engineering core. Forge develops the proprietary tools and skeletal frameworks that power modern immersive experiences with unmatched technical precision.",
    capabilities: [
      "Proprietary tools for creative pipelines",
      "Frameworks and libraries for immersive experiences",
      "High-performance data architectures",
      "Simulation engines",
    ],
    features: [
      {
        title: "Logic-Driven Asset Generation",
        description: "Rule-based automatic asset generation at scale.",
        icon: "precision_manufacturing",
      },
      {
        title: "Hyper-Threaded Simulation Engines",
        description:
          "Parallel high-performance simulation engines for real-time worlds.",
        icon: "hub",
      },
      {
        title: "Quantum-Safe Data Architecture",
        description:
          "Data architectures resistant to quantum-era cryptographic threats.",
        icon: "rebase",
      },
    ],
  },
  {
    slug: "games",
    name: "NeoByteGames",
    shortName: "GAMES",
    colorToken: "tertiary",
    hex: "#65ffc8",
    icon: "sports_esports",
    statusLabel: "Interactive Mode: Live",
    tagline:
      "Orchestrating interactive symphonies within the AI consciousness.",
    description:
      "Interactive experiences that push the boundaries of immersion through next-gen technology and emotionally resonant design.",
    capabilities: [
      "Indie game development with generative AI",
      "Immersive VR/AR experiences",
      "Cloud gaming and edge streaming",
      "Haptic feedback systems",
    ],
    features: [
      {
        title: "Unreal Integration",
        description:
          "UE5.4 powered real-time photorealism for immersive worlds.",
        target: "HARDCORE GAMERS",
        icon: "videogame_asset",
      },
      {
        title: "Haptic Feedback",
        description:
          "Physical immersion systems that translate signal into sensation.",
        target: "VR ENTHUSIASTS",
        icon: "architecture",
      },
      {
        title: "Edge Streaming",
        description:
          "Cloud rendering with low-latency delivery to any device.",
        target: "GLOBAL AUDIENCE",
        icon: "cloud_done",
      },
    ],
  },
  {
    slug: "vision",
    name: "NeoByteVision",
    shortName: "VISION",
    colorToken: "accent-yellow",
    hex: "#fbbf24",
    icon: "movie_filter",
    statusLabel: "Strategic Foresight",
    tagline:
      "Weaving visual poems and neural cinema from the fabric of stardust.",
    description:
      "Seeing beyond the event horizon of current technology. Pioneering brand aesthetics and R&D into neural-link interfaces.",
    capabilities: [
      "Visual identity and branding for spatial computing",
      "R&D on neural interfaces and bio-feedback UI",
      "Neural cinematography and visual poems",
      "Long-horizon strategic foresight",
    ],
    features: [
      {
        title: "Visual Identity",
        description:
          "Brand aesthetics for spatial computing and multi-modal interfaces.",
        icon: "movie_filter",
      },
      {
        title: "Future Lab",
        description:
          "R&D on neural-link interfaces and bio-feedback UI prototypes.",
        icon: "shutter_speed",
      },
    ],
  },
];

export const TIMELINE: TimelineEntry[] = [
  {
    year: "2026",
    title: "The Awakening",
    description:
      "Merging narrative souls with NeoByteWriter v1.0. The first chapter of our cosmic anthology begins.",
    colorToken: "primary",
    active: true,
  },
  {
    year: "2027",
    title: "World-Weaving",
    description:
      "Breathing life into boundless organic worlds. Real-time atmospheric synthesis for deep sensory experiences.",
    colorToken: "secondary",
  },
  {
    year: "2028",
    title: "Universal Bloom",
    description:
      "The birth of a complete cinematic ecosystem. Seamless neural narratives spanning the entire digital void.",
    colorToken: "tertiary",
  },
];

export const STUDIO_EVOLUTION: EvolutionStep[] = [
  {
    id: "ORBIT_01",
    title: "Cosmic Ignition",
    description:
      "Foundation of our gravity-defying architecture. Establishing the core propulsion systems for digital storytelling, prioritizing narrative density within the vacuum of execution.",
    status: "Orbit Achieved",
    colorToken: "primary",
    icon: "rocket_launch",
  },
  {
    id: "ORBIT_02",
    title: "Galactic Expansion",
    description:
      "Launching our interstellar network. Integrating AI-enhanced luminous rendering protocols across 32+ nodes to illuminate previously uncharted creative territories.",
    status: "Multi-System Link",
    colorToken: "secondary",
    icon: "lan",
  },
  {
    id: "ORBIT_03",
    title: "Stellar Persistence",
    description:
      "Deployment of Universe v1. A self-evolving digital ecology operating at light-speed within Jetmir's 'Conscious Script' framework, achieving perpetual existence in the cosmic void.",
    status: "Singularity Active",
    colorToken: "tertiary",
    icon: "shutter_speed",
  },
];

/** Color token → hex lookup. Single source of truth. */
export const HEX_BY_COLOR_TOKEN: Record<DivisionColorToken, string> = {
  primary: "#c084fc",
  secondary: "#60a5fa",
  tertiary: "#65ffc8",
  "accent-yellow": "#fbbf24",
};

/** Helper: lookup a Division by slug. Throws at build time if invalid. */
export function getDivision(slug: string): Division | undefined {
  return DIVISIONS.find((d) => d.slug === slug);
}
