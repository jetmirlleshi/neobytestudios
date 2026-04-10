/**
 * Simple in-memory sliding-window rate limiter.
 * Not suitable for multi-instance deployments — use Redis-backed
 * solutions in that case.
 */
const hits = new Map<string, number[]>();

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 5; // per window

// Evict stale IPs every minute to prevent unbounded Map growth.
setInterval(() => {
  const now = Date.now();
  for (const [ip, ts] of hits) {
    if (ts.every((t) => now - t >= WINDOW_MS)) hits.delete(ip);
  }
}, WINDOW_MS).unref();

export function rateLimit(ip: string): { ok: boolean } {
  const now = Date.now();
  const timestamps = hits.get(ip) ?? [];

  // Drop entries outside the window
  const recent = timestamps.filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  return { ok: recent.length <= MAX_REQUESTS };
}
