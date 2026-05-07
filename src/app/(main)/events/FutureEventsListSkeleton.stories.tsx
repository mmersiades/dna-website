import FutureEventsListSkeleton from '@/app/(main)/events/FutureEventsListSkeleton';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  component: FutureEventsListSkeleton,
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
} satisfies Meta<typeof FutureEventsListSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscape: Story = {
  globals: {
    theme: 'light',
  },
};

// noinspection JSUnusedGlobalSymbols
export const TabletLandscape: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: true },
    theme: 'light',
  },
};

// noinspection JSUnusedGlobalSymbols
export const TabletPortrait: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: false },
    theme: 'light',
  },
};

// noinspection JSUnusedGlobalSymbols
export const SmallMobilePortrait: Story = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
    theme: 'light',
  },
};

// noinspection JSUnusedGlobalSymbols
export const LargeMobilePortrait: Story = {
  globals: {
    viewport: { value: 'mobile2', isRotated: false },
    theme: 'light',
  },
};
