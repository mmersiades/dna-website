import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ErrorComponent, { ErrorComponentProps } from './ErrorComponent';

const meta = {
  component: ErrorComponent,
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
} satisfies Meta<typeof ErrorComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

const error = new Error('Test Error');

const args: ErrorComponentProps = {
  error: {
    name: error.name,
    message: error.message,
    stack: error.stack,
    digest: 'test-digest',
  },
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscape: Story = {
  globals: {
    theme: 'light',
  },
  args,
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
  args,
};

// noinspection JSUnusedGlobalSymbols
export const TabletLandscape: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: true },
    theme: 'light',
  },
  args,
};

// noinspection JSUnusedGlobalSymbols
export const TabletPortrait: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: false },
    theme: 'light',
  },
  args,
};

// noinspection JSUnusedGlobalSymbols
export const SmallMobilePortrait: Story = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
    theme: 'light',
  },
  args,
};

// noinspection JSUnusedGlobalSymbols
export const LargeMobilePortrait: Story = {
  globals: {
    viewport: { value: 'mobile2', isRotated: false },
    theme: 'light',
  },
  args,
};
