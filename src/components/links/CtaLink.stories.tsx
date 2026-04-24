import CtaLink from '@/components/links/CtaLink';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Route } from 'next';

const meta = {
  component: CtaLink,
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
  decorators: [
    (Story) => {
      return (
        <div className={'grid place-items-center-safe p-10'}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof CtaLink>;

export default meta;

type Story = StoryObj<typeof meta>;

const args = {
  href: 'https://www.neonkingkong.com' as Route,
  responsive: true,
  children: 'Get Involved',
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscapeNonResponsive: Story = {
  globals: {
    theme: 'light',
  },
  args: { ...args, responsive: false },
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscapeNonResponsiveHover: Story = {
  globals: {
    theme: 'light',
  },
  args: { ...args, responsive: false },
  parameters: {
    pseudo: { hover: true },
  },
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
