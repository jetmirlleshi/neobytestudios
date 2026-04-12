"use client";

import { useSyncExternalStore, useCallback } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const STORAGE_KEY = "cookie-consent";

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
}

function getSnapshot(): string | null {
  return localStorage.getItem(STORAGE_KEY);
}

function getServerSnapshot(): string | null {
  return "unknown";
}

export function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const visible = consent === null;

  const accept = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    window.dispatchEvent(new StorageEvent("storage"));
    window.dispatchEvent(new Event("consent-updated"));
  }, []);

  const decline = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "declined");
    window.dispatchEvent(new StorageEvent("storage"));
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-outline-variant/40 bg-surface-container-lowest/95 backdrop-blur-lg"
        >
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-5 sm:flex-row sm:justify-between">
            <p className="text-center font-body text-sm text-on-surface-variant sm:text-left">
              We use{" "}
              <Link
                href="/legal/privacy"
                className="underline transition-colors hover:text-primary"
              >
                privacy-friendly analytics
              </Link>{" "}
              to understand how visitors use this site. No personal data is
              collected.
            </p>
            <div className="flex shrink-0 gap-3">
              <Button variant="secondary" size="sm" onClick={decline}>
                Decline
              </Button>
              <Button variant="primary" size="sm" onClick={accept}>
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
