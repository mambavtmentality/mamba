import { NextResponse } from "next/server";

type FoundingMemberPayload = {
  name: string;
  email: string;
  phone: string;
  mainInterest: string;
  membershipInterest: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as FoundingMemberPayload;

    if (!body.name || !body.email || !body.phone || !body.mainInterest || !body.membershipInterest) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: Connect to email/CRM service (Resend, Formspree, HubSpot, Airtable, etc.)
    // TODO: Send notification to studio owner and store lead in database
    console.log("Founding member lead:", body);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 500 });
  }
}
