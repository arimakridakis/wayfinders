const json = (body: Record<string, unknown>, status = 200) => Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
const asText = (value: unknown, maximumLength: number) => typeof value === 'string' ? value.trim().slice(0, maximumLength) : '';
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const environment = globalThis as typeof globalThis & { process?: { env: Record<string, string | undefined> } };

export default {
  async fetch(request: Request) {
    if (request.method !== 'POST') return json({ error: 'Method not allowed.' }, 405);
    const recaptchaSecret = environment.process?.env.RECAPTCHA_SECRET_KEY;
    const resendApiKey = environment.process?.env.RESEND_API_KEY;
    const fromEmail = environment.process?.env.REGISTRATION_FROM_EMAIL;
    const notificationEmail = environment.process?.env.CONTACT_NOTIFICATION_EMAIL ?? environment.process?.env.REGISTRATION_NOTIFICATION_EMAIL;
    if (!recaptchaSecret || !resendApiKey || !fromEmail || !notificationEmail) return json({ error: 'The contact form is temporarily unavailable.' }, 503);

    let payload: Record<string, unknown>;
    try { payload = await request.json() as Record<string, unknown>; } catch { return json({ error: 'Please try again.' }, 400); }
    const firstName = asText(payload.firstName, 100);
    const lastName = asText(payload.lastName, 100);
    const email = asText(payload.email, 254).toLowerCase();
    const message = asText(payload.message, 5000);
    const token = asText(payload.recaptchaToken, 4096);
    if (asText(payload.website, 200)) return json({ ok: true });
    if (!firstName || !lastName || !message || !emailPattern.test(email) || !token) return json({ error: 'Please complete each required field.' }, 400);

    const verification = await fetch('https://www.google.com/recaptcha/api/siteverify', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ secret: recaptchaSecret, response: token }) }).then((response) => response.json()) as { success?: boolean; score?: number; action?: string; hostname?: string };
    if (!verification.success || verification.action !== 'contact_inquiry' || (verification.score ?? 0) < 0.5 || verification.hostname !== new URL(request.url).hostname) return json({ error: 'We could not verify your message. Please try again.' }, 400);

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST', headers: { Authorization: `Bearer ${resendApiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: fromEmail, to: [notificationEmail], reply_to: email, subject: `Website contact: ${firstName} ${lastName}`, text: `New message from the Wayfinders contact form.\n\nName: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}` }),
    });
    if (!emailResponse.ok) return json({ error: 'We could not send your message. Please try again.' }, 502);
    return json({ ok: true });
  },
};
