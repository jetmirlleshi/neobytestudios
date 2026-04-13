import { Resend } from "resend";
import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID ?? "";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const { ok } = rateLimit(ip);
    if (!ok) {
      return NextResponse.json(
        { error: "Too many requests. Try again in a minute." },
        { status: 429, headers: { "Retry-After": "60" } },
      );
    }

    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== "string" || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Valid email address required." },
        { status: 400 },
      );
    }

    // Add contact to Resend audience
    const { error: contactError } = await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
      unsubscribed: false,
    });

    if (contactError) {
      // Resend returns an error if contact already exists
      if (contactError.message?.toLowerCase().includes("already")) {
        return NextResponse.json(
          { error: "This signal is already in our orbit." },
          { status: 409 },
        );
      }
      throw contactError;
    }

    // Send welcome email
    await resend.emails.send({
      from: "NeoByte Studios <noreply@neobytestudios.com>",
      to: email,
      subject: "Welcome to the Orbit — NeoByte Studios",
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;background:#0a0a10;color:#e0e0e0">
          <div style="text-align:center;padding:40px 24px 24px">
            <div style="font-size:11px;letter-spacing:0.35em;color:#a78bfa;text-transform:uppercase;font-weight:600">NeoByte Studios</div>
            <h1 style="font-size:28px;color:#f0f0f0;margin:20px 0 8px;font-weight:700">Welcome to the Orbit</h1>
            <p style="color:#888;font-size:14px;margin:0">You are now part of the NeoByte signal network.</p>
          </div>
          <div style="background:#12121f;border-radius:16px;padding:32px;margin:0 24px;border:1px solid rgba(167,139,250,0.15)">
            <p style="color:#ccc;margin:0 0 16px;line-height:1.7;font-size:15px">
              From this point forward, you'll receive transmissions about new divisions, projects, and updates from the studio.
            </p>
            <p style="color:#ccc;margin:0;line-height:1.7;font-size:15px">
              We keep our signals rare and meaningful — no noise, only substance.
            </p>
          </div>
          <div style="text-align:center;padding:32px 24px;color:#555;font-size:12px">
            <p style="margin:0">NeoByte Studios — Where AI Unlocks Imagination</p>
            <p style="margin:8px 0 0"><a href="https://neobytestudios.com" style="color:#a78bfa;text-decoration:none">neobytestudios.com</a></p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Newsletter subscribe error:", err);
    return NextResponse.json(
      { error: "Subscription failed. Please try again." },
      { status: 500 },
    );
  }
}
