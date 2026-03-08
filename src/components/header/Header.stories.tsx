import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Header from '@/components/header/Header';
import testIds from '@/constants/testIds';
import { within } from 'storybook/test';

const meta = {
  component: Header,
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
  decorators: [],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

const args = { id: 'id' };

const { openMenuButton, closeMenuButton } = testIds.header;

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscape: Story = {
  args,
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscapePseudoLink: Story = {
  args,
  parameters: {
    pseudo: {
      hover: ['#desktop-nav-online-groups'],
      focusVisible: ['#desktop-nav-about'],
    },
  },
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscapeHoverCTA: Story = {
  args,
  parameters: {
    pseudo: {
      hover: ['#cta-link'],
    },
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
export const SmallMobilePortrait: Story = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
  },
  args,
};

// noinspection JSUnusedGlobalSymbols
export const SmallMobilePortraitHover: Story = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
  },
  args,
  parameters: {
    pseudo: {
      hover: true,
    },
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
export const LargeMobilePortraitOpen: Story = {
  globals: {
    viewport: { value: 'mobile2', isRotated: false },
  },
  args,
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId(openMenuButton));
  },
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
export const TabletLandscapeDarkPseudoLink: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: true },
    theme: 'dark',
  },
  args,
  parameters: {
    pseudo: {
      hover: ['#desktop-nav-online-groups'],
      focusVisible: ['#desktop-nav-about'],
    },
  },
};

// noinspection JSUnusedGlobalSymbols
export const TabletLandscapeDarkHoverCTA: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: true },
    theme: 'dark',
  },
  args,
  parameters: {
    pseudo: {
      hover: ['#cta-link'],
    },
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
export const SmallMobilePortraitDark: Story = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
    theme: 'dark',
  },
  args,
};

// noinspection JSUnusedGlobalSymbols
export const SmallMobilePortraitHoverDark: Story = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
    theme: 'dark',
  },
  args,
  parameters: {
    pseudo: {
      hover: true,
    },
  },
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
export const LargeMobilePortraitOpenDark: Story = {
  globals: {
    viewport: { value: 'mobile2', isRotated: false },
    theme: 'dark',
  },
  args,
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId(openMenuButton));
  },
};
