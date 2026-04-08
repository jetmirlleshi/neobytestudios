// NEOBYTE STUDIOS — TypeScript types
// Single source of truth for shape of all domain data.

export type DivisionSlug = "writer" | "forge" | "games" | "vision";

export type DivisionColorToken =
  | "primary"
  | "secondary"
  | "tertiary"
  | "accent-yellow";

export interface DivisionFeature {
  title: string;
  description: string;
  /** Optional target audience label (used in Games section) */
  target?: string;
  /** Optional Material Symbols icon name */
  icon?: string;
}

export interface Division {
  slug: DivisionSlug;
  name: string;
  shortName: string;
  colorToken: DivisionColorToken;
  /** Hex value of the primary accent for this division */
  hex: string;
  icon: string;
  statusLabel: string;
  tagline: string;
  description: string;
  capabilities: string[];
  features: DivisionFeature[];
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  colorToken: DivisionColorToken;
  active?: boolean;
}

export interface EvolutionStep {
  id: string;
  title: string;
  description: string;
  status: string;
  colorToken: DivisionColorToken;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}
