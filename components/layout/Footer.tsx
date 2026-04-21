export function Footer() {
  return (
    <footer className="relative z-[2] pb-10">
      <div className="container-nb">
        <div
          className="mono flex justify-between flex-wrap gap-4 pt-8 border-t"
          style={{
            color: "#6f5f9a",
            fontSize: "11px",
            letterSpacing: "0.2em",
            borderColor: "rgba(192, 132, 252, 0.12)",
          }}
        >
          <span>© 2026 NEOBYTE STUDIOS</span>
          <span>MILANO / LOS ANGELES / TOKYO</span>
          <span>WHERE AI UNLOCKS IMAGINATION</span>
        </div>
      </div>
    </footer>
  );
}
