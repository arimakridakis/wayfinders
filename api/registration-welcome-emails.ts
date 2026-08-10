import { baseCampWednesdayWelcome } from './registration-emails/base-camp-wednesday';
import { womensRetreatWelcome } from './registration-emails/womens-retreat';

interface WelcomeEmail {
  subject: string;
  text: string;
}

const emailFiles: Record<string, WelcomeEmail> = {
  'Fall 2026 Base Camp — Wednesday': baseCampWednesdayWelcome,
  'Autumn 2026 Women’s Retreat': womensRetreatWelcome,
};

export function welcomeEmailFor(program: string, firstName: string) {
  const emailFile = emailFiles[program];
  return emailFile ? {
    subject: emailFile.subject,
    text: emailFile.text.replaceAll('{{firstName}}', firstName),
  } : null;
}
