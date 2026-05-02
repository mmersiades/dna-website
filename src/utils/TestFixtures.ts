import {
  HumantixEvent,
  HumantixEventDate,
  HumantixEventLocation,
} from '@/app/services/HumantixApi';
import { QuoteProps } from '@/components/landing/Quote';
import { GROUPS_QUERYResult, ONLINE_GROUPS_QUERYResult } from '@/sanity/types';

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
}

export default TestFixtures;
