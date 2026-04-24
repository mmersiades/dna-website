import WatermarkImage, {
  WatermarkImageProps,
} from '@/components/WatermarkImage';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  component: WatermarkImage,
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
  decorators: [
    (Story) => {
      return (
        <div className={'grid place-items-center-safe p-10'}>
          <div className={'size-50'}>
            <Story />
          </div>
        </div>
      );
    },
  ],
} satisfies Meta<typeof WatermarkImage>;

export default meta;

type Story = StoryObj<typeof meta>;

const args: WatermarkImageProps = {
  type: 'flower-bees',
  altText: 'Image for Storybook',
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscapeFlowerBees: Story = {
  globals: {
    theme: 'light',
  },
  args,
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscapeSnails: Story = {
  globals: {
    theme: 'light',
  },
  args: { ...args, type: 'snails' },
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscapeBee1: Story = {
  globals: {
    theme: 'light',
  },
  args: { ...args, type: 'bee-1' },
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscapeBee1Footer: Story = {
  globals: {
    theme: 'light',
  },
  args: { ...args, type: 'bee-1-footer' },
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscapeFlowerFooter: Story = {
  globals: {
    theme: 'light',
  },
  args: { ...args, type: 'flower-footer' },
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscapeAnts: Story = {
  globals: {
    theme: 'light',
  },
  args: { ...args, type: 'ants' },
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscapeAntsFooter: Story = {
  globals: {
    theme: 'light',
  },
  args: { ...args, type: 'ants-footer' },
};
