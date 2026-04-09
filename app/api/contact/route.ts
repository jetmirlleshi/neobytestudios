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

    await resend.emails.send({
      from: "NeoByte Studios <onboarding@resend.dev>",
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

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
