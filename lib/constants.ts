export const siteConfig = {
  name: "NeoByte Studios",
  title: "NeoByte Studios | Where AI Unlocks Imagination",
  description:
    "Quattro prodotti AI — Writer, Forge, Games, Vision — orbitano attorno al tuo concept. Tu porti la scintilla, noi costruiamo pianeta, cielo e fandom.",
  tagline: "◉ WHERE AI UNLOCKS IMAGINATION",
  url: "https://neobytestudios.com",
  email: "hello@neobytestudios.com",
};

export const navLinks = [
  { label: "Prodotti", href: "/#prodotti" },
  { label: "Studio", href: "/#studio" },
  { label: "Contatti", href: "/#contatti" },
] as const;

export interface Division {
  slug: string;
  name: string;
  shortName: string;
  n: string;
  tag: string;
  desc: string;
  bullets: string[];
  metric: string;
  accent: string;
  color: "primary" | "secondary" | "tertiary" | "yellow";
  icon: string;
  statusLabel: string;
  tagline: string;
  description: string;
  features: { title: string; description: string; icon?: string }[];
  heroImage: string;
  featureImage?: string;
}

export const divisions: Division[] = [
  {
    slug: "writer",
    name: "Writer",
    shortName: "WRITER",
    n: "01",
    tag: "Il tuo co-autore AI",
    desc: "Writer non scrive al posto tuo: scrive con te. Ti aiuta a strutturare idee, sviluppare personaggi, tenere coerente la lore e superare il foglio bianco — mantenendo la tua voce al centro della storia.",
    bullets: [
      "Brainstorm guidato & outline",
      "Coerenza di lore e personaggi",
      "Revisione e sviluppo delle tue bozze",
    ],
    metric: "La tua voce, moltiplicata",
    accent: "#c084fc",
    color: "primary",
    icon: "edit_note",
    statusLabel: "Active Narrative Core",
    tagline: "Il tuo co-autore AI",
    description:
      "Writer non scrive al posto tuo: scrive con te. Ti aiuta a strutturare idee, sviluppare personaggi, tenere coerente la lore e superare il foglio bianco.",
    features: [
      { title: "Brainstorm guidato & outline", description: "", icon: "auto_stories" },
      { title: "Coerenza di lore e personaggi", description: "", icon: "terminal" },
      { title: "Revisione e sviluppo delle tue bozze", description: "", icon: "edit" },
    ],
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCs7za-NCuzVOwqanI703O_fEYbHjJnd4CmWDDr1sTnl6bcfqSf-6Jpmq4uItkkI6rSFQLchL8r07rGL-Lql4MFNqMaIulbWC75hqvcC_pNnKBi_CIKh3h3wqIXtrHCpXjSkw8FjqCIKqdtkkijYe1m4fIKpJh84Y6OWsymnQguzrcPHKrVJC7n1zCzJZJdqCh8vf1J0TCwyKi49RGAQR8drSG4tZxPwVJLtRak5DdXZE5DPcr2Yrmnrede-MWmzlcSJhIUDU_pnQ",
  },
  {
    slug: "forge",
    name: "Forge",
    shortName: "FORGE",
    n: "02",
    tag: "Il motore generativo",
    desc: "Forge trasforma la scrittura in asset: concept art, character sheet, ambienti, texture, motion. Un'intera pipeline visiva compressa in ore.",
    bullets: [
      "Concept art & key-art",
      "Asset 2D/3D pronti",
      "Stile consistente on-IP",
    ],
    metric: "2.400+ asset generati / mese",
    accent: "#60a5fa",
    color: "secondary",
    icon: "memory",
    statusLabel: "Structural Logic Engaged",
    tagline: "Il motore generativo",
    description:
      "Forge trasforma la scrittura in asset: concept art, character sheet, ambienti, texture, motion.",
    features: [
      { title: "Concept art & key-art", description: "", icon: "brush" },
      { title: "Asset 2D/3D pronti", description: "", icon: "view_in_ar" },
      { title: "Stile consistente on-IP", description: "", icon: "palette" },
    ],
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAm89zgvYTziQdm2TJKkrvJ3qkbktZCQEIOj60qrLuYkFOksJT_wriLKyR0iecIWAB7x0Cp_S9mRpjr8clVQk1zLYPTvrCnwM0kHd55hpfSBKU_si-jWQobEAjm2j5DvMkKWvHBAdlBAb2-vqRE0o8gTrQ8FOFhPDa5MymDUnZ-FphVSMRPObwO5AUuR54cWr7Xg8Lq7Ig8TadSnvcilfvJNY7coJv5fr-gO1HpAV2L4qdKghD1kg_3zE4SqRyG63Qufd3Hlc1wsg",
  },
  {
    slug: "games",
    name: "Games",
    shortName: "GAMES",
    n: "03",
    tag: "L'universo diventa giocabile",
    desc: "Games attinge direttamente dalla lore scritta con Writer e dagli asset creati con Forge per costruire mondi interattivi coerenti. La stessa IP, ora giocabile — senza ripartire da zero.",
    bullets: [
      "Mondi costruiti su lore Writer",
      "Asset e ambienti da Forge",
      "Prototipi, quest, esperienze XR",
    ],
    metric: "Una IP, un universo giocabile",
    accent: "#22c55e",
    color: "tertiary",
    icon: "sports_esports",
    statusLabel: "Interactive Mode: Live",
    tagline: "L'universo diventa giocabile",
    description:
      "Games attinge direttamente dalla lore scritta con Writer e dagli asset creati con Forge per costruire mondi interattivi coerenti.",
    features: [
      { title: "Mondi costruiti su lore Writer", description: "", icon: "public" },
      { title: "Asset e ambienti da Forge", description: "", icon: "landscape" },
      { title: "Prototipi, quest, esperienze XR", description: "", icon: "videogame_asset" },
    ],
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzIRGAngt4ZlN-mFWZuavZ3xJwSXAKeOUfJ1zv84pVVJ5GCgznPxUAiZdKwZ1dUEmdyfiWrXyD-0rjypMaHXAXigQAZwXi4LkgwkFzKzV1AK0dPJ42K-uD-0zlHA3j5XMiDzX28l0cKIgrcd1OgQMdqo0FazIsS4P-3jMFjebq9DuaUy-CmdprO0UqlkavW9PtNEcjo58OPz-CGGBpOriaWDkFC6JcPqwMd6vORbEy0eRmH2OnfKI-QL9FuL8JD9hn78Ji_vci5A",
  },
  {
    slug: "vision",
    name: "Vision",
    shortName: "VISION",
    n: "04",
    tag: "La narrazione cinematografica",
    desc: "Vision è la sala di montaggio della tua IP: trailer, serie animate, shorts e campagne cinematic che costruiscono fandom a scala globale.",
    bullets: [
      "Trailer & reveal",
      "Serie animate & shorts",
      "Campagne social motion",
    ],
    metric: "+430% reach medio al lancio",
    accent: "#f0b545",
    color: "yellow",
    icon: "movie_filter",
    statusLabel: "Strategic Foresight",
    tagline: "La narrazione cinematografica",
    description:
      "Vision è la sala di montaggio della tua IP: trailer, serie animate, shorts e campagne cinematic.",
    features: [
      { title: "Trailer & reveal", description: "", icon: "movie" },
      { title: "Serie animate & shorts", description: "", icon: "animation" },
      { title: "Campagne social motion", description: "", icon: "campaign" },
    ],
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAeTBLGNpGeEnuC2DK2hvanVTPRs6EJ997wjgWzl9SdenBHg14VIkRBL5h5VAGw6BYIAZujv-GhOSM8Xv1ZVJrdP56zV2563h6umrlAiRzm6-CpxoX2QMhgWGu00QBke8EUMtlaBx8FCG7mvcIFid0mWPHNM2MwxEc49XEvwF-0wZAPLNrPSc_oNU-fs39JveEg0FzDiI_l-MlhQWBlZfziMmMg3owjwAbgUx7lrSjDM0LwyH_KjcmhMR93lsunkjDJTix6-lk57g",
  },
];

export const phases = [
  {
    n: "01",
    name: "Spark",
    desc: "Una call, una logline, un mood board. In 72h hai il pitch deck della tua IP.",
  },
  {
    n: "02",
    name: "Build",
    desc: "Writer e Forge lavorano in parallelo: lore scritta, character sheet, concept art pronti.",
  },
  {
    n: "03",
    name: "Launch",
    desc: "Vision produce trailer e campagna reveal. Games costruisce la demo giocabile del lancio.",
  },
  {
    n: "04",
    name: "Orbit",
    desc: "La community inizia a orbitare. Tu hai la IP, noi i dati per farla crescere.",
  },
];

export const forYouProfiles = [
  {
    icon: "◉",
    title: "Hai una storia che nessuno ha ancora raccontato.",
    desc: "Un mondo, un personaggio, un'idea che ti ronza da mesi. Writer ti aiuta a strutturarla, Forge le dà un volto, Vision la porta al pubblico.",
  },
  {
    icon: "◐",
    title: "Hai già una IP e vuoi farla crescere.",
    desc: "Serie, fumetto, progetto indipendente: gli stessi quattro motori estendono il tuo universo su nuovi media — senza perdere coerenza.",
  },
  {
    icon: "◎",
    title: "Vuoi esplorare un'idea prima di investirci.",
    desc: "In poche settimane puoi avere un pitch, concept art, un trailer e una demo giocabile. Decidi dai risultati, non dalle promesse.",
  },
];

export const flowLabels = [
  { label: "idea → lore", color: "rgba(192, 132, 252, 0.333)" },
  { label: "lore → asset visivi", color: "rgba(96, 165, 250, 0.333)" },
  { label: "asset → mondi giocabili", color: "rgba(34, 197, 94, 0.333)" },
  { label: "universo → fandom", color: "rgba(240, 181, 69, 0.333)" },
];

export const heroImages = {
  homepage: "",
  about: "",
  philosophy: "",
  cta: "",
  divisionCards: {
    writer: divisions[0].heroImage,
    forge: divisions[1].heroImage,
    games: divisions[2].heroImage,
    vision: divisions[3].heroImage,
  },
  studioEvolution: {
    cosmicIgnition: "",
    galacticExpansion: "",
    stellarPersistence: "",
  },
};

export const timelineItems = phases.map((p) => ({
  year: p.n,
  title: p.name,
  description: p.desc,
  color: "primary" as const,
}));

export const studioEvolution: {
  id: string;
  title: string;
  description: string;
  status: string;
  color: "primary" | "secondary" | "tertiary";
  icon: string;
  image: string;
}[] = [];
