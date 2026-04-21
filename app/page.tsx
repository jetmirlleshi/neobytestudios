"use client";

import * as React from "react";

/* ---------- Shared data + primitives ---------- */

const NB_CONTENT = {
  brand: "NeoByte Studios",
  tagline: "Where AI Unlocks Imagination",
  claim: "Immagina. Noi costruiamo l'orbita.",
  subclaim:
    "Quattro prodotti AI che ti accompagnano nell'intero ciclo di vita di una nuova IP — dalla prima scintilla alla community globale.",
  nav: [
    { label: "Prodotti", href: "#prodotti" },
    { label: "Studio", href: "#studio" },
    { label: "Contatti", href: "#contatti" },
  ],
  products: [
    {
      n: "01",
      code: "WRITER",
      name: "Writer",
      tag: "Il tuo co-autore AI",
      desc: "Writer non scrive al posto tuo: scrive con te. Ti aiuta a strutturare idee, sviluppare personaggi, tenere coerente la lore e superare il foglio bianco — mantenendo la tua voce al centro della storia.",
      bullets: [
        "Brainstorm guidato & outline",
        "Coerenza di lore e personaggi",
        "Revisione e sviluppo delle tue bozze",
      ],
      metric: "La tua voce, moltiplicata",
      hue: 280,
      image: "/assets/hero-writer.png",
      accent: "#c084fc",
    },
    {
      n: "02",
      code: "FORGE",
      name: "Forge",
      tag: "Il motore generativo",
      desc: "Forge trasforma la scrittura in asset: concept art, character sheet, ambienti, texture, motion. Un'intera pipeline visiva compressa in ore.",
      bullets: [
        "Concept art & key-art",
        "Asset 2D/3D pronti",
        "Stile consistente on-IP",
      ],
      metric: "2.400+ asset generati / mese",
      hue: 210,
      image: "/assets/hero-forge.png",
      accent: "#60a5fa",
    },
    {
      n: "03",
      code: "GAMES",
      name: "Games",
      tag: "L'universo diventa giocabile",
      desc: "Games attinge direttamente dalla lore scritta con Writer e dagli asset creati con Forge per costruire mondi interattivi coerenti. La stessa IP, ora giocabile — senza ripartire da zero.",
      bullets: [
        "Mondi costruiti su lore Writer",
        "Asset e ambienti da Forge",
        "Prototipi, quest, esperienze XR",
      ],
      metric: "Una IP, un universo giocabile",
      hue: 140,
      image: "/assets/hero-games.png",
      accent: "#22c55e",
    },
    {
      n: "04",
      code: "VISION",
      name: "Vision",
      tag: "La narrazione cinematografica",
      desc: "Vision è la sala di montaggio della tua IP: trailer, serie animate, shorts e campagne cinematic che costruiscono fandom a scala globale.",
      bullets: [
        "Trailer & reveal",
        "Serie animate & shorts",
        "Campagne social motion",
      ],
      metric: "+430% reach medio al lancio",
      hue: 40,
      image: "/assets/hero-vision.png",
      accent: "#f0b545",
    },
  ],
};

type Product = (typeof NB_CONTENT.products)[number];

const Logo = ({ size = 36 }: { size?: number }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: 8,
      overflow: "hidden",
      display: "inline-flex",
      flexShrink: 0,
      position: "relative",
      boxShadow:
        "0 0 22px rgba(168,85,247,0.55), 0 0 3px rgba(168,85,247,0.9) inset",
    }}
  >
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/assets/logo-neon.png"
      alt="NeoByte"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>
);

const useScrollY = () => {
  const [y, setY] = React.useState(0);
  React.useEffect(() => {
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    window.addEventListener("scroll", on, { passive: true });
    on();
    return () => {
      window.removeEventListener("scroll", on);
      cancelAnimationFrame(raf);
    };
  }, []);
  return y;
};

const useMouse = () => {
  const [m, setM] = React.useState({ x: 0.5, y: 0.5 });
  React.useEffect(() => {
    const on = (e: PointerEvent) =>
      setM({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener("pointermove", on);
    return () => window.removeEventListener("pointermove", on);
  }, []);
  return m;
};

const useInView = (
  ref: React.RefObject<HTMLElement | null>,
  threshold = 0.15,
) => {
  const [v, setV] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setV(true);
      },
      { threshold },
    );
    io.observe(ref.current);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return v;
};

const ArrowR = ({ size = 14 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* Starfield background (canvas) */
const Starfield = ({
  density = 1,
  twinkle = true,
  hue = 270,
}: {
  density?: number;
  twinkle?: boolean;
  hue?: number;
}) => {
  const ref = React.useRef<HTMLCanvasElement | null>(null);
  React.useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let stars: { x: number; y: number; r: number; a: number; s: number }[] = [];
    let w = 0,
      h = 0,
      raf = 0;
    const resize = () => {
      w = c.width = window.innerWidth * devicePixelRatio;
      h = c.height = window.innerHeight * devicePixelRatio;
      const n = Math.floor(((w * h) / 6000) * density);
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 * devicePixelRatio + 0.3,
        a: Math.random() * Math.PI * 2,
        s: Math.random() * 0.6 + 0.2,
      }));
    };
    resize();
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        const alpha = twinkle ? 0.5 + Math.sin(s.a) * 0.5 : 0.8;
        s.a += 0.015 * s.s;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue + (Math.random() > 0.9 ? 60 : 0)}, 80%, 85%, ${alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [density, twinkle, hue]);
  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
      }}
      className="fx-heavy"
    />
  );
};

/* Contact CTA - shared last section */
const ContactCTA = ({ accent = "var(--violet)" }: { accent?: string }) => (
  <section id="contatti" style={{ padding: "140px 0 80px", position: "relative", zIndex: 2 }}>
    <div className="container" style={{ textAlign: "center" }}>
      <div
        className="mono"
        style={{
          fontSize: 11,
          letterSpacing: "0.3em",
          color: "var(--fg-mute)",
          marginBottom: 24,
        }}
      >
        — CONTACT —
      </div>
      <h2
        className="display"
        style={{
          fontSize: "clamp(48px, 9vw, 140px)",
          lineHeight: 0.9,
          margin: 0,
          letterSpacing: "-0.04em",
          fontWeight: 400,
        }}
      >
        Hai una IP
        <br />
        <em style={{ fontStyle: "italic", color: accent }}>in testa?</em>
      </h2>
      <p
        style={{
          fontSize: 18,
          color: "var(--fg-dim)",
          maxWidth: 560,
          margin: "28px auto 40px",
        }}
      >
        Raccontacela in 20 minuti. Ti diremo quale dei nostri quattro prodotti la fa nascere più in fretta.
      </p>
      <div style={{ display: "inline-flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
        <a
          href="#"
          style={{
            padding: "18px 32px",
            background: accent,
            color: "#0a0618",
            borderRadius: 999,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            boxShadow: `0 0 40px ${accent}60`,
          }}
        >
          Prenota una call <ArrowR />
        </a>
        <a
          href="mailto:hello@neobytestudios.com"
          className="mono"
          style={{
            padding: "18px 28px",
            border: "1px solid var(--line)",
            borderRadius: 999,
            fontSize: 13,
          }}
        >
          hello@neobytestudios.com
        </a>
      </div>
      <div
        className="mono"
        style={{
          marginTop: 80,
          color: "var(--fg-mute)",
          fontSize: 11,
          letterSpacing: "0.2em",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <span>© 2026 NEOBYTE STUDIOS</span>
        <span>MILANO / LOS ANGELES / TOKYO</span>
        <span>WHERE AI UNLOCKS IMAGINATION</span>
      </div>
    </div>
  </section>
);

/* ================================================================
 * Variant 2 — ORBITAL IP (refined)
 * ================================================================ */

function OrbitalVariant() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#05030d",
        color: "#f6f3ff",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes orb-spin-slow { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
        @keyframes orb-spin-rev  { from { transform: rotate(360deg) } to { transform: rotate(0deg) } }
        @keyframes orb-pulse     { 0%,100% { transform: translate(-50%, -50%) scale(1); opacity: 0.9 } 50% { transform: translate(-50%, -50%) scale(1.06); opacity: 1 } }
        @keyframes orb-breathe   { 0%,100% { opacity: 0.55 } 50% { opacity: 1 } }
        @keyframes orb-float     { 0%,100% { transform: translate(-50%, 0) } 50% { transform: translate(-50%, -10px) } }
        @keyframes orb-gradshift { 0% { background-position: 0% 50% } 100% { background-position: 200% 50% } }
        @keyframes nbmarq        { from { transform: translateX(0) } to { transform: translateX(-33.33%) } }

        .orb-bg-gradient {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 70% 55% at 50% 20%, rgba(168,85,247,0.35), transparent 60%),
            radial-gradient(ellipse 60% 45% at 15% 80%, rgba(59,130,246,0.18), transparent 60%),
            radial-gradient(ellipse 50% 40% at 85% 70%, rgba(192,132,252,0.22), transparent 60%),
            #05030d;
        }

        .orb-chip {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 7px 16px; border: 1px solid rgba(192,132,252,0.4);
          border-radius: 999px; font-family: var(--mono); font-size: 10px;
          letter-spacing: 0.28em; color: #d6b6ff;
          background: rgba(168,85,247,0.08);
          text-transform: uppercase;
          backdrop-filter: blur(8px);
        }
        .orb-chip::before {
          content: ""; width: 6px; height: 6px; background: #c084fc; border-radius: 50%;
          box-shadow: 0 0 12px #c084fc;
          animation: orb-breathe 2s infinite;
        }

        .orb-btn {
          position: relative; display: inline-flex; align-items: center; gap: 12px;
          padding: 18px 32px; font-family: var(--display); font-size: 14px;
          letter-spacing: -0.01em; cursor: pointer; font-weight: 600;
          color: #0a0618;
          background: linear-gradient(110deg, #e5c7ff 0%, #c084fc 40%, #a855f7 70%, #c084fc 100%);
          background-size: 220% 100%;
          border: none; border-radius: 999px;
          box-shadow: 0 12px 50px rgba(168,85,247,0.45), 0 0 0 1px rgba(255,255,255,0.14) inset;
          transition: all .25s;
          animation: orb-gradshift 6s linear infinite;
        }
        .orb-btn:hover { transform: translateY(-2px); box-shadow: 0 18px 60px rgba(168,85,247,0.7); }
        .orb-btn-ghost {
          background: rgba(255,255,255,0.03); color: #f6f3ff;
          border: 1px solid rgba(255,255,255,0.18);
          box-shadow: none;
          backdrop-filter: blur(10px);
          animation: none;
        }
        .orb-btn-ghost:hover { background: rgba(255,255,255,0.08); border-color: rgba(192,132,252,0.5); }

        /* ---------- Orbital system (hero backdrop) ---------- */
        .orb-system {
          position: absolute;
          top: 54%; left: 50%;
          width: min(115vmin, 1200px);
          height: min(115vmin, 1200px);
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .orb-rings { position: absolute; inset: 0; pointer-events: none; }
        .orb-ring  { position: absolute; inset: 0; border-radius: 50%; border: 1px dashed rgba(192,132,252,0.22); }
        .orb-ring.r1 { inset: 12% }
        .orb-ring.r2 { inset: 22%; border-style: solid; border-color: rgba(192,132,252,0.10) }
        .orb-ring.r3 { inset: 32%; border-style: dashed; border-color: rgba(96,165,250,0.15) }
        .orb-ring.r4 { inset: 42%; border-color: rgba(192,132,252,0.18) }

        .orb-orbit {
          position: absolute; inset: 0;
          border-radius: 50%;
          pointer-events: none;
        }
        .orb-planet-wrap {
          position: absolute; top: 50%; left: 50%;
          width: 0; height: 0;
          pointer-events: none;
        }
        .orb-planet-body {
          position: absolute;
          width: 76px; height: 76px; border-radius: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle at 32% 30%, rgba(255,255,255,0.95), currentColor 35%, rgba(15,6,36,0.95) 85%);
          box-shadow: 0 0 24px currentColor, 0 0 50px rgba(192,132,252,0.4);
          cursor: pointer;
          transition: transform .3s cubic-bezier(.2,.8,.2,1);
          pointer-events: auto;
        }
        .orb-planet-body::after {
          content: ""; position: absolute; inset: 6px; border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 60%);
        }
        .orb-planet-body:hover { transform: translate(-50%, -50%) scale(1.25); }

        .orb-planet-label {
          position: absolute; top: 100%; left: 50%;
          transform: translate(-50%, 14px);
          white-space: nowrap; pointer-events: none;
        }

        .orb-core {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 180px; height: 180px; border-radius: 50%;
          background: radial-gradient(circle at 32% 30%, #fff 0%, #c084fc 25%, #a855f7 50%, #4c1d95 80%, rgba(10,6,24,1));
          box-shadow:
            0 0 80px rgba(192,132,252,0.7),
            0 0 160px rgba(168,85,247,0.5),
            0 0 0 2px rgba(255,255,255,0.12) inset;
          animation: orb-pulse 5s ease-in-out infinite;
        }
        .orb-core::before {
          content: ""; position: absolute; inset: -20px; border-radius: 50%;
          border: 1px solid rgba(192,132,252,0.3);
          animation: orb-spin-slow 40s linear infinite;
        }

        /* ---------- Cards & sections ---------- */
        .orb-product-card {
          position: relative;
          border-radius: 28px;
          padding: 0;
          background: linear-gradient(160deg, rgba(168,85,247,0.10), rgba(10,6,24,0.75));
          border: 1px solid rgba(192,132,252,0.22);
          backdrop-filter: blur(14px);
          overflow: hidden;
          transition: all .4s cubic-bezier(.2,.8,.2,1);
        }
        .orb-product-card:hover {
          transform: translateY(-6px);
          border-color: rgba(192,132,252,0.55);
          box-shadow: 0 30px 80px rgba(168,85,247,0.25);
        }
        body[data-card="outline"] .orb-product-card { background: rgba(10,6,24,0.4); }
        body[data-card="glow"]    .orb-product-card { box-shadow: 0 0 40px rgba(168,85,247,0.18); }

        /* Timeline process */
        .orb-step {
          position: relative; padding: 32px 28px;
          border-radius: 24px;
          background: rgba(15,10,34,0.55);
          border: 1px solid rgba(192,132,252,0.18);
          backdrop-filter: blur(10px);
          transition: all .3s;
        }
        .orb-step:hover { border-color: rgba(192,132,252,0.45); transform: translateY(-4px); }
        .orb-step-dot {
          position: absolute; top: -12px; left: 28px;
          width: 24px; height: 24px; border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #fff, #c084fc 40%, #4c1d95);
          box-shadow: 0 0 20px rgba(192,132,252,0.9);
        }

        @media (max-width: 900px) {
          .orb-product-card { grid-template-columns: 1fr !important; }
          .orb-product-card > div:first-child { grid-column: 1 !important; grid-row: 1 !important; }
          .orb-product-card > div:last-child { grid-column: 1 !important; grid-row: 2 !important; padding: 32px 24px !important; }
        }
      `}</style>

      <div className="orb-bg-gradient fx-heavy"></div>
      <Starfield hue={265} density={0.7} />

      <OrbitalNav />
      <OrbitalHero />
      <OrbitalProducts />
      <OrbitalFlow />
      <OrbitalProcess />
      <OrbitalManifesto />
      <OrbitalStudio />
      <ContactCTA accent="#c084fc" />
    </div>
  );
}

/* ---------- NAV ---------- */
function OrbitalNav() {
  const y = useScrollY();
  const scrolled = y > 40;
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "12px 0" : "22px 0",
        background: scrolled ? "rgba(10,6,24,0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(140%)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(192,132,252,0.14)"
          : "1px solid transparent",
        transition: "all .3s",
      }}
    >
      <div
        className="container"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Logo size={38} />
          <div>
            <div
              className="display"
              style={{ fontSize: 19, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1 }}
            >
              NeoByte <span style={{ color: "#c084fc" }}>Studios</span>
            </div>
            <div
              className="mono"
              style={{
                fontSize: 9,
                color: "rgba(214,182,255,0.6)",
                letterSpacing: "0.3em",
                marginTop: 3,
              }}
            >
              ◉ WHERE AI UNLOCKS IMAGINATION
            </div>
          </div>
        </div>
        <nav style={{ display: "flex", gap: 36, alignItems: "center" }}>
          {NB_CONTENT.nav.map((n) => (
            <a key={n.href} href={n.href} style={{ fontSize: 14, color: "#e7defc" }}>
              {n.label}
            </a>
          ))}
          <button className="orb-btn" style={{ padding: "11px 22px", fontSize: 13 }}>
            Start an IP →
          </button>
        </nav>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function OrbitalHero() {
  const [hovered, setHovered] = React.useState<string | null>(null);
  const [tick, setTick] = React.useState(0);
  const m = useMouse();
  const tx = (m.x - 0.5) * 14;
  const ty = (m.y - 0.5) * 14;

  React.useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const loop = () => {
      setTick((performance.now() - start) / 1000);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const planets = NB_CONTENT.products.map((p, i) => {
    const baseAngle = (i / 4) * Math.PI * 2 - Math.PI / 2;
    const speed = [0.08, 0.06, 0.05, 0.04][i];
    const angle = baseAngle + tick * speed;
    const rPct = [20, 26, 33, 41][i];
    const x = Math.cos(angle) * rPct;
    const y = Math.sin(angle) * rPct;
    const size = [60, 68, 78, 72][i];
    return { ...p, x, y, size };
  });

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        paddingTop: 100,
        paddingBottom: 80,
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        className="orb-system fx-heavy"
        style={{
          transform: `translate(calc(-50% + ${tx * 0.6}px), calc(-50% + ${ty * 0.6}px))`,
        }}
      >
        <div className="orb-rings">
          <div className="orb-ring r1"></div>
          <div className="orb-ring r2"></div>
          <div className="orb-ring r3"></div>
          <div className="orb-ring r4"></div>
        </div>

        <div className="orb-core">
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <div
              className="mono"
              style={{ fontSize: 9, letterSpacing: "0.35em", color: "rgba(255,255,255,0.7)" }}
            >
              YOUR IP
            </div>
            <div
              className="display"
              style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginTop: 2 }}
            >
              CORE
            </div>
          </div>
        </div>

        {planets.map((p) => (
          <div
            key={p.code}
            className="orb-planet-wrap"
            style={{ transform: `translate(${p.x}vmin, ${p.y}vmin)` }}
            onMouseEnter={() => setHovered(p.code)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className="orb-planet-body"
              style={{ width: p.size, height: p.size, color: p.accent }}
            ></div>
            <div
              className="orb-planet-label"
              style={{
                opacity: hovered === p.code ? 1 : 0.82,
                transform: `translate(-50%, ${p.size / 2 + 14}px)`,
                transition: "opacity .2s",
              }}
            >
              <div
                className="display"
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: p.accent,
                  textShadow: `0 0 18px ${p.accent}, 0 0 4px ${p.accent}`,
                  letterSpacing: "-0.01em",
                }}
              >
                {p.name}
              </div>
              <div
                className="mono"
                style={{
                  fontSize: 9,
                  letterSpacing: "0.3em",
                  color: "rgba(231,222,252,0.8)",
                  marginTop: 3,
                }}
              >
                0{p.n.slice(-1)} · {p.code}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 3 }}>
        <div className="orb-chip" style={{ marginBottom: 32 }}>
          ★ WHERE AI UNLOCKS IMAGINATION
        </div>

        <h1
          className="display"
          style={{
            fontSize: "clamp(52px, 9.5vw, 170px)",
            lineHeight: 0.88,
            margin: 0,
            letterSpacing: "-0.045em",
            fontWeight: 600,
            maxWidth: 1300,
            marginLeft: "auto",
            marginRight: "auto",
            color: "#8b6fad",
          }}
        >
          <span className="orb-sweep-word" style={{ animationDelay: "0s" }}>Immagina.</span>
          <br />
          <span className="orb-sweep-word" style={{ animationDelay: "4s" }}>Noi costruiamo</span>{" "}
          <em style={{ fontStyle: "italic", fontWeight: 400 }}>
            <span className="orb-sweep-word" style={{ animationDelay: "8s" }}>l&apos;orbita.</span>
          </em>
        </h1>

        <p
          style={{
            fontFamily: "var(--body)",
            fontSize: "clamp(16px, 1.35vw, 20px)",
            color: "#d6c7f0",
            maxWidth: 620,
            margin: "36px auto 0",
            lineHeight: 1.55,
          }}
        >
          Quattro prodotti AI —{" "}
          <b style={{ color: "#fff" }}>Writer, Forge, Games, Vision</b> — orbitano attorno al tuo
          concept. Tu porti la scintilla, noi costruiamo pianeta, cielo e fandom.
        </p>

        <div
          style={{
            display: "inline-flex",
            gap: 14,
            marginTop: 40,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <button className="orb-btn">Lancia la tua IP →</button>
          <a href="#prodotti" className="orb-btn orb-btn-ghost">
            Esplora i 4 motori ↓
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(214,182,255,0.5)",
          fontSize: 10,
          letterSpacing: "0.3em",
          fontFamily: "var(--mono)",
          animation: "orb-float 2.5s ease-in-out infinite",
          zIndex: 3,
        }}
        className="fx-heavy"
      >
        SCROLL ↓ ENTER ORBIT
      </div>
    </section>
  );
}

/* ---------- PRODUCTS (zigzag layout) ---------- */
function OrbitalProducts() {
  return (
    <section id="prodotti" style={{ padding: "80px 0 100px", position: "relative", zIndex: 2 }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "flex-end",
            marginBottom: 80,
          }}
        >
          <div>
            <div className="orb-chip" style={{ marginBottom: 22 }}>
              ◉ THE FOUR ENGINES
            </div>
            <h2
              className="display"
              style={{
                fontSize: "clamp(44px, 6vw, 92px)",
                lineHeight: 0.95,
                margin: 0,
                letterSpacing: "-0.035em",
                fontWeight: 600,
              }}
            >
              Un&apos;orbita completa
              <br />
              <em style={{ fontStyle: "italic", color: "#c084fc", fontWeight: 400 }}>
                dall&apos;idea al lancio.
              </em>
            </h2>
          </div>
          <p style={{ color: "#d6c7f0", fontSize: 18, lineHeight: 1.55, maxWidth: 440 }}>
            <b style={{ color: "#fff" }}>Writer</b> scrive il cuore.
            <b style={{ color: "#fff" }}> Forge</b> gli dà un corpo.
            <b style={{ color: "#fff" }}> Games</b> lo rende giocabile.
            <b style={{ color: "#fff" }}> Vision</b> lo trasmette al mondo. Un ciclo, guidato da AI.
          </p>
        </div>

        <div style={{ display: "grid", gap: 24 }}>
          {NB_CONTENT.products.map((p, i) => (
            <OrbitalProductRow key={p.code} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OrbitalProductRow({ p, i }: { p: Product; i: number }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, 0.15);
  const reverse = i % 2 === 1;

  return (
    <div
      ref={ref}
      className="orb-product-card"
      style={{
        display: "grid",
        gridTemplateColumns: reverse ? "1fr 1.1fr" : "1.1fr 1fr",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `all .8s cubic-bezier(.2,.8,.2,1) ${i * 0.06}s`,
      }}
    >
      {/* Image half */}
      <div
        style={{
          gridColumn: reverse ? 2 : 1,
          gridRow: 1,
          position: "relative",
          minHeight: 420,
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.image}
          alt={p.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "saturate(1.15) contrast(1.02)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(${reverse ? 270 : 90}deg, transparent 40%, rgba(10,6,24,0.85))`,
          }}
        ></div>

        {/* micro planet decoration */}
        <div
          style={{
            position: "absolute",
            top: 28,
            [reverse ? "right" : "left"]: 28,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: `radial-gradient(circle at 30% 30%, #fff, ${p.accent} 50%, #1a0a2e)`,
              boxShadow: `0 0 16px ${p.accent}`,
            }}
          ></div>
          <span className="mono" style={{ fontSize: 10, color: "#fff", letterSpacing: "0.3em" }}>
            0{p.n.slice(-1)} · {p.code}
          </span>
        </div>

        {/* big number overlay */}
        <div
          style={{
            position: "absolute",
            [reverse ? "left" : "right"]: -20,
            bottom: -40,
            fontFamily: "var(--display)",
            fontSize: "clamp(140px, 20vw, 280px)",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.06em",
            color: p.accent,
            opacity: 0.2,
            pointerEvents: "none",
          }}
        >
          {p.n.slice(-1)}
        </div>
      </div>

      {/* Content half */}
      <div
        style={{
          gridColumn: reverse ? 1 : 2,
          gridRow: 1,
          padding: "48px 44px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          className="mono"
          style={{
            fontSize: 10,
            letterSpacing: "0.3em",
            color: p.accent,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          {p.tag}
        </div>
        <h3
          className="display"
          style={{
            fontSize: "clamp(38px, 4.5vw, 64px)",
            margin: "0 0 18px",
            letterSpacing: "-0.03em",
            fontWeight: 600,
            color: "#fff",
            lineHeight: 1,
          }}
        >
          {p.name}
          <span style={{ color: p.accent, marginLeft: 10, fontStyle: "italic", fontWeight: 300 }}>
            ·
          </span>
        </h3>
        <p style={{ color: "#d6c7f0", fontSize: 16, lineHeight: 1.55, margin: "0 0 24px" }}>
          {p.desc}
        </p>

        <div style={{ display: "grid", gap: 10, marginBottom: 26 }}>
          {p.bullets.map((b, j) => (
            <div
              key={j}
              style={{
                fontSize: 14,
                color: "#e7defc",
                display: "flex",
                gap: 12,
                alignItems: "center",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: p.accent,
                  flexShrink: 0,
                  boxShadow: `0 0 10px ${p.accent}`,
                }}
              ></span>
              {b}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 22,
            borderTop: "1px solid rgba(192,132,252,0.2)",
          }}
        >
          <div
            className="mono"
            style={{ fontSize: 11, color: p.accent, letterSpacing: "0.15em" }}
          >
            → {p.metric}
          </div>
          <button
            style={{
              background: "transparent",
              border: "1px solid rgba(192,132,252,0.4)",
              color: "#fff",
              padding: "10px 18px",
              borderRadius: 999,
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.25em",
              cursor: "pointer",
              display: "inline-flex",
              gap: 8,
              alignItems: "center",
            }}
          >
            DETAILS <ArrowR />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- COSMIC ENERGY FLOW (video-based) ---------- */
function OrbitalFlow() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, 0.12);
  const nodes = NB_CONTENT.products;
  const W = 1200;

  return (
    <section style={{ padding: "40px 0 100px", position: "relative", zIndex: 2 }}>
      <div className="container">
        <div
          ref={ref}
          style={{
            position: "relative",
            padding: "70px 24px 90px",
            borderRadius: 28,
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(168,85,247,0.22), transparent 55%)," +
              "radial-gradient(ellipse at 75% 80%, rgba(59,130,246,0.18), transparent 55%)," +
              "radial-gradient(ellipse at 50% 50%, rgba(30,10,60,0.9), rgba(5,3,13,0.95) 80%)",
            border: "1px solid rgba(192,132,252,0.2)",
            overflow: "hidden",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "all .9s cubic-bezier(.2,.8,.2,1)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 30, position: "relative", zIndex: 3 }}>
            <div
              className="mono"
              style={{
                fontSize: 10,
                letterSpacing: "0.3em",
                color: "#c084fc",
                marginBottom: 12,
              }}
            >
              ◉ THE ENERGY FLOW
            </div>
            <h3
              className="display"
              style={{
                fontSize: "clamp(26px, 3vw, 44px)",
                margin: 0,
                lineHeight: 1.1,
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              Un unico flusso{" "}
              <em style={{ color: "#c084fc", fontStyle: "italic", fontWeight: 400 }}>
                di energia creativa.
              </em>
            </h3>
            <p
              style={{
                color: "#d6c7f0",
                fontSize: 15,
                marginTop: 14,
                maxWidth: 640,
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: 1.55,
              }}
            >
              L&apos;output di ogni motore alimenta il successivo. Un&apos;idea entra in Writer ed esce,
              attraverso Forge e Games, come universo vivo — pronto per Vision.
            </p>
          </div>

          <div
            style={{
              position: "relative",
              maxWidth: W,
              margin: "0 auto",
              aspectRatio: "16 / 9",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow:
                "0 40px 120px rgba(124,58,237,0.25), inset 0 0 0 1px rgba(192,132,252,0.15)",
            }}
          >
            <video
              src="/assets/cosmic-flow.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            {/* subtle vignette */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at center, transparent 55%, rgba(5,3,13,0.55) 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Node labels — positioned over the orbs visible in the video */}
            {(() => {
              const orbByCode: Record<string, { x: number; y: number }> = {
                WRITER: { x: 22, y: 72 },
                FORGE: { x: 68, y: 50 },
                GAMES: { x: 42, y: 38 },
                VISION: { x: 78, y: 22 },
              };
              return nodes.map((p, i) => {
                const pos = orbByCode[p.code] || { x: 50, y: 50 };
                const above = p.code === "GAMES" || p.code === "VISION";
                return (
                  <div
                    key={p.code}
                    style={{
                      position: "absolute",
                      left: `${pos.x}%`,
                      top: `${pos.y}%`,
                      transform: "translate(-50%, -50%)",
                      opacity: inView ? 1 : 0,
                      transition: `opacity .9s ease ${i * 0.18}s`,
                      zIndex: 3,
                      pointerEvents: "none",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: "50%",
                        [above ? "bottom" : "top"]: "calc(100% + 42px)",
                        transform: "translateX(-50%)",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <div
                        className="mono"
                        style={{
                          fontSize: 9,
                          letterSpacing: "0.32em",
                          color: p.accent,
                          marginBottom: 4,
                          textShadow: `0 0 12px ${p.accent}`,
                        }}
                      >
                        0{p.n.slice(-1)}
                      </div>
                      <div
                        className="display"
                        style={{
                          fontSize: 17,
                          fontWeight: 600,
                          letterSpacing: "-0.01em",
                          color: "#fff",
                          textShadow: `0 0 14px ${p.accent}, 0 2px 10px rgba(0,0,0,0.9)`,
                        }}
                      >
                        {p.name}
                      </div>
                    </div>
                  </div>
                );
              });
            })()}
          </div>

          {/* Input/Output legend */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gap: 18,
              maxWidth: 1000,
              margin: "40px auto 0",
              textAlign: "center",
              position: "relative",
              zIndex: 3,
            }}
          >
            {["idea → lore", "lore → asset visivi", "asset → mondi giocabili", "universo → fandom"].map(
              (io, i) => (
                <div
                  key={i}
                  className="mono"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    color: "#e7defc",
                    padding: "10px 8px",
                    borderTop: `1px solid ${nodes[i].accent}55`,
                  }}
                >
                  {io}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS (orbital timeline) ---------- */
function OrbitalProcess() {
  const steps = [
    {
      n: "01",
      t: "Spark",
      d: "Una call, una logline, un mood board. In 72h hai il pitch deck della tua IP.",
    },
    {
      n: "02",
      t: "Build",
      d: "Writer e Forge lavorano in parallelo: lore scritta, character sheet, concept art pronti.",
    },
    {
      n: "03",
      t: "Launch",
      d: "Vision produce trailer e campagna reveal. Games costruisce la demo giocabile del lancio.",
    },
    {
      n: "04",
      t: "Orbit",
      d: "La community inizia a orbitare. Tu hai la IP, noi i dati per farla crescere.",
    },
  ];
  return (
    <section style={{ padding: "100px 0", position: "relative", zIndex: 2 }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <div className="orb-chip" style={{ marginBottom: 22 }}>
            ◉ MISSION FLOW
          </div>
          <h2
            className="display"
            style={{
              fontSize: "clamp(40px, 5.5vw, 80px)",
              lineHeight: 0.95,
              margin: 0,
              letterSpacing: "-0.035em",
              fontWeight: 600,
              maxWidth: 900,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Quattro fasi.
            <br />
            <em style={{ fontStyle: "italic", color: "#c084fc", fontWeight: 400 }}>
              Un&apos;unica traiettoria.
            </em>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 22,
            position: "relative",
          }}
        >
          <svg
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: 2,
              width: "100%",
              pointerEvents: "none",
              zIndex: 0,
              opacity: 0.4,
            }}
            preserveAspectRatio="none"
            viewBox="0 0 100 2"
          >
            <line x1="0" y1="1" x2="100" y2="1" stroke="url(#lg)" strokeWidth="0.5" strokeDasharray="1 1.5" />
            <defs>
              <linearGradient id="lg" x1="0" x2="1">
                <stop offset="0" stopColor="#a855f7" />
                <stop offset="1" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
          </svg>
          {steps.map((s) => (
            <div key={s.n} className="orb-step" style={{ position: "relative", zIndex: 1 }}>
              <div className="orb-step-dot"></div>
              <div
                className="mono"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.3em",
                  color: "#c084fc",
                  marginBottom: 10,
                  marginTop: 10,
                }}
              >
                PHASE {s.n}
              </div>
              <h3
                className="display"
                style={{ fontSize: 30, margin: 0, fontWeight: 600, letterSpacing: "-0.02em" }}
              >
                {s.t}
              </h3>
              <p style={{ color: "#d6c7f0", fontSize: 14, lineHeight: 1.55, marginTop: 12 }}>
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- MANIFESTO ---------- */
function OrbitalManifesto() {
  const ref = React.useRef<HTMLElement | null>(null);
  const inView = useInView(ref, 0.25);
  const words = ["vita", "forma", "voce", "destinazione"];

  return (
    <section ref={ref} style={{ padding: "140px 0", position: "relative", zIndex: 2 }}>
      <div className="container" style={{ textAlign: "center", maxWidth: 1200 }}>
        <div className="orb-chip" style={{ marginBottom: 32 }}>
          ★ MANIFESTO
        </div>

        <h2
          className="display"
          style={{
            fontSize: "clamp(40px, 6.5vw, 96px)",
            lineHeight: 1.08,
            letterSpacing: "-0.035em",
            fontWeight: 500,
            margin: 0,
            color: "#f6f3ff",
          }}
        >
          <span
            style={{
              display: "block",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transition: "all .8s cubic-bezier(.2,.8,.2,1)",
            }}
          >
            Hai un&apos;idea.
          </span>
          <span
            style={{
              display: "block",
              marginTop: 10,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transition: "all .8s cubic-bezier(.2,.8,.2,1) .25s",
            }}
          >
            Noi le diamo{" "}
            {words.map((w, i) => (
              <React.Fragment key={w}>
                <em
                  style={{
                    fontStyle: "italic",
                    fontWeight: 400,
                    background: `linear-gradient(90deg, #fff 0%, #c084fc 50%, #60a5fa 100%)`,
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    animation: `orb-gradshift ${6 + i * 0.5}s linear infinite`,
                    display: "inline-block",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(18px)",
                    transition: `all .7s cubic-bezier(.2,.8,.2,1) ${0.5 + i * 0.18}s`,
                  }}
                >
                  {w}
                </em>
                {i < words.length - 1 && (i === words.length - 2 ? " e " : ", ")}
              </React.Fragment>
            ))}
            <span
              style={{
                opacity: inView ? 1 : 0,
                transition: `opacity .6s ease ${0.5 + words.length * 0.18}s`,
              }}
            >
              .
            </span>
          </span>
        </h2>

        {/* Small tag line */}
        <div
          style={{
            marginTop: 54,
            display: "inline-flex",
            alignItems: "center",
            gap: 20,
            opacity: inView ? 0.8 : 0,
            transition: `opacity .8s ease ${0.5 + words.length * 0.18 + 0.3}s`,
          }}
        >
          <span
            style={{
              width: 60,
              height: 1,
              background: "linear-gradient(90deg, transparent, #c084fc)",
            }}
          ></span>
          <span
            className="mono"
            style={{ fontSize: 11, letterSpacing: "0.32em", color: "#c084fc" }}
          >
            NEOBYTE STUDIOS
          </span>
          <span
            style={{
              width: 60,
              height: 1,
              background: "linear-gradient(90deg, #c084fc, transparent)",
            }}
          ></span>
        </div>
      </div>
    </section>
  );
}

/* ---------- STUDIO (client-centric) ---------- */
function OrbitalStudio() {
  const scenarios = [
    {
      icon: "◉",
      title: "Hai una storia che nessuno ha ancora raccontato.",
      body: "Un mondo, un personaggio, un'idea che ti ronza da mesi. Writer ti aiuta a strutturarla, Forge le dà un volto, Vision la porta al pubblico.",
    },
    {
      icon: "◐",
      title: "Hai già una IP e vuoi farla crescere.",
      body: "Serie, fumetto, progetto indipendente: gli stessi quattro motori estendono il tuo universo su nuovi media — senza perdere coerenza.",
    },
    {
      icon: "◎",
      title: "Vuoi esplorare un'idea prima di investirci.",
      body: "In poche settimane puoi avere un pitch, concept art, un trailer e una demo giocabile. Decidi dai risultati, non dalle promesse.",
    },
  ];

  return (
    <section id="studio" style={{ padding: "140px 0", position: "relative", zIndex: 2 }}>
      <div className="container">
        <div
          style={{
            textAlign: "center",
            marginBottom: 80,
            maxWidth: 900,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="orb-chip" style={{ marginBottom: 22 }}>
            ◉ FOR YOU
          </div>
          <h2
            className="display"
            style={{
              fontSize: "clamp(44px, 6vw, 92px)",
              lineHeight: 0.95,
              margin: 0,
              letterSpacing: "-0.035em",
              fontWeight: 600,
            }}
          >
            Immagina la tua IP
            <br />
            <em style={{ fontStyle: "italic", color: "#c084fc", fontWeight: 400 }}>
              già in orbita.
            </em>
          </h2>
          <p style={{ color: "#d6c7f0", fontSize: 18, lineHeight: 1.55, marginTop: 28 }}>
            NeoByte esiste per chi ha qualcosa da dire e non vuole più scegliere tra la visione e
            le risorse per realizzarla.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 22,
          }}
        >
          {scenarios.map((s, i) => (
            <div key={i} className="orb-step" style={{ padding: "40px 32px" }}>
              <div
                className="display"
                style={{
                  fontSize: 36,
                  color: "#c084fc",
                  marginBottom: 20,
                  lineHeight: 1,
                  textShadow: "0 0 20px rgba(192,132,252,0.5)",
                }}
              >
                {s.icon}
              </div>
              <h3
                className="display"
                style={{
                  fontSize: 22,
                  margin: "0 0 16px",
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                  fontWeight: 600,
                }}
              >
                {s.title}
              </h3>
              <p style={{ color: "#d6c7f0", fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Page export ---------- */

export default function Page() {
  return <OrbitalVariant />;
}
