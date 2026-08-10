import { baseCampWednesdayWelcome } from '../registration-emails/base-camp-wednesday.js';
import { baseCampThursdayWelcome } from '../registration-emails/base-camp-thursday.js';
import { baseCampTuesdayWelcome } from '../registration-emails/base-camp-tuesday.js';
import { forestTotsFullSeriesWelcome } from '../registration-emails/forest-tots-full-series.js';
import { forestTotsSingleSessionWelcome } from '../registration-emails/forest-tots-single-session.js';
import { holidayCampIndigenousPeoplesDayWelcome } from '../registration-emails/holiday-camp-indigenous-peoples-day.js';
import { holidayCampVeteransDayWelcome } from '../registration-emails/holiday-camp-veterans-day.js';
import { motherhoodRisingSingleSessionWelcome } from '../registration-emails/motherhood-rising-single-session.js';
import { motherhoodRisingTuesdaySeriesWelcome } from '../registration-emails/motherhood-rising-tuesday-series.js';
import { motherhoodRisingWednesdaySeriesWelcome } from '../registration-emails/motherhood-rising-wednesday-series.js';
import { roseBlossomsCampingWeekendWelcome } from '../registration-emails/rose-blossoms-camping-weekend.js';
import { roseBlossomsFullJourneyWelcome } from '../registration-emails/rose-blossoms-full-journey.js';
import { wiseOwlsOneSessionWelcome } from '../registration-emails/wise-owls-one-session.js';
import { wiseOwlsTuesdaySeriesWelcome } from '../registration-emails/wise-owls-tuesday-series.js';
import { wiseOwlsWednesdaySeriesWelcome } from '../registration-emails/wise-owls-wednesday-series.js';
import { womensRetreatWelcome } from '../registration-emails/womens-retreat.js';

interface WelcomeEmail {
  subject: string;
  text: string;
}

const emailFiles: Record<string, WelcomeEmail> = {
  'Fall 2026 Base Camp — Tuesday': baseCampTuesdayWelcome,
  'Fall 2026 Base Camp — Wednesday': baseCampWednesdayWelcome,
  'Fall 2026 Base Camp — Thursday': baseCampThursdayWelcome,
  'Forest Tots — Full series': forestTotsFullSeriesWelcome,
  'Forest Tots — Single session': forestTotsSingleSessionWelcome,
  'Holiday Camp — Indigenous Peoples’ Day': holidayCampIndigenousPeoplesDayWelcome,
  'Holiday Camp — Veteran’s Day': holidayCampVeteransDayWelcome,
  'Motherhood Rising — Tuesday series': motherhoodRisingTuesdaySeriesWelcome,
  'Motherhood Rising — Wednesday series': motherhoodRisingWednesdaySeriesWelcome,
  'Motherhood Rising — Single session': motherhoodRisingSingleSessionWelcome,
  'Rose Blossoms — Camping weekend': roseBlossomsCampingWeekendWelcome,
  'Rose Blossoms — Full journey': roseBlossomsFullJourneyWelcome,
  'Autumn 2026 Women’s Retreat': womensRetreatWelcome,
  'Wise Owls — One session': wiseOwlsOneSessionWelcome,
  'Wise Owls — Tuesday series': wiseOwlsTuesdaySeriesWelcome,
  'Wise Owls — Wednesday series': wiseOwlsWednesdaySeriesWelcome,
};

export function welcomeEmailFor(program: string, firstName: string) {
  const emailFile = emailFiles[program];
  return emailFile ? {
    subject: emailFile.subject,
    text: emailFile.text.replaceAll('{{firstName}}', firstName),
  } : null;
}
