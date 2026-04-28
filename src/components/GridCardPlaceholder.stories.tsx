import GridCardPlaceholder from '@/components/GridCardPlaceholder';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  component: GridCardPlaceholder,
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
  decorators: [
    (Story) => {
      return (
        <div className="grid gap-2 p-2 md:grid-cols-2">
          <Story />
          <Story />
          <Story />
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof GridCardPlaceholder>;

export default meta;

type Story = StoryObj<typeof meta>;

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscapeFlowerBees: Story = {
  globals: {
    theme: 'light',
  },
  args: {
    type: 'flower-bees',
    altText: 'Image for Storybook',
  },
};

// noinspection JSUnusedGlobalSymbols
export const TabletLandscapeSnails: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: true },
    theme: 'light',
  },
  args: {
    type: 'snails',
    altText: 'Image for Storybook',
  },
};

// noinspection JSUnusedGlobalSymbols
export const TabletPortraitBee1: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: false },
    theme: 'light',
  },
  args: {
    type: 'bee-1',
    altText: 'Image for Storybook',
  },
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscapeAnts: Story = {
  globals: {
    theme: 'light',
  },
  args: {
    type: 'ants',
    altText: 'Image for Storybook',
  },
};
