import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0f 0%, #12121f 40%, #1a0a2e 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Glow orb */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(167,139,250,0.25) 0%, rgba(96,165,250,0.1) 50%, transparent 70%)",
          }}
        />

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 20,
              letterSpacing: "0.35em",
              color: "#a78bfa",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            The Cosmic Auteur
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#f0f0f0",
            }}
          >
            NEOBYTE STUDIOS
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#888",
              marginTop: 4,
            }}
          >
            Where AI Unlocks Imagination
          </div>
        </div>

        {/* Division dots */}
        <div
          style={{
            display: "flex",
            gap: 24,
            marginTop: 48,
            zIndex: 1,
          }}
        >
          {[
            { color: "#c084fc", label: "Writer" },
            { color: "#60a5fa", label: "Forge" },
            { color: "#65ffc8", label: "Games" },
            { color: "#fbbf24", label: "Vision" },
          ].map((d) => (
            <div
              key={d.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: d.color,
                }}
              />
              <span style={{ fontSize: 16, color: "#aaa" }}>{d.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
