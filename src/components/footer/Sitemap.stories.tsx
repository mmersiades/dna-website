import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Sitemap from '@/components/footer/Sitemap';
import centeredDecorator from '../../../.storybook/centeredDecorator';
import footerDecorator from '../../../.storybook/footerDecorator';

const meta = {
  component: Sitemap,
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
  decorators: [centeredDecorator, footerDecorator],
} satisfies Meta<typeof Sitemap>;

export default meta;

type Story = StoryObj<typeof meta>;

const args = {};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscape: Story = {
  args,
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscapeHover: Story = {
  args,
  parameters: {
    pseudo: { hover: true },
  },
};

// noinspection JSUnusedGlobalSymbols
export const TabletLandscape: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: true },
  },
  args,
};

// noinspection JSUnusedGlobalSymbols
export const TabletPortrait: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: false },
  },
  args,
};

// noinspection JSUnusedGlobalSymbols
export const LargeMobilePortrait: Story = {
  globals: {
    viewport: { value: 'mobile2', isRotated: false },
  },
  args,
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscapeDark: Story = {
  globals: {
    theme: 'dark',
  },
  args,
};

// noinspection JSUnusedGlobalSymbols
export const TabletLandscapeDark: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: true },
    theme: 'dark',
  },
  args,
};

// noinspection JSUnusedGlobalSymbols
export const TabletLandscapeDarkHover: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: true },
    theme: 'dark',
  },
  args,
  parameters: {
    pseudo: { hover: true },
  },
};

// noinspection JSUnusedGlobalSymbols
export const TabletPortraitDark: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: false },
    theme: 'dark',
  },
  args,
};

// noinspection JSUnusedGlobalSymbols
export const LargeMobilePortraitDark: Story = {
  globals: {
    viewport: { value: 'mobile2', isRotated: false },
    theme: 'dark',
  },
  args,
};
