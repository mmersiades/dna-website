import ExternalResourceList, {
  ExternalResourceListProps,
} from '@/app/(main)/learn/ExternalResourceList';
import TestFixtures from '@/utils/TestFixtures';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  component: ExternalResourceList,
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
  decorators: [
    (Story) => (
      <div className={'p-2 md:p-8'}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ExternalResourceList>;

export default meta;

type Story = StoryObj<typeof meta>;

const args: ExternalResourceListProps = {
  title: 'More about Degrowth',
  list: TestFixtures.externalResourcesDegrowth,
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
  args,
  parameters: {
    pseudo: { hover: true },
  },
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
