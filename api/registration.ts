const json = (body: Record<string, unknown>, status = 200) => Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
const asText = (value: unknown, maximumLength: number) => typeof value === 'string' ? value.trim().slice(0, maximumLength) : '';
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const environment = globalThis as typeof globalThis & { process?: { env: Record<string, string | undefined> } };

async function storeRegistrationInSheet(registration: Record<string, unknown>) {
  const webhookUrl = environment.process?.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const webhookSecret = environment.process?.env.GOOGLE_SHEETS_WEBHOOK_SECRET;
  if (!webhookUrl || !webhookSecret) throw new Error('Google Sheets is not configured.');
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...registration, token: webhookSecret }),
    signal: AbortSignal.timeout(5000),
  });
  const result = await response.json().catch(() => null) as { ok?: boolean } | null;
  if (!response.ok || !result?.ok) throw new Error('Google Sheets save failed.');
}

async function subscribeToUpdates(email: string, firstName: string, lastName: string) {
  const apiKey = environment.process?.env.MAILCHIMP_API_KEY;
  const audienceId = environment.process?.env.MAILCHIMP_AUDIENCE_ID;
  const dataCenter = apiKey?.split('-').pop();
  if (!apiKey || !audienceId || !dataCenter) return;
  const response = await fetch(`https://${dataCenter}.api.mailchimp.com/3.0/lists/${encodeURIComponent(audienceId)}/members`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ email_address: email, status: 'subscribed', merge_fields: { FNAME: firstName, LNAME: lastName } }),
  });
  if (response.ok) return;
  const error = await response.json().catch(() => null) as { title?: string } | null;
  if (response.status === 400 && error?.title === 'Member Exists') return;
  throw new Error('Mailchimp signup failed.');
}

function welcomeEmailFor(program: string, firstName: string) {
  if (program === 'Fall 2026 Base Camp — Wednesday') {
    return {
      subject: 'Welcome to Wednesday Fall 2026 Base Camp',
      text: `Dear ${firstName},\n\nThank you for registering for the Wednesday session of the Fall 2026 Base Camp. Here are some details for this program.\n\nWarmly,`,
    };
  }

  if (program === 'Autumn 2026 Women’s Retreat') {
    return {
      subject: 'Welcome to the Autumn 2026 Women’s Retreat',
      text: `Dear ${firstName},\n\nThank you for registering for the Autumn 2026 Women’s Retreat. This is a test welcome email for the retreat, so we can confirm that the correct program message is being sent.\n\nWarmly,`,
    };
  }

  return null;
}

async function sendWelcomeEmail(program: string, firstName: string, email: string, fromEmail: string, replyTo: string, apiKey: string) {
  const welcome = welcomeEmailFor(program, firstName);
  if (!welcome) return;
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: fromEmail, to: [email], reply_to: replyTo, ...welcome }),
  });
  if (!response.ok) throw new Error('Welcome email failed.');
}

export default {
  async fetch(request: Request) {
    if (request.method !== 'POST') return json({ error: 'Method not allowed.' }, 405);
    const recaptchaSecret = environment.process?.env.RECAPTCHA_SECRET_KEY;
    const resendApiKey = environment.process?.env.RESEND_API_KEY;
    const notificationEmail = environment.process?.env.REGISTRATION_NOTIFICATION_EMAIL;
    const fromEmail = environment.process?.env.REGISTRATION_FROM_EMAIL;
    if (!recaptchaSecret || !resendApiKey || !notificationEmail || !fromEmail) return json({ error: 'Registration is temporarily unavailable.' }, 503);

    let payload: Record<string, unknown>;
    try { payload = await request.json() as Record<string, unknown>; } catch { return json({ error: 'Please try again.' }, 400); }
    const program = asText(payload.program, 180);
    const firstName = asText(payload.firstName, 100);
    const lastName = asText(payload.lastName, 100);
    const email = asText(payload.email, 254).toLowerCase();
    const participantName = asText(payload.participantName, 160);
    const participantAge = asText(payload.participantAge, 3);
    const recaptchaToken = asText(payload.recaptchaToken, 4096);
    const honeypot = asText(payload.website, 200);
    const marketingConsent = payload.marketingConsent === true;
    if (honeypot) return json({ ok: true });
    if (!program || !firstName || !lastName || !participantName || !/^(?:0|[1-9][0-9]{0,2})$/.test(participantAge) || Number(participantAge) > 120 || !emailPattern.test(email) || !recaptchaToken) return json({ error: 'Please complete each required field.' }, 400);

    const verificationBody = new URLSearchParams({ secret: recaptchaSecret, response: recaptchaToken });
    const remoteIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
    if (remoteIp) verificationBody.set('remoteip', remoteIp);
    const verificationResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: verificationBody });
    const verification = await verificationResponse.json() as { success?: boolean; score?: number; action?: string; hostname?: string };
    if (!verification.success || verification.action !== 'program_registration' || (verification.score ?? 0) < 0.5 || verification.hostname !== new URL(request.url).hostname) return json({ error: 'We could not verify this registration. Please try again.' }, 400);

    await storeRegistrationInSheet({ program, firstName, lastName, email, participantName, participantAge, marketingConsent }).catch(() => undefined);

    const notification = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${resendApiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: fromEmail,
        to: [notificationEmail],
        reply_to: email,
        subject: `Payment pending: ${program}`,
        text: `A registration details form was submitted. Payment has not yet been confirmed.\n\nProgram: ${program}\nParent/registrant: ${firstName} ${lastName}\nEmail: ${email}\nParticipant: ${participantName}\nAge: ${participantAge}\nEmail updates consent: ${marketingConsent ? 'Yes' : 'No'}`,
      }),
    });
    if (!notification.ok) return json({ error: 'We could not save your details. Please try again.' }, 502);
    await sendWelcomeEmail(program, firstName, email, fromEmail, notificationEmail, resendApiKey)
      .catch((error) => console.error('Welcome email error:', error));
    if (marketingConsent) await subscribeToUpdates(email, firstName, lastName).catch(() => undefined);
    return json({ ok: true });
  },
};
