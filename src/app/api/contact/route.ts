import { NextRequest, NextResponse } from "next/server";
import * as Brevo from "@getbrevo/brevo";

const client = new Brevo.BrevoClient({
        apiKey: process.env.BREVO_API_KEY!,
    });

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
const confirmationEmail = {
  to: [{ email, name }],
  sender: {
    name: "Sherrifdeen's Portfolio",
    email: process.env.CONTACT_RECEIVER_EMAIL!,
  },
  subject: "I have received your message!",
  // Email 1 — Confirmation to the form filler
htmlContent: `
  <div style="font-family: sans-serif; max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
    <div style="background: #0f172a; padding: 2rem 2.5rem; text-align: center;">
      <div style="width: 42px; height: 42px; border-radius: 50%; background: #374151; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      </div>
      <p style="color: rgba(255,255,255,0.5); font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; margin: 0 0 0.25rem;">Sherrifdeen Tijani</p>
      <p style="color: white; font-size: 20px; font-weight: 600; margin: 0;">Message received</p>
    </div>
    <div style="padding: 2rem 2.5rem;">
      <p style="color: #111827; font-size: 15px; margin: 0 0 1rem;">Hi <strong>${name}</strong>, thanks for reaching out!</p>
      <p style="color: #6b7280; font-size: 14px; line-height: 1.7; margin: 0 0 1.5rem;">
        I've received your message and will get back to you within <strong style="color: #111827;">24–48 hours</strong>.
        In the meantime, feel free to explore my work.
      </p>
      <div style="background: #f9fafb; border-left: 3px solid #d1d5db; padding: 1rem 1.25rem; margin: 0 0 1.5rem; border-radius: 0 8px 8px 0;">
        <p style="font-size: 12px; color: #9ca3af; margin: 0 0 0.4rem; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Your message</p>
        <p style="font-size: 14px; color: #374151; margin: 0; line-height: 1.6;">${message}</p>
      </div>
      <div style="border-top: 1px solid #f3f4f6; padding-top: 1.5rem;">
        <p style="font-size: 14px; color: #6b7280; margin: 0;">Talk soon,</p>
        <p style="font-size: 15px; font-weight: 600; color: #111827; margin: 0.25rem 0 0;">Sherrifdeen Tijani</p>
        <p style="font-size: 13px; color: #9ca3af; margin: 0.25rem 0 0;">Full-stack Developer</p>
      </div>
    </div>
    <div style="background: #f9fafb; border-top: 1px solid #f3f4f6; padding: 1rem 2.5rem; text-align: center;">
      <p style="font-size: 12px; color: #9ca3af; margin: 0;">You're receiving this because you submitted the contact form at sherrifdeen.dev</p>
    </div>
  </div>
`,
};

// Email 2 — Notification to you (the site owner)
const notificationEmail = {
  to: [{ email: process.env.CONTACT_RECEIVER_EMAIL! }],
  sender: {
    name: "Dev Portfolio",
    email: process.env.CONTACT_RECEIVER_EMAIL!,
  },
  subject: `New message from ${name}`,
  // Email 2 — Notification to you (site owner)
htmlContent: `
  <div style="font-family: sans-serif; max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
    <div style="background: #1e3a5f; padding: 1.5rem 2.5rem; display: flex; align-items: center; flex-gap: 1rem;">
      <div style="width: 40px; height: 40px; border-radius: 50%; background: #374151; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
      </div>
      <div>
        <p style="color: rgba(255,255,255,0.6); font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; margin: 0;">New contact</p>
        <p style="color: white; font-size: 16px; font-weight: 600; margin: 0;">Message from ${name}</p>
      </div>
    </div>
    <div style="padding: 2rem 2.5rem;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 1.5rem;">
        <div style="background: #f9fafb; border-radius: 8px; padding: 0.875rem 1rem;">
          <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.07em; color: #9ca3af; margin: 0 0 0.25rem; font-weight: 600;">Name</p>
          <p style="font-size: 14px; font-weight: 600; color: #111827; margin: 0;">${name}</p>
        </div>
        <div style="background: #f9fafb; border-radius: 8px; padding: 0.875rem 1rem;">
          <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.07em; color: #9ca3af; margin: 0 0 0.25rem; font-weight: 600;">Email</p>
          <p style="font-size: 14px; font-weight: 600; color: #111827; margin: 0;">${email}</p>
        </div>
      </div>
      <div style="background: #f9fafb; border-radius: 8px; padding: 1rem 1.25rem; margin-bottom: 1.5rem;">
        <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.07em; color: #9ca3af; margin: 0 0 0.5rem; font-weight: 600;">Message</p>
        <p style="font-size: 14px; color: #374151; line-height: 1.7; margin: 0;">${message}</p>
      </div>
      <div style="text-align: center;">
        <a href="mailto:${email}" style="display: inline-block; background: #0f172a; color: white; font-size: 13px; font-weight: 600; padding: 0.625rem 1.5rem; border-radius: 8px; text-decoration: none;">Reply to ${name}</a>
      </div>
    </div>
    <div style="background: #f9fafb; border-top: 1px solid #f3f4f6; padding: 1rem 2.5rem; text-align: center;">
      <p style="font-size: 12px; color: #9ca3af; margin: 0;">Sent via your portfolio contact form · sherrifdeen.dev</p>
    </div>
  </div>
`,
};

await Promise.all([
  client.transactionalEmails.sendTransacEmail(confirmationEmail),
  client.transactionalEmails.sendTransacEmail(notificationEmail),
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
