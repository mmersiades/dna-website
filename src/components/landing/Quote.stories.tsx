import Quote, { QuoteProps } from '@/components/landing/Quote';
import TestFixtures from '@/utils/TestFixtures';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  component: Quote,
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
} satisfies Meta<typeof Quote>;

export default meta;

type Story = StoryObj<typeof meta>;

const publishedArgs: QuoteProps = {
  ...TestFixtures.degrowthDescriptionPublished,
  index: 0,
};

const unpublishedArgs: QuoteProps = {
  ...TestFixtures.degrowthDescriptionUnpublished,
  index: 0,
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscapePublished: Story = {
  globals: {
    theme: 'light',
  },
  args: publishedArgs,
};

// noinspection JSUnusedGlobalSymbols
export const TabletLandscapeUnpublished: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: true },
    theme: 'light',
  },
  args: unpublishedArgs,
};

// noinspection JSUnusedGlobalSymbols
export const TabletPortraitPublished: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: false },
    theme: 'light',
  },
  args: publishedArgs,
};

// noinspection JSUnusedGlobalSymbols
export const SmallMobilePortraitUnpublished: Story = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
    theme: 'light',
  },
  args: unpublishedArgs,
};

// noinspection JSUnusedGlobalSymbols
export const LargeMobilePortraitPublished: Story = {
  globals: {
    viewport: { value: 'mobile2', isRotated: false },
    theme: 'light',
  },
  args: publishedArgs,
};
