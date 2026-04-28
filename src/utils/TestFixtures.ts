import {
  HumantixEvent,
  HumantixEventDate,
  HumantixEventLocation,
} from '@/app/services/HumantixApi';
import { QuoteProps } from '@/components/landing/Quote';

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
    identifier: 'DNA member',
    quote:
      "It's about making decisions about what we make and what we buy based on what makes us happy, rather than what makes money. And it’s about us making those decisions, not corporations.",
    statement: 'about decisions.',
  };
}

export default TestFixtures;
