import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (typeof payload !== "object" || payload === null) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  const { name, email, plan, message } = payload as Record<string, unknown>;
  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 },
    );
  }

  try {
    await resend.emails.send({
      from: "Inner Drive <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: String(email),
      subject: `Nueva consulta de ${name}`,
      text: [
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Plan: ${plan || "No especificado"}`,
        ``,
        `Mensaje:`,
        String(message),
      ].join("\n"),
    });
  } catch {
    return NextResponse.json({ ok: false, error: "Email send failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
