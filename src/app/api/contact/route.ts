import { NextResponse } from "next/server";

// Lightweight contact handler. Replace the console log with DB persistence
// and notifications when backend integrations are added.
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

  const { name, email, message } = payload as Record<string, unknown>;
  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 },
    );
  }

  console.log("[inner-drive] new contact:", payload);

  return NextResponse.json({ ok: true });
}
