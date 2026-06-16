import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, email, location, service, wheels, message } = body;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey === "your_resend_api_key_here") {
    // Fallback: just return success so the UI works while key isn't set
    return NextResponse.json({ ok: true });
  }

  const html = `
    <h2>New Appointment Request — No Limit Polishing</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%">
      <tr><td style="padding:8px;font-weight:bold;color:#555">Name</td><td style="padding:8px">${name}</td></tr>
      <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;color:#555">Phone</td><td style="padding:8px"><a href="tel:${phone}">${phone}</a></td></tr>
      <tr><td style="padding:8px;font-weight:bold;color:#555">Email</td><td style="padding:8px">${email || "—"}</td></tr>
      <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;color:#555">Location</td><td style="padding:8px">${location}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;color:#555">Service</td><td style="padding:8px">${service}</td></tr>
      <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;color:#555">Wheel Info</td><td style="padding:8px">${wheels || "—"}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;color:#555">Notes</td><td style="padding:8px">${message || "—"}</td></tr>
    </table>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "No Limit Polishing <onboarding@resend.dev>",
      to: ["nolimitpolishing@gmail.com"],
      subject: `New Quote Request — ${name}`,
      html,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
