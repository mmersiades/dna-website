import LandingHeaderSpacer from '@/components/landing/LandingHeaderSpacer';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  component: LandingHeaderSpacer,
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
  // TODO: Fix so that snapshot is taken after animation completes
  play: async ({ step }) => {
    await step('wait for animation', async () => {
      await new Promise((r) => requestAnimationFrame(r));
    });
  },
} satisfies Meta<typeof LandingHeaderSpacer>;

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
