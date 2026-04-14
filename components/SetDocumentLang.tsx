"use client";

import { useEffect } from "react";

/** Sets <html lang="..."> client-side to match the current locale. */
export function SetDocumentLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
