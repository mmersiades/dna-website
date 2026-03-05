import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import centeredDecorator from '../../../.storybook/centeredDecorator';
import footerDecorator from '../../../.storybook/footerDecorator';
import Socials from './Socials';

const meta = {
  component: Socials,
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
  decorators: [centeredDecorator, footerDecorator],
} satisfies Meta<typeof Socials>;

export default meta;

type Story = StoryObj<typeof meta>;

const args = { id: 'id' };

export const DesktopLandscape: Story = {
  args,
};

export const DesktopLandscapeHover: Story = {
  args,
  parameters: {
    pseudo: { hover: true },
  },
};

export const TabletLandscape: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: true },
  },
  args,
};

export const TabletPortrait: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: false },
  },
  args,
};

export const LargeMobilePortrait: Story = {
  globals: {
    viewport: { value: 'mobile2', isRotated: false },
  },
  args,
};

export const DesktopLandscapeDark: Story = {
  globals: {
    theme: 'dark',
  },
  args,
};

export const TabletLandscapeDark: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: true },
    theme: 'dark',
  },
  args,
};

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

export const TabletPortraitDark: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: false },
    theme: 'dark',
  },
  args,
};

export const LargeMobilePortraitDark: Story = {
  globals: {
    viewport: { value: 'mobile2', isRotated: false },
    theme: 'dark',
  },
  args,
};
