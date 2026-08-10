import baseCampWednesday from '../src/content/registration-emails/base-camp-wednesday.md?raw';
import womensRetreat from '../src/content/registration-emails/womens-retreat.md?raw';

interface WelcomeEmail {
  subject: string;
  text: string;
}

function parseWelcomeEmail(raw: string, firstName: string): WelcomeEmail {
  const [metadata = '', body = ''] = raw.trim().split(/\n---\n/, 2);
  const subject = metadata.match(/^Subject:\s*(.+)$/m)?.[1]?.trim();
  if (!subject || !body.trim()) throw new Error('Welcome email content is incomplete.');

  return {
    subject,
    text: body.trim().replaceAll('{{firstName}}', firstName),
  };
}

const emailFiles: Record<string, string> = {
  'Fall 2026 Base Camp — Wednesday': baseCampWednesday,
  'Autumn 2026 Women’s Retreat': womensRetreat,
};

export function welcomeEmailFor(program: string, firstName: string) {
  const emailFile = emailFiles[program];
  return emailFile ? parseWelcomeEmail(emailFile, firstName) : null;
}
