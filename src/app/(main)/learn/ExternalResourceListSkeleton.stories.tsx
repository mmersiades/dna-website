import ExternalResourceListSkeleton from '@/app/(main)/learn/ExternalResourceListSkeleton';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  component: ExternalResourceListSkeleton,
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
} satisfies Meta<typeof ExternalResourceListSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

const args = {
  title: 'More about Degrowth',
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscape: Story = {
  globals: {
    theme: 'light',
  },
  args,
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
