import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, isLocale, detectLocale } from "@/lib/i18n";

const securityHeaders = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "0",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy":
    "camera=(), microphone=(), geolocation=(), interest-cohort=()",
} as const;

const headerEntries = Object.entries(securityHeaders);

/** Paths that should never be locale-prefixed. */
const IGNORED_PREFIXES = ["api", "_next", "images", "sw.js"];

function hasLocalePrefix(pathname: string): boolean {
  const firstSegment = pathname.split("/")[1];
  return isLocale(firstSegment ?? "");
}

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // Security headers on every response
  for (const [key, value] of headerEntries) {
    response.headers.set(key, value);
  }

  const { pathname } = request.nextUrl;

  // Skip locale redirect for static assets, API routes, etc.
  const firstSegment = pathname.split("/")[1] ?? "";
  if (
    IGNORED_PREFIXES.some((p) => firstSegment === p || pathname.startsWith(`/${p}`)) ||
    pathname.includes(".")
  ) {
    return response;
  }

  // Already has locale prefix → continue
  if (hasLocalePrefix(pathname)) {
    return response;
  }

  // Detect preferred locale and redirect
  const savedLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const locale =
    savedLocale && isLocale(savedLocale)
      ? savedLocale
      : detectLocale(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|icon-.*\\.png|manifest\\.webmanifest).*)",
  ],
};
