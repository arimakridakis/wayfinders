const json = (body: Record<string, unknown>, status = 200) => Response.json(body, {
  status,
  headers: { 'Cache-Control': 'no-store' },
});

const asText = (value: unknown, maximumLength: number) => typeof value === 'string' ? value.trim().slice(0, maximumLength) : '';
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const environment = globalThis as typeof globalThis & { process?: { env: Record<string, string | undefined> } };

export default {
  async fetch(request: Request) {
    if (request.method !== 'POST') return json({ error: 'Method not allowed.' }, 405);

    const siteSecret = environment.process?.env.RECAPTCHA_SECRET_KEY;
    const mailchimpApiKey = environment.process?.env.MAILCHIMP_API_KEY;
    const audienceId = environment.process?.env.MAILCHIMP_AUDIENCE_ID;
    if (!siteSecret || !mailchimpApiKey || !audienceId) return json({ error: 'Newsletter signup is temporarily unavailable.' }, 503);

    let payload: Record<string, unknown>;
    try {
      payload = await request.json() as Record<string, unknown>;
    } catch {
      return json({ error: 'Please try again.' }, 400);
    }

    const email = asText(payload.email, 254).toLowerCase();
    const firstName = asText(payload.firstName, 100);
    const lastName = asText(payload.lastName, 100);
    const recaptchaToken = asText(payload.recaptchaToken, 4096);
    const honeypot = asText(payload.website, 200);
    if (honeypot) return json({ ok: true });
    if (!emailPattern.test(email) || !recaptchaToken) return json({ error: 'Please enter a valid email address.' }, 400);

    const verificationBody = new URLSearchParams({ secret: siteSecret, response: recaptchaToken });
    const remoteIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
    if (remoteIp) verificationBody.set('remoteip', remoteIp);

    const verificationResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: verificationBody,
    });
    const verification = await verificationResponse.json() as { success?: boolean; score?: number; action?: string; hostname?: string };
    const requestHostname = new URL(request.url).hostname;
    if (!verification.success || verification.action !== 'newsletter_signup' || (verification.score ?? 0) < 0.5 || verification.hostname !== requestHostname) {
      return json({ error: 'We could not verify this signup. Please try again.' }, 400);
    }

    const dataCenter = mailchimpApiKey.split('-').pop();
    if (!dataCenter) return json({ error: 'Newsletter signup is temporarily unavailable.' }, 503);
    const mailchimpResponse = await fetch(`https://${dataCenter}.api.mailchimp.com/3.0/lists/${encodeURIComponent(audienceId)}/members`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${mailchimpApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        merge_fields: { FNAME: firstName, LNAME: lastName },
      }),
    });

    if (mailchimpResponse.ok) return json({ ok: true });
    const mailchimpError = await mailchimpResponse.json().catch(() => null) as { title?: string } | null;
    if (mailchimpResponse.status === 400 && mailchimpError?.title === 'Member Exists') return json({ ok: true });
    return json({ error: 'We could not complete your signup. Please try again shortly.' }, 502);
  },
};
