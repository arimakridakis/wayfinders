const json = (body: Record<string, unknown>, status = 200) => Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
const asText = (value: unknown, maximumLength: number) => typeof value === 'string' ? value.trim().slice(0, maximumLength) : '';
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const environment = globalThis as typeof globalThis & { process?: { env: Record<string, string | undefined> } };

export default {
  async fetch(request: Request) {
    if (request.method !== 'POST') return json({ error: 'Method not allowed.' }, 405);
    const recaptchaSecret = environment.process?.env.RECAPTCHA_SECRET_KEY;
    const resendApiKey = environment.process?.env.RESEND_API_KEY;
    const notificationEmail = 'wayfindersonthehudson@gmail.com';
    const fromEmail = environment.process?.env.REGISTRATION_FROM_EMAIL;
    if (!recaptchaSecret || !resendApiKey || !notificationEmail || !fromEmail) return json({ error: 'Scholarship applications are temporarily unavailable.' }, 503);

    let payload: Record<string, unknown>;
    try { payload = await request.json() as Record<string, unknown>; } catch { return json({ error: 'Please try again.' }, 400); }
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) return json({ error: 'Please try again.' }, 400);
    const program = asText(payload.program, 180);
    const firstName = asText(payload.firstName, 100);
    const lastName = asText(payload.lastName, 100);
    const email = asText(payload.email, 254).toLowerCase();
    const participantName = asText(payload.participantName, 160);
    const participantAge = asText(payload.participantAge, 3);
    const recaptchaToken = asText(payload.recaptchaToken, 4096);
    const honeypot = asText(payload.website, 200);
    if (honeypot) return json({ ok: true });
    if (!program || !firstName || !lastName || !participantName || !/^(?:0|[1-9][0-9]{0,2})$/.test(participantAge) || Number(participantAge) > 120 || !emailPattern.test(email) || !recaptchaToken) return json({ error: 'Please complete each required field.' }, 400);

    const verificationBody = new URLSearchParams({ secret: recaptchaSecret, response: recaptchaToken });
    const remoteIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
    if (remoteIp) verificationBody.set('remoteip', remoteIp);
    let verification: { success?: boolean; score?: number; action?: string; hostname?: string };
    try {
      const verificationResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: verificationBody, signal: AbortSignal.timeout(10000) });
      if (!verificationResponse.ok) throw new Error('Verification unavailable.');
      verification = await verificationResponse.json();
      if (!verification || typeof verification !== 'object') throw new Error('Invalid verification response.');
    } catch {
      return json({ error: 'We could not verify this application. Please try again.' }, 502);
    }
    if (!verification.success || verification.action !== 'program_scholarship' || (verification.score ?? 0) < 0.5 || verification.hostname !== new URL(request.url).hostname) return json({ error: 'We could not verify this application. Please try again.' }, 400);

    const send = async (to: string, replyTo: string, subject: string, text: string) => {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        signal: AbortSignal.timeout(10000),
        headers: { Authorization: `Bearer ${resendApiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: fromEmail, to: [to], reply_to: replyTo, subject, text }),
      });
      if (!response.ok) throw new Error('Email delivery request failed.');
    };
    try {
      await send(notificationEmail, email, `Scholarship application: ${program}`,
        `A new scholarship application has been received. Please review the details below and follow up with the applicant.\n\nProgram: ${program}\nApplicant: ${firstName} ${lastName}\nEmail: ${email}\nParticipant: ${participantName}\nParticipant age: ${participantAge}`);
    } catch {
      return json({ error: 'We could not submit your application. Please try again.' }, 502);
    }
    try {
      await send(email, notificationEmail, 'Thank you for your scholarship application',
        `Hi ${firstName},\n\nThank you for reaching out about scholarship support for ${program}. We’re grateful for your interest in joining the Wayfinders community.\n\nWe’ve received your application, and our team will review it with care and be in touch. We believe that time in nature and meaningful connection should be within reach, and we look forward to exploring how we can support your participation.\n\nIf you have any questions in the meantime, you’re welcome to reply to this email.\n\nWarmly,\nThe Wayfinders Team`);
    } catch {
      console.error('Scholarship applicant acknowledgment could not be sent; application notification was sent.');
      return json({ ok: true, confirmationEmailSent: false });
    }
    return json({ ok: true, confirmationEmailSent: true });
  },
};
