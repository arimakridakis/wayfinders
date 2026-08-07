export const site = {
  name: 'Wayfinders on the Hudson',
  description: 'A new website for Wayfinders on the Hudson is taking root.',
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Our approach', href: '/#approach' },
    { label: 'Stay connected', href: '/#stay-connected' },
  ],
  // Final contact, donation, newsletter, and social destinations are intentionally unset.
  contact: null,
  donationUrl: null,
  newsletterUrl: null,
  socialLinks: [],
} as const;
