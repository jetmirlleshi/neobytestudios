"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { NAV_LINKS, SITE } from "@/lib/constants";

/**
 * Fixed top navigation bar.
 * - Transparent at the top of the page, gains backdrop-blur once scrolled.
 * - Desktop: inline links + Inquire CTA.
 * - Mobile: hamburger → animated fullscreen overlay.
 *
 * Must be mounted from app/layout.tsx so it persists across pages.
 */
export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  // Prevent body scroll while mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Keyboard handling for mobile menu: Escape to close, Tab to trap focus.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
        return;
      }
      if (e.key === "Tab" && overlayRef.current) {
        const focusable = overlayRef.current.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])",
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const insideOverlay = overlayRef.current.contains(document.activeElement);
        if (!insideOverlay) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    // Move focus into the menu on open.
    const timer = setTimeout(() => {
      const firstLink = overlayRef.current?.querySelector<HTMLElement>("a[href]");
      firstLink?.focus();
    }, 350);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      clearTimeout(timer);
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname?.startsWith(href) ?? false;
  };

  return (
    <>
      {/* Skip to main content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-lg focus:bg-[#a78bfa] focus:px-4 focus:py-2 focus:text-white focus:outline-none"
      >
        Skip to main content
      </a>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-white/5 bg-background/70 backdrop-blur-md"
            : "bg-transparent",
        ].join(" ")}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12 md:py-5">
          <Link
            href="/"
            className="group flex items-center gap-2"
            aria-label={`${SITE.name} home`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-headline text-sm font-bold uppercase tracking-[0.35em] text-primary transition-colors group-hover:text-on-background">
              {SITE.shortName}
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={[
                      "relative font-headline text-[11px] font-semibold uppercase tracking-[0.3em] transition-colors",
                      active
                        ? "text-on-background"
                        : "text-on-surface-variant hover:text-on-background",
                    ].join(" ")}
                  >
                    {link.label}
                    {active ? (
                      <span className="absolute -bottom-2 left-1/2 h-px w-6 -translate-x-1/2 bg-primary" />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
            <Button href="/contact" variant="secondary" size="sm">
              Inquire
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            type="button"
            className="md:hidden text-on-background"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={28} />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            ref={overlayRef}
            key="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
                hidden: {},
              }}
              className="flex h-full flex-col items-center justify-center gap-10 px-6"
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="font-headline text-3xl font-bold uppercase tracking-[0.2em] text-on-background hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mt-6"
              >
                <Button href="/contact" variant="primary" onClick={closeMenu}>
                  Inquire
                </Button>
              </motion.li>
            </motion.ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
