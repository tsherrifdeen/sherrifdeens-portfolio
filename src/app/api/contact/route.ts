import { NextRequest, NextResponse } from "next/server";
import * as Brevo from "@getbrevo/brevo";

const client = new Brevo.TransactionalEmailsApi();
client.setApiKey(
  Brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY!,
);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    // Email 1 — Confirmation to the form filler
    const confirmationEmail = new Brevo.SendSmtpEmail();
    confirmationEmail.to = [{ email, name }];
    confirmationEmail.sender = {
      name: "Sherrifdeen's Portfolio",
      email: process.env.CONTACT_RECEIVER_EMAIL!,
    };
    confirmationEmail.subject = "I have received your message!";
    confirmationEmail.htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto;">
        <h2>Hi ${name}, thanks for reaching out!</h2>
        <p>I've received your message and will get back to you within <strong>24–48 hours</strong>.</p>
        <p>Here's a copy of what you sent:</p>
        <blockquote style="border-left: 3px solid #ccc; padding-left: 12px; color: #555;">
          ${message}
        </blockquote>
        <p>Talk soon,<br/>Sherrifdeen Tijani</p>
      </div>
    `;

    // Email 2 — Notification to you (the site owner)
    const notificationEmail = new Brevo.SendSmtpEmail();
    notificationEmail.to = [{ email: process.env.CONTACT_RECEIVER_EMAIL! }];
    notificationEmail.sender = {
      name: "Dev Portfolio",
      email: process.env.CONTACT_RECEIVER_EMAIL!,
    };
    notificationEmail.subject = `New message from ${name}`;
    notificationEmail.htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <blockquote style="border-left: 3px solid #ccc; padding-left: 12px; color: #555;">
          ${message}
        </blockquote>
      </div>
    `;

    await Promise.all([
      client.sendTransacEmail(confirmationEmail),
      client.sendTransacEmail(notificationEmail),
    ]);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Brevo email error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 },
    );
  }
}
