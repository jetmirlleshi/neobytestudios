import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, division, type, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // 1. Email interna → a te (from = cliente, così rispondi diretto)
    await resend.emails.send({
      from: `${name} via NBS <noreply@neobytestudios.com>`,
      to: "contact@neobytestudios.com",
      replyTo: email,
      subject: `[NBS Contact] ${type} — ${name}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px">
          <h2 style="color:#a78bfa">New Transmission Received</h2>
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:8px 12px;font-weight:bold;color:#888">Name</td><td style="padding:8px 12px">${name}</td></tr>
            <tr><td style="padding:8px 12px;font-weight:bold;color:#888">Email</td><td style="padding:8px 12px"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 12px;font-weight:bold;color:#888">Division</td><td style="padding:8px 12px">${division}</td></tr>
            <tr><td style="padding:8px 12px;font-weight:bold;color:#888">Project Type</td><td style="padding:8px 12px">${type}</td></tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:#1a1a2e;border-radius:12px;color:#e0e0e0">
            <p style="margin:0;white-space:pre-wrap">${message}</p>
          </div>
        </div>
      `,
    });

    // 2. Email di conferma → al cliente
    await resend.emails.send({
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
              Hi <strong>${name}</strong>,
            </p>
            <p style="color:#aaa;margin:0 0 16px;line-height:1.6">
              Your transmission has entered the NeoByte orbit. We've received your message and will respond within <strong style="color:#e0e0e0">48 hours</strong>.
            </p>
            <div style="margin:24px 0;padding:16px;background:#1a1a2e;border-radius:12px;border-left:3px solid #a78bfa">
              <div style="font-size:11px;letter-spacing:0.2em;color:#888;text-transform:uppercase;margin-bottom:8px">Your Message</div>
              <p style="color:#ccc;margin:0;white-space:pre-wrap;font-size:14px">${message}</p>
            </div>
            <p style="color:#888;margin:24px 0 0;font-size:13px;line-height:1.5">
              Division: ${division} · Project: ${type}
            </p>
          </div>
          <div style="text-align:center;padding:24px 0;color:#555;font-size:12px">
            <p style="margin:0">NeoByte Studios — Where AI Unlocks Imagination</p>
            <p style="margin:4px 0 0"><a href="https://neobytestudios.vercel.app" style="color:#a78bfa;text-decoration:none">neobytestudios.com</a></p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
