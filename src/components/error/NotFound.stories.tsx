import NotFound from '@/components/error/NotFound';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  component: NotFound,
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
  decorators: [
    (Story) => {
      return (
        <div className={'flex h-[calc(100svh-var(--header-height))]'}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof NotFound>;

export default meta;

type Story = StoryObj<typeof meta>;

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscape: Story = {
  globals: {
    theme: 'light',
  },
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscapeHover: Story = {
  globals: {
    theme: 'light',
  },
  parameters: {
    pseudo: {
      hover: true,
    },
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
