import Toast, { ToastProps } from '@/components/Toast';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  component: Toast,
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
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

const args: ToastProps = {
  title: 'You have got mail',
  message: 'Click to read your new email',
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscape: Story = {
  globals: {
    theme: 'light',
  },
  args,
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscapeNoMessage: Story = {
  globals: {
    theme: 'light',
  },
  args: { title: 'You have new mail' },
};
