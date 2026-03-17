import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import {
  HumantixEvent,
  HumantixEventDate,
  HumantixEventLocation,
} from '@/app/services/HumantixApi';
import { pageStyles } from '@/components/styles';
import mainDecorator from '../../../../.storybook/mainDecorator';
import EventCard from './EventCard';

const meta = {
  component: EventCard,
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
  decorators: [
    (Story) => {
      const { sectionContainer } = pageStyles;
      return (
        <section className={sectionContainer}>
          <div className={'grid grid-cols-12 gap-4 p-2 md:gap-8'}>
            <Story />
          </div>
        </section>
      );
    },
    mainDecorator,
  ],
} satisfies Meta<typeof EventCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const dates: HumantixEventDate[] = [
  {
    deleted: false,
    disabled: false,
    endDate: '2026-03-22T08:00:00.100Z',
    startDate: '2026-03-22T00:00:00.100Z',
    _id: '6975d6cd9c1830e9b608a4ba',
  },
];

const eventLocation: HumantixEventLocation = {
  address: '11/13 Darley St, Newtown NSW 2042, Australia',
  city: 'Newtown',
  country: 'AU',
  latLng: [-33.9058763, 151.1802907],
  placeId: 'ChIJ-U_cJjewEmsR9gpzrb0YskA',
  region: 'NSW',
  type: 'address',
  venueName: 'Newtown Neighbourhood Centre',
};

const event: HumantixEvent = {
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
  bannerImage: { url: 'https://cdn.filestackcontent.com/dapRseh7TyaVUJmB5Avv' },
  featureImage: { url: '' },
  socialImage: { url: '' },
  eventLocation,
  dates,
  packagedTickets: [],
  keywords: [],
  location: 'AU',
  createdAt: '2026-01-25T08:39:41.209Z',
  updatedAt: '2026-03-10T01:08:57.131Z',
};

const args = {
  index: 0,
  event,
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscape: Story = {
  globals: {
    theme: 'light',
  },
  args,
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscapeHover: Story = {
  globals: {
    theme: 'light',
  },
  args,
  parameters: {
    pseudo: { hover: true },
  },
};

// noinspection JSUnusedGlobalSymbols
export const TabletLandscape: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: true },
    theme: 'light',
  },
  args,
};

// noinspection JSUnusedGlobalSymbols
export const TabletPortrait: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: false },
    theme: 'light',
  },
  args,
};

// noinspection JSUnusedGlobalSymbols
export const SmallMobilePortrait: Story = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
    theme: 'light',
  },
  args,
};

// noinspection JSUnusedGlobalSymbols
export const LargeMobilePortrait: Story = {
  globals: {
    viewport: { value: 'mobile2', isRotated: false },
    theme: 'light',
  },
  args,
};

// I spent ages trying to get dark mode to work on Storybook with EventCard. Gave up.
