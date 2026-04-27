import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import PastEventListItem from '@/app/(main)/events/PastEventListItem';
import TestFixtures from '@/utils/TestFixtures';

const meta = {
  component: PastEventListItem,
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
} satisfies Meta<typeof PastEventListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

const args = {
  event: TestFixtures.event,
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscape: Story = {
  globals: {
    theme: 'light',
  },
  args,
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscapeLocationOnline: Story = {
  globals: {
    theme: 'light',
  },
  args: {
    ...args,
    event: {
      ...args.event,
      eventLocation: {
        ...args.event.eventLocation,
        type: 'online',
        instructions: 'Join us on Zoom',
      },
    },
  },
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscapeLocationCustom: Story = {
  globals: {
    theme: 'light',
  },
  args: {
    ...args,
    event: {
      ...args.event,
      eventLocation: {
        ...args.event.eventLocation,
        type: 'custom',
      },
    },
  },
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscapeLocationTBA: Story = {
  globals: {
    theme: 'light',
  },
  args: {
    ...args,
    event: {
      ...args.event,
      eventLocation: {
        ...args.event.eventLocation,
        type: 'toBeAnnounced',
      },
    },
  },
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
