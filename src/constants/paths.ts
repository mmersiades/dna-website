import { Route } from 'next';

export const paths = {
  home: '/' as Route,
  about: '/about' as Route,
  local: '/local' as Route,
  online: '/online' as Route,
  events: '/events',
  learn: '/learn' as Route,
  getInvolved: '/get-involved' as Route,
  contact: '#contact' as Route,
  socials: '#socials' as Route,
  subscribe: '#subscribe' as Route,
  studio: '/studio' as Route,
  participantsAgreement: '/participants-agreement' as Route,
  api: {
    sendEmail: '/api/send-email',
    google: {
      sheets: {
        groupIntent: '/api/google/sheets/group-intent',
        participantsAgreement: '/api/google/sheets/participants-agreements',
      },
    },
  },
  external: {
    facebook: 'https://www.facebook.com/degrowthnetworkaustralia' as Route,
    instagram: 'https://www.instagram.com/degrowthnetworkaustralia' as Route,
    developer: 'https://www.neonkingkong.com' as Route,
    exploreDegrowth:
      'https://explore.degrowth.net/degrowth/what-is-degrowth/' as Route,
  },
} as const;

export type AppPath = (typeof paths)[keyof typeof paths];
