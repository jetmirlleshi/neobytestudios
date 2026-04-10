/**
 * Simple in-memory sliding-window rate limiter.
 * Not suitable for multi-instance deployments — use Redis-backed
 * solutions in that case.
 */
const hits = new Map<string, number[]>();

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 5; // per window

export function rateLimit(ip: string): { ok: boolean; remaining: number } {
  const now = Date.now();
  const timestamps = hits.get(ip) ?? [];

  // Drop entries outside the window
  const recent = timestamps.filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  const remaining = Math.max(0, MAX_REQUESTS - recent.length);
  return { ok: recent.length <= MAX_REQUESTS, remaining };
}
