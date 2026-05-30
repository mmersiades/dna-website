import {
  HumantixEvent,
  HumantixEventDate,
  HumantixEventLocation,
} from '@/app/services/HumantixApi';
import { TableRow } from '@/app/services/SheetsApi';
import { QuoteProps } from '@/components/landing/Quote';
import {
  EXT_RESOURCES_QUERYResult,
  GROUPS_QUERYResult,
  ONLINE_GROUPS_QUERYResult,
  PAGE_QUERYResult,
  PARTICIPANTS_AGREEMENT_QUERYResult,
  Seo,
} from '@/sanity/types';

class TestFixtures {
  static eventDates: HumantixEventDate[] = [
    {
      deleted: false,
      disabled: false,
      endDate: '2026-03-22T08:00:00.100Z',
      startDate: '2026-03-22T00:00:00.100Z',
      _id: '6975d6cd9c1830e9b608a4ba',
    },
  ];

  static eventLocation: HumantixEventLocation = {
    address: '11/13 Darley St, Newtown NSW 2042, Australia',
    city: 'Newtown',
    country: 'AU',
    latLng: [-33.9058763, 151.1802907],
    placeId: 'ChIJ-U_cJjewEmsR9gpzrb0YskA',
    region: 'NSW',
    type: 'address',
    venueName: 'Newtown Neighbourhood Centre',
  };

  static event: HumantixEvent = {
    _id: '6975d6cd9c1830e9b608a4b4',
    userId: 'yQpinmGCKAWKJetDZJsPJUoL2gz2',
    organiserId: '63c5dceacc6ae437cbad00ff',
    currency: 'AUD',
    name: 'Degrowth Festival 2026',
    description: '',
    sharingDescription:
      'Festival to bring community together sharing degrowth-aligned skills, have fun and dance together for resilience and community cohesion through collapse.',
    slug: 'degrowth-festival-2026',
    url: 'https://events.humanitix.com/degrowth-festival-2026',
    tagIds: [],
    category: '',
    classification: {
      category: 'communityAndCulture',
      subcategory: 'other',
    },
    artists: [],
    public: true,
    published: true,
    suspendSales: false,
    markedAsSoldOut: false,
    startDate: '2026-03-22T00:00:00.100Z',
    endDate: '2026-03-22T08:00:00.100Z',
    timezone: 'Australia/Melbourne',
    totalCapacity: 1000,
    ticketTypes: [],
    pricing: {
      maximumPrice: 0,
      minimumPrice: 0,
    },
    paymentOptions: {
      refundSettings: {
        refundPolicy: '',
        customRefundPolicy: '',
      },
    },
    publishedAt: '2026-01-25T08:59:31.817Z',
    additionalQuestions: [],
    bannerImage: { url: '/birdhouse-stippled-card-light.svg' },
    featureImage: { url: '' },
    socialImage: { url: '' },
    eventLocation: this.eventLocation,
    dates: this.eventDates,
    packagedTickets: [],
    keywords: [],
    location: 'AU',
    createdAt: '2026-01-25T08:39:41.209Z',
    updatedAt: '2026-03-10T01:08:57.131Z',
  };

  static degrowthDescriptionPublished: Omit<QuoteProps, 'index'> = {
    author: 'Jason Hickel, 2020',
    citationText:
      'Hickel, J. (2020). Less is more: How degrowth will save the world. Windmill.',
    citationUrl: 'https://www.jasonhickel.org/less-is-more',
    quote:
      'A planned reduction of excess energy and resource use to bring the economy back into balance with the living world in a safe, just and equitable way.',
    statement: 'a planned reduction.',
    identifier: null,
  };

  static degrowthDescriptionUnpublished: Omit<QuoteProps, 'index'> = {
    author: 'Michael M',
    citationText: null,
    citationUrl: null,
    identifier: 'software developer',
    quote:
      "It's about making decisions about what we make and what we buy based on what makes us happy, rather than what makes money. And it’s about us making those decisions, not corporations.",
    statement: 'about decisions.',
  };

  static nationalGroups: ONLINE_GROUPS_QUERYResult = [
    {
      _id: '22c96ab8-baae-472d-8c4c-6e128e4602cb',
      category: 'meeting',
      description:
        'Nationally we meet online on the second Wednesday of the month at 6:30pm AEST. Sign up to the email list to receive the link to join us. All welcome. :-)\n' +
        '\n' +
        'We are a diverse group that come together to discuss ways we can disseminate degrowth information and resources. Some of us are working or studying in this field and others are just keen to participate in a sustainable future. Together we can encourage others too.',
      image: null,
      meetingFrequency: 'Monthly',
      title: 'National DNA online monthly meeting',
      url: null,
    },
    {
      _id: '421a2cb1-1852-455e-a579-7da0c68089f4',
      category: 'learning-circle',
      description:
        'The aim of this peer learning circle is for us all to explore and learn together about the processes and practices of group decision making. Good foundations for decision making helps groups share power and make better decisions together, and ensures all group members feel included, good about belonging to a group and about implementing a group’s decisions. We feel this is crucial for the world we are wanting to bring into existence to have a culture of social cohesion, and all the work we need to do together to get there.',
      image: null,
      meetingFrequency: 'Monthly',
      title: 'Decision Making Learning Circle',
      url: null,
    },
  ];

  static localGroups: GROUPS_QUERYResult = [
    {
      _id: '741819dd-67b0-4212-8c74-2a08fdc27266',
      activities: [
        {
          _key: '7cec3871dba2',
          _type: 'groupActivity',
          activityLabel: '2026 Degrowth Festival',
          activityUrl: 'https://tinyurl.com/degrowthfest26',
        },
      ],
      blurb:
        'Naarm Degrowth is a network for those who want to and/or are acting, organising and fighting for a degrowth world. We gather locally in person every first Wednesday of the month to learn from and support each other, share food and updates, and plan projects. ',
      contactEmail: 'degrowthnetwork@proton.me',
      fullName: 'Naarm/Kulin Degrowth',
      groupPhoto: {
        _type: 'image',
        altText: '11 Naarm Degrowth posing for photo in park',
        asset: {
          _ref: 'image-e9bd23a53c6a0479fdd430375578b89ecda60153-1000x563-jpg',
          _type: 'reference',
        },
        caption:
          'Naarm/Kulin Degrowth practising conviviality at a social picnic in the park',
        crop: {
          _type: 'sanity.imageCrop',
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
        },
        hotspot: {
          _type: 'sanity.imageHotspot',
          height: 0.803795507579373,
          width: 0.3723651920610606,
          x: 0.5,
          y: 0.5981022462103135,
        },
      },
      links: [
        {
          _key: 'ec9b18708307',
          _type: 'groupLink',
          category: 'matrix',
          label: 'Matrix',
          url: 'https://matrix.to/#/!fsQeoZbQMxpiAcOVnZ:matrix.org?via=matrix.org',
        },
      ],
      shortName: 'Naarm DNA',
      slug: {
        _type: 'slug',
        current: 'naarm-kulin-degrowth',
      },
      website: null,
    },
  ];

  static groupInterestData_Australia: TableRow[] = [
    {
      label: 'Australia',
      count: 6,
      bold: true,
    },
  ];

  static groupInterestData_State = (state: string): TableRow[] => [
    {
      label: state,
      count: 6,
      bold: true,
    },
  ];

  static groupInterestData_Region = (
    state: string,
    region: string,
  ): TableRow[] => [
    {
      label: state,
      count: 6,
      bold: true,
    },
    {
      label: region,
      count: 2,
      bold: true,
    },
  ];

  static groupIntentSheetsResponse = {
    data: {
      range: 'Sheet1!A1:Z983',
      majorDimension: 'ROWS',
      values: [
        ['date', 'name', 'email', 'state', 'subregion', 'country'],
        [
          '2025-11-28',
          'Finn Leary',
          'finngleary@gmail.com',
          'TAS',
          'Hobart',
          'Lairmairrener',
        ],
        [
          '2025-11-28',
          'Sandy Wilder',
          'southernsandpiper@gmail.com',
          'NSW',
          'Capital Region',
          'Yuin',
        ],
        [
          '2025-11-28',
          'Adriana Boisen',
          'adriana.boisen@gmail.com',
          'NSW',
          'Illawarra',
          'Tharawal',
        ],
        [
          '2025-11-28',
          'Russ Hancock ',
          'russhancock56@gmail.com',
          'NSW',
          'Newcastle and Lake Macquarie',
          'Awabakal',
        ],
        [
          '2025-11-28',
          'Cath Connor',
          'catco53@gmail.com',
          'NSW',
          'Central Coast',
          'Kuring-gai',
        ],
        [
          '2025-11-28',
          'Kayleen Deaves',
          'kayleen.deaves@gmail.com',
          'NSW',
          'Newcastle and Lake Macquarie',
          'Woremi',
        ],
        [
          '2025-11-28',
          'Amber Gleeson-Watt',
          'ambolynnie1124@gmail.com',
          'QLD',
          'Gold Coast',
          'Bandjalung',
        ],
        [
          '2025-11-28',
          'Dayna Allan',
          'daynaallan0@gmail.com',
          'QLD',
          'Gold Coast',
          'Bandjalung',
        ],
        [
          '2025-11-28',
          'Max Wood',
          'maxwwood@hotmail.com',
          'ACT',
          'Australian Capital Territory',
          'Ngunawal',
        ],
        [
          '2025-11-28',
          'Lauren Dillon',
          'lauren.nicole7789@gmail.com',
          'VIC',
          'Geelong',
          'Gulidjan',
        ],
        [
          '2025-11-28',
          'Ross Nicol',
          'ross.nicol@outlook.com.au',
          'NSW',
          'Newcastle and Lake Macquarie',
          'Awabakal',
        ],
        [
          '2025-11-28',
          'Jo Barry-Murphy',
          'jlbarrym@gmail.com',
          'SA',
          'Adelaide - Central and Hills',
          'Kaurna',
        ],
        [
          '2025-11-28',
          'Myriam Beyoddi',
          'myriam.beyoddi@gmail.com',
          'QLD',
          'Gold Coast',
          'Bandjalung',
        ],
        [
          '2025-11-28',
          'Nicole Cooney',
          'nicintaz@hotmail.com',
          'NSW',
          'Newcastle and Lake Macquarie',
          'Awabakal',
        ],
        [
          '2025-11-28',
          'Luke Tracey',
          'ltracey',
          'NSW',
          'Newcastle and Lake Macquarie',
          'Woremi',
        ],
        [
          '2025-11-28',
          'Charmian Eckersley',
          'charmian.eckersley@gmail.com',
          'NSW',
          'Newcastle and Lake Macquarie',
          'Awabakal',
        ],
        [
          '2025-11-28',
          'Lindsay Dean',
          'ljdean85@gmail.com',
          'NSW',
          'Hunter Valley exc Newcastle',
          'Wonnarua',
        ],
        [
          '2025-11-28',
          'Ian Hodgson',
          'ianatminda@gmail.com',
          'NSW',
          'Hunter Valley exc Newcastle',
          'Wonnarua',
        ],
        [
          '2025-11-28',
          'Rob Day',
          'ormerday@gmail.com',
          'VIC',
          'Melbourne - North East',
          'Woiworung',
        ],
        [
          '2025-11-28',
          'Rupert Daniel',
          'rupert.daniel@futurehabitats.com.au',
          'NSW',
          'Newcastle and Lake Macquarie',
          'Awabakal',
        ],
        [
          '2026-03-24',
          'Jon Watson',
          'slate37@hotmail.com',
          'QLD',
          'Brisbane - West',
        ],
        [
          '2026-04-07',
          'Holstein Wong',
          'holstein.wong@gmail.com',
          'QLD',
          'Brisbane Inner City',
        ],
        [
          '2026-04-07',
          'Emelie Watson',
          'emelie.watson@gmail.com',
          'QLD',
          'Brisbane - West',
        ],
        [
          '2026-04-08',
          'Kade',
          'kbiker68@yahoo.com',
          'NSW',
          'New England and North West',
        ],
        [
          '2026-04-14',
          'Kevin Cox',
          'kevin@wlpc.com.au',
          'ACT',
          'Australian Capital Territory',
        ],
        [
          '2026-04-16',
          'Max Wood',
          'maxwwood@hotmail.com',
          'ACT',
          'Australian Capital Territory',
          'Ngunawal',
        ],
        [
          '2026-05-08',
          'gerard',
          'gerardtenhacken@gmail.com',
          'QLD',
          'Brisbane - North',
        ],
      ],
    },
  };

  static groupInterestData_Country = (
    state: string,
    region: string,
    country: string,
  ): TableRow[] => [
    {
      label: state,
      count: 6,
      bold: true,
    },
    {
      label: region,
      count: 2,
      bold: true,
    },
    {
      label: country,
      count: 2,
      bold: true,
    },
  ];

  static pastEvents: HumantixEvent[] = [
    {
      _id: '69aa125f1babd956662e22a9',
      userId: 'yQpinmGCKAWKJetDZJsPJUoL2gz2',
      organiserId: '63c5dceacc6ae437cbad00ff',
      currency: 'AUD',
      name: 'Paths to Degrowth series',
      description:
        '<p>Degrowth Network Australia is presenting a series of three workshops on strategy to stimulate thinking and discussion among our local action groups</p>',
      sharingDescription:
        'A series of three Degrowth strategy workshops presented by Ted Trainer (Tue 7 Apr), Tim Hollo (Thu 16 Apr) and Anisa (Tue 21 Apr).',
      slug: 'strategy-workshop-i-does-degrowth-need-more-focus-ted-trainer',
      url: 'https://events.humanitix.com/strategy-workshop-i-does-degrowth-need-more-focus-ted-trainer',
      tagIds: [],
      classification: {
        type: 'seminarOrTalk',
        category: 'charityAndCauses',
        subcategory: 'environment',
      },
      public: true,
      published: true,
      suspendSales: false,
      markedAsSoldOut: false,
      startDate: '2026-04-07T08:00:00.900Z',
      endDate: '2026-04-21T09:30:00.900Z',
      timezone: 'Australia/Sydney',
      totalCapacity: 400,
      ticketTypes: [
        {
          _id: '69aa125f1babd956662e22b9',
          name: '7 April 6-7pm: Focussing the Degrowth movement, with Ted Trainer',
          price: 0,
          quantity: 100,
          disabled: false,
          deleted: false,
          isDonation: false,
        },
        {
          _id: '69b099097aa53c3cc7d88594',
          name: '16 April 6-7pm: Degrowth by direct action, with Tim Hollo',
          price: 0,
          quantity: 150,
          disabled: false,
          deleted: false,
          isDonation: false,
        },
        {
          _id: '69b099237aa53c3cc7d88595',
          name: '21 April 6pm-7.30pm: Bringing Degrowth into reality, with Anisa',
          price: 0,
          quantity: 150,
          disabled: false,
          deleted: false,
          isDonation: false,
        },
      ],
      pricing: {
        minimumPrice: 0,
        maximumPrice: 0,
      },
      paymentOptions: {
        refundSettings: {
          refundPolicy: '',
          customRefundPolicy: '',
        },
      },
      publishedAt: '2026-03-05T23:49:22.334Z',
      additionalQuestions: [],
      bannerImage: {
        url: 'https://images.humanitix.com/i/5bb70c3d-b20c-4998-90e8-a5e282d1bfad.png@original',
      },
      eventLocation: {
        type: 'online',
        latLng: [],
        instructions:
          'Online meeting on Zoom. Meeting link will be sent to you by email.',
      },
      dates: [
        {
          _id: '69aa125f1babd956662e22b0',
          startDate: '2026-04-07T08:00:00.900Z',
          endDate: '2026-04-21T09:30:00.900Z',
          disabled: false,
          deleted: false,
        },
      ],
      packagedTickets: [],
      keywords: [
        'degrowth',
        'australia',
        'capitalism',
        'economics',
        'social change',
        'activism',
        'environment',
      ],
      location: 'AU',
      createdAt: '2026-03-05T23:31:43.215Z',
      updatedAt: '2026-04-19T08:08:55.711Z',
    },
    {
      _id: '6975d6cd9c1830e9b608a4b4',
      userId: 'yQpinmGCKAWKJetDZJsPJUoL2gz2',
      organiserId: '63c5dceacc6ae437cbad00ff',
      currency: 'AUD',
      name: 'Degrowth Festival 2026',
      description:
        '<p>A jam packed day of community resilience, convivial technology and joy - prefiguring the truly sustainable world we need.</p>',
      sharingDescription:
        'Festival to bring community together sharing degrowth-aligned skills, have fun and dance together for resilience and community cohesion through collapse.',
      slug: 'degrowth-festival-2026',
      url: 'https://events.humanitix.com/degrowth-festival-2026',
      tagIds: [],
      classification: {
        type: 'festivalOrFair',
        category: 'communityAndCulture',
        subcategory: 'other',
      },
      public: true,
      published: true,
      suspendSales: false,
      markedAsSoldOut: false,
      startDate: '2026-03-22T00:00:00.100Z',
      endDate: '2026-03-22T08:00:00.100Z',
      timezone: 'Australia/Melbourne',
      totalCapacity: 1000,
      ticketTypes: [
        {
          _id: '6975d6cd9c1830e9b608a4c3',
          name: 'General Admission',
          price: 0,
          quantity: 1000,
          disabled: false,
          deleted: false,
          isDonation: false,
        },
        {
          _id: '6975daa9e1fe663a8e41f8b3',
          name: 'Help us pay for the venue costs and any future degrowth related events. Degrowth Network Australia is fully volunteer run :)',
          price: 0,
          priceRange: {
            enabled: true,
          },
          quantity: 1,
          disabled: false,
          deleted: false,
          isDonation: true,
        },
      ],
      pricing: {
        minimumPrice: 0,
        maximumPrice: 0,
      },
      paymentOptions: {
        refundSettings: {
          refundPolicy: '',
          customRefundPolicy: '',
        },
      },
      publishedAt: '2026-01-25T08:59:31.817Z',
      additionalQuestions: [
        {
          _id: '698bc3937c77ff604895705f',
          question: 'How did you hear about the festival?',
          required: false,
          perOrder: false,
          disabled: false,
          createdAt: '2026-02-10T23:47:46.783Z',
          updatedAt: '2026-02-10T23:47:46.783Z',
        },
      ],
      bannerImage: {
        url: 'https://images.humanitix.com/i/dapRseh7TyaVUJmB5Avv@original',
      },
      eventLocation: {
        type: 'address',
        venueName: 'Curtain Square',
        address: 'Rathdowne St, Carlton North VIC 3054, Australia',
        latLng: [-37.7893717, 144.9731269],
        placeId: 'ChIJ_ycxaSVD1moR8H8xBXZWBA8',
        city: 'Carlton North',
        region: 'VIC',
        country: 'AU',
      },
      dates: [
        {
          _id: '6975d6cd9c1830e9b608a4ba',
          startDate: '2026-03-22T00:00:00.100Z',
          endDate: '2026-03-22T08:00:00.100Z',
          disabled: false,
          deleted: false,
        },
      ],
      packagedTickets: [],
      keywords: [],
      location: 'AU',
      createdAt: '2026-01-25T08:39:41.209Z',
      updatedAt: '2026-04-19T08:08:55.711Z',
    },
    {
      _id: '697bd42faefb673348cecc78',
      userId: 'yQpinmGCKAWKJetDZJsPJUoL2gz2',
      organiserId: '63c5dceacc6ae437cbad00ff',
      currency: 'AUD',
      name: 'Screening of the Cost of Growth hosted by Sydney Degrowth',
      description:
        '<p>Will the renewable transition save us from the ecological crisis?</p>',
      sharingDescription:
        "The Cost of Growth explores uncomfortable realities about 'green growth' and invites us to look harder at our assumptions about the nature of growth.",
      slug: 'screening-of-the-cost-of-growth-hosted-by-sydney-degrowth',
      url: 'https://events.humanitix.com/screening-of-the-cost-of-growth-hosted-by-sydney-degrowth',
      tagIds: [],
      classification: {
        type: 'screening',
        category: 'charityAndCauses',
        subcategory: 'environment',
      },
      public: true,
      published: true,
      suspendSales: false,
      markedAsSoldOut: false,
      startDate: '2026-03-12T07:30:00.800Z',
      endDate: '2026-03-12T10:00:00.800Z',
      timezone: 'Australia/Sydney',
      totalCapacity: 60,
      ticketTypes: [
        {
          _id: '697bd42faefb673348cecc87',
          name: 'General Admission',
          price: 9,
          quantity: 60,
          disabled: false,
          deleted: false,
          isDonation: false,
        },
        {
          _id: '697bd48f1aed409ae438ad1e',
          name: 'Optional donation to Degrowth Network Australia',
          price: 0,
          priceRange: {
            enabled: true,
          },
          quantity: 1,
          disabled: false,
          deleted: false,
          isDonation: true,
        },
      ],
      pricing: {
        minimumPrice: 9,
        maximumPrice: 9,
      },
      paymentOptions: {
        refundSettings: {
          refundPolicy: 'Refunds are available up to 7 days prior to the event',
          customRefundPolicy: '',
        },
      },
      publishedAt: '2026-02-12T23:52:08.917Z',
      additionalQuestions: [],
      bannerImage: {
        url: 'https://images.humanitix.com/i/hKdcV3YZS4ePgPyxxeLB@original',
      },
      eventLocation: {
        type: 'address',
        venueName: 'Newtown Neighbourhood Centre',
        address: '11/13 Darley St, Newtown NSW 2042, Australia',
        latLng: [-33.9058763, 151.1802907],
        placeId: 'ChIJ-U_cJjewEmsR9gpzrb0YskA',
        city: 'Newtown',
        region: 'NSW',
        country: 'AU',
      },
      dates: [
        {
          _id: '697bd42faefb673348cecc7e',
          startDate: '2026-03-12T07:30:00.800Z',
          endDate: '2026-03-12T10:00:00.800Z',
          disabled: false,
          deleted: false,
        },
      ],
      packagedTickets: [],
      keywords: [],
      location: 'AU',
      createdAt: '2026-01-29T21:42:07.224Z',
      updatedAt: '2026-04-19T08:08:55.711Z',
    },
  ];

  static futureEvents = (): HumantixEvent[] => {
    const startDate = '2046-05-06T18:00:00Z';
    const endDate = '2046-05-06T19:00:00Z';

    return [
      {
        _id: '6975d6cd9c1830e9b608a4b4',
        userId: 'yQpinmGCKAWKJetDZJsPJUoL2gz2',
        organiserId: '63c5dceacc6ae437cbad00ff',
        currency: 'AUD',
        name: 'Degrowth Festival 2026',
        description:
          '<p>A jam packed day of community resilience, convivial technology and joy - prefiguring the truly sustainable world we need.</p>',
        sharingDescription:
          'Festival to bring community together sharing degrowth-aligned skills, have fun and dance together for resilience and community cohesion through collapse.',
        slug: 'degrowth-festival-2026',
        url: 'https://events.humanitix.com/degrowth-festival-2026',
        tagIds: [],
        classification: {
          type: 'festivalOrFair',
          category: 'communityAndCulture',
          subcategory: 'other',
        },
        public: true,
        published: true,
        suspendSales: false,
        markedAsSoldOut: false,
        startDate,
        endDate,
        timezone: 'Australia/Melbourne',
        totalCapacity: 1000,
        ticketTypes: [
          {
            _id: '6975d6cd9c1830e9b608a4c3',
            name: 'General Admission',
            price: 0,
            quantity: 1000,
            disabled: false,
            deleted: false,
            isDonation: false,
          },
          {
            _id: '6975daa9e1fe663a8e41f8b3',
            name: 'Help us pay for the venue costs and any future degrowth related events. Degrowth Network Australia is fully volunteer run :)',
            price: 0,
            priceRange: {
              enabled: true,
            },
            quantity: 1,
            disabled: false,
            deleted: false,
            isDonation: true,
          },
        ],
        pricing: {
          minimumPrice: 0,
          maximumPrice: 0,
        },
        paymentOptions: {
          refundSettings: {
            refundPolicy: '',
            customRefundPolicy: '',
          },
        },
        publishedAt: '2026-01-25T08:59:31.817Z',
        additionalQuestions: [
          {
            _id: '698bc3937c77ff604895705f',
            question: 'How did you hear about the festival?',
            required: false,
            perOrder: false,
            disabled: false,
            createdAt: '2026-02-10T23:47:46.783Z',
            updatedAt: '2026-02-10T23:47:46.783Z',
          },
        ],
        bannerImage: {
          url: 'https://images.humanitix.com/i/dapRseh7TyaVUJmB5Avv@original',
        },
        eventLocation: {
          type: 'address',
          venueName: 'Curtain Square',
          address: 'Rathdowne St, Carlton North VIC 3054, Australia',
          latLng: [-37.7893717, 144.9731269],
          placeId: 'ChIJ_ycxaSVD1moR8H8xBXZWBA8',
          city: 'Carlton North',
          region: 'VIC',
          country: 'AU',
        },
        dates: [
          {
            _id: '6975d6cd9c1830e9b608a4ba',
            startDate,
            endDate,
            disabled: false,
            deleted: false,
          },
        ],
        packagedTickets: [],
        keywords: [],
        location: 'AU',
        createdAt: '2026-01-25T08:39:41.209Z',
        updatedAt: '2026-04-19T08:08:55.711Z',
      },
    ];
  };

  static externalResourcesDegrowth: EXT_RESOURCES_QUERYResult = [
    {
      _id: '29ce12b4-907d-4d10-a9d1-271c4a723812',
      category: 'degrowth',
      description:
        'Working for transition from consumer society to a simpler, more cooperative, just and ecologically sustainable society.',
      logo: null,
      thumbnail: null,
      title: 'The Simpler Way',
      url: 'https://thesimplerway.info/',
    },
    {
      _id: '8ce7ec06-0854-4199-8358-438ff214c275',
      category: 'degrowth',
      description:
        'Critics argue that endless growth on a planet with finite resources is driving the climate crisis and increasing inequality. This series examines alternative economic models',
      logo: null,
      thumbnail: {
        _type: 'image',
        altText: 'Antonio Guterres giving a speech',
        asset: {
          _ref: 'image-117a7a10c4c238236635baceb9cd538a40255171-400x226-webp',
          _type: 'reference',
        },
      },
      title: 'The Guardian | Beyond Growth',
      url: 'https://www.theguardian.com/environment/series/beyond-growth',
    },
    {
      _id: 'ec4ab8e1-95e9-4f12-beaf-add29f02a88d',
      category: 'degrowth',
      description:
        'Degrowth.info is an independent media platform driven by an international political collective dedicated to amplifying degrowth perspectives.',
      logo: null,
      thumbnail: {
        _type: 'image',
        altText: 'Degrowth Info logo',
        asset: {
          _ref: 'image-7a12e9c696e36919553dbf151095f6aae320a981-400x225-webp',
          _type: 'reference',
        },
      },
      title: 'Degrowth.info',
      url: 'https://degrowth.info/',
    },
    {
      _id: 'f84cc01f-1978-4b03-83fb-749931d50596',
      category: 'degrowth',
      description:
        'Here, we aim to provide you with: 🌱 Knowledge on degrowth that is accessible 🌱 Tools to communicate degrowth 🌱 Inspiration to imagine the good life …',
      logo: null,
      thumbnail: {
        _type: 'image',
        altText: 'Degrowth Network logo',
        asset: {
          _ref: 'image-083dd62ba8f342501b2fa82cb8c7c468e348a171-400x225-webp',
          _type: 'reference',
        },
      },
      title: "So you've heard about Degrowth.",
      url: 'https://explore.degrowth.net/',
    },
  ];

  static participantsAgreement: PARTICIPANTS_AGREEMENT_QUERYResult = {
    _createdAt: '2026-03-08T05:55:17Z',
    _id: 'c278730f-0efa-410a-9ae3-acd7d89100b3',
    _rev: '6Tn0RnrllCsNn7jHPuufu5',
    _updatedAt: '2026-04-19T01:39:21Z',
    content: [
      {
        _key: '626119f2f08f',
        _type: 'block',
        children: [
          {
            _key: 'cfc4a91736a0',
            _type: 'span',
            marks: ['em'],
            text: 'Acknowledgement of country',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'ec814fb49376',
        _type: 'block',
        children: [
          {
            _key: '4b37e17cdbaf',
            _type: 'span',
            marks: [],
            text: 'We meet on the lands of First Nations peoples and acknowledge sovereignty over these lands were never ceded. We acknowledge the centuries of resistance that indigenous people have led against unsustainable and inhumane practices of capitalist colonisation. We learn from indigenous knowledge systems that have embodied many of the degrowth values for countless generations.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '0a2be77dd35f',
        _type: 'block',
        children: [
          {
            _key: '7fa5a9b14ba9',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
    ],
    title: "Participants' Agreement",
    version: 1,
    watermarkImageCount: 1,
  };

  static pageResultEvents: NonNullable<PAGE_QUERYResult> = {
    _createdAt: '2026-02-27T07:15:53Z',
    _id: '6df4b7d2-3dfb-49d9-8b12-ad48d34903cd',
    _rev: 'zmdbSLnMcb2AbnNAdFxtCi',
    _type: 'page',
    _updatedAt: '2026-05-03T08:06:09Z',
    name: null,
    pageBuilder: [
      {
        _key: 'd0a87c734324',
        _type: 'richTextSection',
        content: [
          {
            _key: 'b6335115f576',
            _type: 'block',
            children: [
              {
                _key: '218b0851b47e',
                _type: 'span',
                marks: [],
                text: 'This page does not use Page Builder',
              },
            ],
            markDefs: [],
            style: 'normal',
          },
        ],
        title: 'Ignore',
      },
    ],
    seo: {
      description:
        "Degrowth Network Australia's member groups and individuals often host Degrowth-related events, such as the Degrowth Festival and documentary screens. Find upcoming events here!",
      image: null,
      noIndex: false,
      title: 'Events | DNA',
    },
    slug: {
      _type: 'slug',
      current: 'events',
    },
    title: 'Events',
    watermarkImageCount: 1,
  };

  static pageResultsSeoImage: NonNullable<Seo['image']> = {
    _type: 'image',
    asset: {
      _ref: 'image-cbc493fb760d900216db64576a17a20ce9a26dd1-1200x630-png',
      _type: 'reference',
    },
  };

  static participantsAgreementGoogleSheetsResponse = {
    data: {
      range: 'Sheet1!A1:Z997',
      majorDimension: 'ROWS',
      values: [
        ['date', 'name', 'email', 'agreementVersion'],
        ['2026-03-08', 'Michael Mersiades', 'mmersiades@protonmail.com', '1'],
        ['2026-03-11', 'Elizabeth Wade', 'relocal.liz@gmail.com', '1'],
        ['2026-03-21', 'Anna Russell', 'roses_now2003@yahoo.com.au', '1'],
        ['2026-03-24', 'Nige Anderson', 'hello@andersongardens.com.au', '1'],
        ['2026-03-26', 'Taylor', 'taylormaclean100@gmail.com', '1'],
        ['2026-04-01', 'Finn', 'finn@oprey.co', '1'],
        ['2026-04-21', 'Louise Duxbury', 'louise@wela.org.au', '1'],
        ['2026-04-24', 'Mikoto Araki', 'mikotoaraki@gmail.com', '1'],
        ['2026-04-25', 'Ace', 'elsea.d@proton.me', '1'],
        ['2026-05-05', 'Stan Woodhouse', 'stanley.woodhouse@foe.org.au', '1'],
      ],
    },
  };
}

export default TestFixtures;
