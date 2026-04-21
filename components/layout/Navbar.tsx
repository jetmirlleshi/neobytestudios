"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { navLinks } from "@/lib/constants";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 py-[22px] transition-all duration-300"
      style={{
        background: scrolled ? "rgba(5, 3, 13, 0.75)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(192, 132, 252, 0.12)"
          : "1px solid transparent",
      }}
    >
      <div className="container-nb flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-[14px]">
          <div
            className="inline-flex flex-shrink-0 relative w-[38px] h-[38px] rounded-lg overflow-hidden items-center justify-center"
            style={{
              background:
                "radial-gradient(circle at 32% 30%, #fff 0%, #c084fc 35%, #4c1d95 80%)",
              boxShadow:
                "0 0 22px rgba(168, 85, 247, 0.55), 0 0 3px rgba(168, 85, 247, 0.9) inset",
            }}
          >
            <span
              className="display text-white font-bold text-lg"
              style={{ textShadow: "0 0 10px rgba(0,0,0,0.4)" }}
            >
              N
            </span>
          </div>
          <div className="hidden sm:block">
            <div
              className="display text-[19px] font-semibold leading-none"
              style={{ letterSpacing: "-0.02em" }}
            >
              NeoByte <span style={{ color: "#c084fc" }}>Studios</span>
            </div>
            <div
              className="mono text-[9px] mt-[3px]"
              style={{
                color: "rgba(214, 182, 255, 0.6)",
                letterSpacing: "0.3em",
              }}
            >
              ◉ WHERE AI UNLOCKS IMAGINATION
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-9 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition-colors hover:text-white"
              style={{ color: "#e7defc" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contatti"
            className="orb-btn"
            style={{ padding: "11px 22px", fontSize: "13px" }}
          >
            Start an IP →
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden mt-4 mx-5 rounded-2xl p-6"
          style={{
            background: "rgba(15, 10, 34, 0.95)",
            border: "1px solid rgba(192, 132, 252, 0.2)",
            backdropFilter: "blur(14px)",
          }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm py-2"
                style={{ color: "#e7defc" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contatti"
              onClick={() => setMobileOpen(false)}
              className="orb-btn mt-2 justify-center"
              style={{ padding: "13px 22px", fontSize: "13px" }}
            >
              Start an IP →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
