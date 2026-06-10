import { NextResponse } from "next/server";

type FoundingMemberPayload = {
  name: string;
  email: string;
  phone: string;
  mainInterest: string;
  membershipInterest: string;
};

const recipientEmail = "mambavtmentality@gmail.com";
const siteUrl = "https://mamba-lac.vercel.app";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as FoundingMemberPayload;

    if (!body.name || !body.email || !body.phone || !body.mainInterest || !body.membershipInterest) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: siteUrl,
        Referer: `${siteUrl}/`,
      },
      body: JSON.stringify({
        _subject: "Mamba VT Founding Member Inquiry",
        _template: "table",
        name: body.name,
        email: body.email,
        phone: body.phone,
        main_interest: body.mainInterest,
        membership_interest: body.membershipInterest,
        message: [
          `Name: ${body.name}`,
          `Email: ${body.email}`,
          `Phone: ${body.phone}`,
          `Main interest: ${body.mainInterest}`,
          `Membership interest: ${body.membershipInterest}`,
        ].join("\n"),
      }),
    });

    if (!formSubmitResponse.ok) {
      return NextResponse.json({ error: "Unable to send message" }, { status: 502 });
    }

    const formSubmitResult = (await formSubmitResponse.json()) as {
      success?: boolean;
      message?: string;
    };

    if (formSubmitResult.success === false) {
      return NextResponse.json(
        { error: formSubmitResult.message || "Unable to send message" },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 500 });
  }
}
