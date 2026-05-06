import LocalGroupList, {
  LocalGroupsListProps,
} from '@/app/(main)/local/LocalGroupList';
import testIds from '@/constants/testIds';
import TestFixtures from '@/utils/TestFixtures';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ToastContainer } from 'react-toastify';
import { within } from 'storybook/test';

const meta = {
  component: LocalGroupList,
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
        <ToastContainer />
      </div>
    ),
  ],
} satisfies Meta<typeof LocalGroupList>;

export default meta;

type Story = StoryObj<typeof meta>;

const args: LocalGroupsListProps = {
  groups: TestFixtures.localGroups,
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscape: Story = {
  globals: {
    theme: 'light',
  },
  args,
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscapeCopyEmail: Story = {
  globals: {
    theme: 'light',
  },
  args,
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    const emailLink = canvas.getByTestId(testIds.local.groupCard.emailLink);
    await userEvent.click(emailLink);
  },
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
