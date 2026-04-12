"use client";

import { useSyncExternalStore } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const STORAGE_KEY = "cookie-consent";

function subscribe(cb: () => void) {
  window.addEventListener("consent-updated", cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener("consent-updated", cb);
    window.removeEventListener("storage", cb);
  };
}

function getSnapshot(): boolean {
  return localStorage.getItem(STORAGE_KEY) === "accepted";
}

function getServerSnapshot(): boolean {
  return false;
}

export function AnalyticsProvider() {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (!enabled) return null;
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
