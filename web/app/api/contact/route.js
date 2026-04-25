const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_INQUIRIES = new Set([
  "Job opportunity",
  "Freelance project",
  "Collaboration",
  "Just saying hi",
]);

function htmlEscape(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request) {
  try {
    const { name = "", email = "", inquiry = "", message = "" } = await request.json();

    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim();
    const cleanInquiry = String(inquiry).trim();
    const cleanMessage = String(message).trim();

    if (!cleanName) {
      return Response.json({ error: "Name is required." }, { status: 400 });
    }
    if (!cleanEmail) {
      return Response.json({ error: "Email is required." }, { status: 400 });
    }
    if (!EMAIL_REGEX.test(cleanEmail)) {
      return Response.json({ error: "Please provide a valid email." }, { status: 400 });
    }
    if (!ALLOWED_INQUIRIES.has(cleanInquiry)) {
      return Response.json({ error: "Please choose a valid inquiry type." }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "samhavasdesign@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    if (!resendApiKey) {
      return Response.json({ error: "Contact form is not configured yet." }, { status: 503 });
    }

    const textBody = [
      "New contact form submission",
      "",
      `Name: ${cleanName}`,
      `Email: ${cleanEmail}`,
      `Inquiry: ${cleanInquiry}`,
      "",
      "Message:",
      cleanMessage || "(No message provided)",
    ].join("\n");

    const htmlBody = `
      <div style="font-family: ui-monospace, SFMono-Regular, Menlo, monospace; line-height: 1.5;">
        <p><strong>New contact form submission</strong></p>
        <p><strong>Name:</strong> ${htmlEscape(cleanName)}<br/>
        <strong>Email:</strong> ${htmlEscape(cleanEmail)}<br/>
        <strong>Inquiry:</strong> ${htmlEscape(cleanInquiry)}</p>
        <p><strong>Message:</strong><br/>${htmlEscape(cleanMessage || "(No message provided)").replaceAll("\n", "<br/>")}</p>
      </div>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: cleanEmail,
        subject: `Portfolio inquiry: ${cleanInquiry}`,
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!resendResponse.ok) {
      const errorPayload = await resendResponse.json().catch(() => ({}));
      const providerMessage = errorPayload?.message || "Email provider returned an error.";
      return Response.json({ error: providerMessage }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Unable to send message right now." }, { status: 500 });
  }
}
