export const site = {
  name: 'Wayfinders on the Hudson',
  description: 'A new website for Wayfinders on the Hudson is taking root.',
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Our mission', href: '/our-mission' },
    { label: 'The team', href: '/the-team' },
    { label: 'Fall programs', href: '/fall-2026-programs-overview' },
    { label: 'Base Camp', href: '/fall-2026-base-camp-k-8' },
    { label: 'Contact', href: '/contact-us' },
  ],
  contact: 'wayfindersonthehudson@gmail.com',
  donationUrl: '/donate',
  newsletterUrl: null,
  socialLinks: [
    { label: 'Instagram', href: 'https://www.instagram.com/wayfindersonthehudson/' },
    { label: 'Facebook', href: 'https://www.facebook.com/wayfinders.on.the.hudson' },
  ],
} as const;
