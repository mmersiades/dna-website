import IntroQuote from '@/components/landing/IntroQuote';
import copy from '@/constants/copy';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  component: IntroQuote,
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
  decorators: [
    (Story) => {
      return (
        <div className={'h-[300vh]'}>
          <Story />
        </div>
      );
    },
  ],
  // TODO: Fix so that snapshot is taken after scroll completes
  play: async ({ canvasElement, step }) => {
    await step('scroll to reveal quote', async () => {
      const doc = canvasElement.ownerDocument;
      doc.documentElement.scrollTop = doc.defaultView!.innerHeight * 0.75;
      await new Promise((r) => requestAnimationFrame(r));
    });
  },
} satisfies Meta<typeof IntroQuote>;

export default meta;

type Story = StoryObj<typeof meta>;

const { introQuote } = copy.landing;

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscape: Story = {
  globals: {
    theme: 'light',
  },
  args: { ...introQuote, index: 0 },
};

// noinspection JSUnusedGlobalSymbols
export const TabletLandscape: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: true },
    theme: 'light',
  },
  args: { ...introQuote, index: 0 },
};

// noinspection JSUnusedGlobalSymbols
export const TabletPortrait: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: false },
    theme: 'light',
  },
  args: { ...introQuote, index: 0 },
};

// noinspection JSUnusedGlobalSymbols
export const SmallMobilePortrait: Story = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
    theme: 'light',
  },
  args: { ...introQuote, index: 0 },
};

// noinspection JSUnusedGlobalSymbols
export const LargeMobilePortrait: Story = {
  globals: {
    viewport: { value: 'mobile2', isRotated: false },
    theme: 'light',
  },
  args: { ...introQuote, index: 0 },
};
