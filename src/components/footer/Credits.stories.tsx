import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Credits from '@/components/footer/Credits';
import footerDecorator from '../../../.storybook/footerDecorator';

const meta = {
  component: Credits,
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
  decorators: [footerDecorator],
} satisfies Meta<typeof Credits>;

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
export const LargeMobilePortraitDark: Story = {
  globals: {
    viewport: { value: 'mobile2', isRotated: false },
    theme: 'dark',
  },
  args,
};

// noinspection JSUnusedGlobalSymbols
export const LargeMobilePortraitDarkHover: Story = {
  globals: {
    viewport: { value: 'mobile2', isRotated: false },
    theme: 'dark',
  },
  args,
  parameters: {
    pseudo: { hover: true },
  },
};
