import { Resend } from "resend";
import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

/** Escape HTML special characters to prevent XSS in email templates. */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const { ok } = rateLimit(ip);
    if (!ok) {
      return NextResponse.json(
        { error: "Too many requests. Try again in a minute." },
        {
          status: 429,
          headers: { "Retry-After": "60", "X-RateLimit-Remaining": "0" },
        },
      );
    }

    const body = await req.json();
    const { name, email, division, type, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (typeof email !== "string" || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    // Sanitize all user-supplied values before interpolating into HTML.
    const safeName = escapeHtml(String(name));
    const safeEmail = escapeHtml(String(email));
    const safeDivision = escapeHtml(String(division ?? ""));
    const safeType = escapeHtml(String(type ?? ""));
    const safeMessage = escapeHtml(String(message));

    // 1. Email interna → a te (from = cliente, così rispondi diretto)
    const internalEmail = resend.emails.send({
      from: `${safeName} via NBS <noreply@neobytestudios.com>`,
      to: "contact@neobytestudios.com",
      replyTo: email,
      subject: `[NBS Contact] ${safeType} — ${safeName}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px">
          <h2 style="color:#a78bfa">New Transmission Received</h2>
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:8px 12px;font-weight:bold;color:#888">Name</td><td style="padding:8px 12px">${safeName}</td></tr>
            <tr><td style="padding:8px 12px;font-weight:bold;color:#888">Email</td><td style="padding:8px 12px"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
            <tr><td style="padding:8px 12px;font-weight:bold;color:#888">Division</td><td style="padding:8px 12px">${safeDivision}</td></tr>
            <tr><td style="padding:8px 12px;font-weight:bold;color:#888">Project Type</td><td style="padding:8px 12px">${safeType}</td></tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:#1a1a2e;border-radius:12px;color:#e0e0e0">
            <p style="margin:0;white-space:pre-wrap">${safeMessage}</p>
          </div>
        </div>
      `,
    });

    // 2. Email di conferma → al cliente
    const confirmationEmail = resend.emails.send({
      from: "NeoByte Studios <noreply@neobytestudios.com>",
      to: email,
      subject: "Transmission Received — NeoByte Studios",
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto">
          <div style="text-align:center;padding:32px 0">
            <div style="font-size:12px;letter-spacing:0.3em;color:#a78bfa;text-transform:uppercase;font-weight:600">NeoByte Studios</div>
            <h1 style="font-size:28px;color:#f0f0f0;margin:16px 0 8px">Signal Received</h1>
          </div>
          <div style="background:#12121f;border-radius:16px;padding:32px;border:1px solid rgba(167,139,250,0.2)">
            <p style="color:#e0e0e0;margin:0 0 16px;line-height:1.6">
              Hi <strong>${safeName}</strong>,
            </p>
            <p style="color:#aaa;margin:0 0 16px;line-height:1.6">
              Your transmission has entered the NeoByte orbit. We've received your message and will respond within <strong style="color:#e0e0e0">48 hours</strong>.
            </p>
            <div style="margin:24px 0;padding:16px;background:#1a1a2e;border-radius:12px;border-left:3px solid #a78bfa">
              <div style="font-size:11px;letter-spacing:0.2em;color:#888;text-transform:uppercase;margin-bottom:8px">Your Message</div>
              <p style="color:#ccc;margin:0;white-space:pre-wrap;font-size:14px">${safeMessage}</p>
            </div>
            <p style="color:#888;margin:24px 0 0;font-size:13px;line-height:1.5">
              Division: ${safeDivision} · Project: ${safeType}
            </p>
          </div>
          <div style="text-align:center;padding:24px 0;color:#555;font-size:12px">
            <p style="margin:0">NeoByte Studios — Where AI Unlocks Imagination</p>
            <p style="margin:4px 0 0"><a href="https://neobytestudios.com" style="color:#a78bfa;text-decoration:none">neobytestudios.com</a></p>
          </div>
        </div>
      `,
    });

    await Promise.all([internalEmail, confirmationEmail]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
