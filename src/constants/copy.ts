import { paths } from '@/constants/paths';

const copy = {
  seo: {
    url: 'www.degrowthnetwork.au',
    email: 'degrowthnetwork@proton.me',
    fullName: 'Degrowth Network Australia',
    shortName: 'DNA',
    tagline: 'Towards a sustainable and just economy that works for us!',
    description:
      'This network is a place for those who want to, or are already, acting, organising and campaigning for a degrowth world.',
    keywords: [
      'reduced economic throughput',
      'reclaim the economy',
      'planned and democratic reduction of production and consumption',
      'climate crisis response',
      'collapse',
      'bring the economy back into balance',
      'safe, just and equitable',
      'capitalism',
      'cost-of-living crisis',
      'well-being and joy',
      'local community projects',
      'towards a steady-state economy',
      'within planetary boundaries',
      'frugal abundance',
      'degrowth movement',
      'degrowth activism and campaigns',
      'community organising',
    ],
    knowsAbout: [
      'degrowth',
      'ecological overshoot',
      'planetary boundaries',
      'steady-state economy',
    ],
  },
  landing: {
    header: 'What is Degrowth?',
    cta: {
      children: 'Get Involved',
      href: paths.getInvolved,
    },
    introQuote: {
      quote:
        '“Degrowth is not a one-size-fits-all concept, but a mosaic of ideas, practices, and visions that draw from various sources.”',
      author: 'Degrowth.net',
      citationText:
        'International Degrowth Network. (n.d.). What is Degrowth? Explore Degrowth. Retrieved 2025',
      citationUrl: paths.external.exploreDegrowth,
    },
    home: {
      href: paths.about,
    },
    quotePrefix: 'Degrowth is ',
  },
  about: {},
  'get-involved': {
    header: 'Degrowth Network Australia',
    links: [
      {
        href: paths.subscribe,
        children: 'Subscribe to our mailing list',
      },
      {
        href: paths.local,
        children: 'Join a local Degrowth group',
      },
      {
        href: paths.learn,
        children: 'Join a learning circle',
      },
      {
        href: paths.socials,
        children: 'Find us on socials',
      },
      {
        href: paths.events,
        children: 'Come to a DNA event',
      },
    ],
  },
  events: {
    error: 'Error fetching events',
    upcoming: 'Upcoming Events',
    card: {
      date: 'Date',
      location: 'Location',
    },
  },
  participantsAgreement: {
    form: {
      agreement: {
        label:
          "I agree to respect the DNA participants's agreement as written above",
      },
      name: {
        label: 'Name',
      },
      email: {
        label: 'Email',
      },
      submit: 'Submit',
      success: {
        title: 'Thanks!',
        message: 'Your agreement has been registered',
      },
      failure: {
        title: 'Failed to register agreement.',
        message: 'Please try again later.',
      },
      existing: {
        title: 'Already registered!',
        message: (email: string, version: number) =>
          `${email} has already registered their agreement with version ${version}`,
      },
    },
  },
  qrCodes: {
    title: 'QR Codes',
    pdfTitle: 'Degrowth Network Australia',
    instructions: 'Select page to link to',
    download: 'Download QR Code',
    links: [
      {
        label: "Participants' Agreement",
        path: paths.participantsAgreement,
      },
      {
        label: 'Landing Page',
        path: paths.home,
      },
      {
        label: 'Get Involved',
        path: paths.getInvolved,
      },
      {
        label: 'Local Groups Page',
        path: paths.local,
      },
      {
        label: 'Events Page',
        path: paths.events,
      },
      {
        label: 'Online Groups Page',
        path: paths.online,
      },
      {
        label: 'About Page',
        path: paths.about,
      },
      {
        label: 'Learn More',
        path: paths.learn,
      },
    ],
  },
  local: {
    title: 'Local Degrowth Groups',
    interest: {
      title:
        'Even if there is no local Degrowth group in your area, there may be other people nearby you who are interested in connecting with you and/or starting a group.',
      state: 'State',
      region: 'Region',
      country: 'Country',
      select: 'Select...',
      selectStateFirst: 'Select state first...',
      table: {
        area: 'Area',
        people: 'People wanting group',
      },
    },
    intent: {
      title: 'Register your interest in joining a new group in your area.',
      name: 'Name',
      email: 'Email',
      submit: 'Submit',
      success: {
        title: 'Thanks!',
        message: 'Your interest in joining a group has been registered',
      },
      failure: {
        title: 'Failed to register interest.',
        message: 'Please try again later.',
      },
    },
    contacts: {
      title: 'Contact',
      email: 'Email',
      emailCopied: 'Email copied',
      website: 'Website',
    },
  },
  learn: {
    degrowthTitle: 'More about Degrowth',
    usefulTitle: 'Useful Resources',
    alliesTitle: 'Allied Organisations and Movements',
  },
  online: {
    title: 'Online DNA Groups',
    groupUrl: 'Find out more',
    form: {
      instructions: {
        a: 'Get the details for the next ',
        b: ' meeting.',
      },
      success: {
        title: 'Thanks!',
        subtitle: "We'll contact you soon with the meeting details",
      },
      failure: {
        title: 'Failed to send message',
        subtitle: 'Please try again later or contact degrowthnetwork@proton.me',
      },
    },
  },
  footer: {
    contact: {
      title: 'Contact',
      success: {
        title: 'Message sent.',
        message: "Thank you. We'll reply via email soon",
      },
      failure: {
        title: 'Failed to send.',
        message: 'Please try again later or contact degrowthnetwork@proton.me',
      },
    },
    mailingList: {
      title: 'Mailing List',
      label: 'Email',
      button: 'Subscribe',
      success: {
        title: 'Thank you for subscription request!',
        message:
          "Once we've completed your subscription, you'll get a confirmation email.",
      },
      failure: {
        title: 'Failed to subscribe.',
        message: 'Please try again later or contact degrowthnetwork@proton.me',
      },
    },
    socials: {
      title: 'Socials',
      networks: [
        {
          icon: 'icon-[lucide--facebook]',
          url: paths.external.facebook,
          networkName: 'Facebook',
          name: 'Degrowth Network Australia',
        },
        {
          icon: 'icon-[lucide--instagram]',
          url: paths.external.instagram,
          networkName: 'Instagram',
          name: 'DNA (@degrowthnetworkaustralia)',
        },
      ],
    },
    sitemap: {
      title: 'Sitemap',
      links: [
        {
          children: 'Landing',
          href: paths.home,
        },
        {
          children: 'About',
          href: paths.about,
        },
        {
          children: 'Local Groups',
          href: paths.local,
        },
        {
          children: 'Online Groups',
          href: paths.online,
        },
        {
          children: 'Events',
          href: paths.events,
        },
        {
          children: 'Learn More',
          href: paths.learn,
        },
        {
          children: "Participants' Agreement",
          href: paths.participantsAgreement,
        },
        {
          children: 'QR Codes',
          href: paths.qrCodes,
        },
        {
          children: 'Get Involved',
          href: paths.getInvolved,
        },
        {
          children: 'Admin',
          href: paths.studio,
        },
      ],
    },
    websiteBy: 'Website by',
    developer: {
      name: 'Neon King Kong',
      url: paths.external.developer,
    },
  },
  header: {
    links: [
      {
        label: 'About',
        path: paths.about,
      },
      {
        label: 'Local Groups',
        path: paths.local,
      },
      {
        label: 'Online Groups',
        path: paths.online,
      },
      {
        label: 'Events',
        path: paths.events,
      },
      {
        label: 'Learn More',
        path: paths.learn,
      },
      {
        label: 'Contact',
        path: paths.contact,
      },
    ],
    cta: {
      children: 'Get Involved',
      href: paths.getInvolved,
    },
    navLabels: {
      mobile: 'Main Navigation (Mobile)',
      desktop: 'Main Navigation (Desktop)',
    },
    menu: {
      title: 'Site Navigation',
      open: 'Open Navigation Menu',
      close: 'Close Navigation Menu',
    },
  },
  error: {
    title: "Uh-oh. Something's gone terribly wrong.",
    home: 'Go to Home',
    reload: 'Reload Page',
  },
  notFound: {
    title: "Oops. Looks like that page doesn't exist.",
    home: 'Return Home',
  },
};

export default copy;
