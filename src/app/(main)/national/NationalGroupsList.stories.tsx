import NationalGroupsList, {
  NationalGroupsListProps,
} from '@/app/(main)/national/NationalGroupsList';
import { paths } from '@/constants/paths';
import testIds from '@/constants/testIds';
import TestFixtures from '@/utils/TestFixtures';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { http, HttpResponse } from 'msw';
import { ToastContainer } from 'react-toastify';
import { within } from 'storybook/test';

const meta = {
  component: NationalGroupsList,
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
} satisfies Meta<typeof NationalGroupsList>;

export default meta;

type Story = StoryObj<typeof meta>;

const args: NationalGroupsListProps = {
  groups: TestFixtures.nationalGroups,
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscape: Story = {
  globals: {
    theme: 'light',
  },
  args,
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscapeForm: Story = {
  globals: {
    theme: 'light',
  },
  args,
  parameters: {
    msw: {
      handlers: [
        http.post(paths.api.sendEmail, () => {
          return HttpResponse.json({}, { status: 204 });
        }),
      ],
    },
  },
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    const cards = await canvas.findAllByRole('button');
    const firstCard = cards[0];
    await userEvent.click(firstCard);
    const nameInput = canvas.getByTestId(testIds.national.form.nameInput);
    await userEvent.type(nameInput, 'Sarah Snook');
    const emailInput = canvas.getByTestId(testIds.national.form.emailInput);
    await userEvent.type(emailInput, 's_snook@gmail.com');
    const submitButton = canvas.getByTestId(testIds.national.form.submitButton);
    await userEvent.click(submitButton);
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

// noinspection JSUnusedGlobalSymbols
export const LargeMobilePortraitForm: Story = {
  globals: {
    viewport: { value: 'mobile2', isRotated: false },
    theme: 'light',
  },
  args,
  parameters: {
    msw: {
      handlers: [
        http.post(paths.api.sendEmail, () => {
          return HttpResponse.json({}, { status: 204 });
        }),
      ],
    },
  },
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    const cards = await canvas.findAllByRole('button');
    const firstCard = cards[0];
    await userEvent.click(firstCard);
    const nameInput = canvas.getByTestId(testIds.national.form.nameInput);
    await userEvent.type(nameInput, 'Sarah Snook');
    const emailInput = canvas.getByTestId(testIds.national.form.emailInput);
    await userEvent.type(emailInput, 's_snook@gmail.com');
    const submitButton = canvas.getByTestId(testIds.national.form.submitButton);
    await userEvent.click(submitButton);
  },
};
