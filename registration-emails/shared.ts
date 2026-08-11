interface WelcomeEmailOptions {
  program: string;
  closing: string;
}

export function createWelcomeEmail({ program, closing }: WelcomeEmailOptions) {
  return {
    subject: 'Welcome to Wayfinders!',
    text: `Hi {{firstName}},

Thank you for registering for ${program}. We’re so glad you’ll be joining us this fall.

We know that signing up for something new is the beginning of a journey, and we’re honored that you’ve chosen to spend part of your season with the Wayfinders community.

Over the coming days, we'll send you another email with everything you’ll need to know before your program begins, including meeting details, what to bring, and any other helpful information. There’s nothing else you need to do right now except keep an eye on your inbox.

If you have not yet completed your payment, please take a moment to do so to reserve your place in the program.

If you have any questions before we reach out, please don't hesitate to contact us. We're always happy to help.

${closing}

Warmly,

The Wayfinders Team`,
  };
}
