import FutureGroupsSection, {
  FutureGroupsSectionProps,
} from '@/app/(main)/local/FutureGroupsSection';
import { paths } from '@/constants/paths';
import testIds from '@/constants/testIds';
import TestFixtures from '@/utils/TestFixtures';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { http, HttpResponse } from 'msw';
import { ToastContainer } from 'react-toastify';
import { within } from 'storybook/test';

const meta = {
  component: FutureGroupsSection,
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
} satisfies Meta<typeof FutureGroupsSection>;

export default meta;

type Story = StoryObj<typeof meta>;

const args: FutureGroupsSectionProps = {
  initialTableData: TestFixtures.groupInterestData_Australia,
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscape: Story = {
  globals: {
    theme: 'light',
  },
  args,
};

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscapeSubmitForm: Story = {
  globals: {
    theme: 'light',
  },

  args,

  beforeEach({ msw }) {
    msw.use(
      http.post(paths.api.google.sheets.groupIntent, () => {
        return HttpResponse.json({}, { status: 200 });
      }),
      http.post(paths.api.sendEmail, () => {
        return HttpResponse.json({}, { status: 200 });
      }),
    );
  },

  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    const stateSelect = canvas.getByTestId(testIds.local.table.stateSelect);
    await userEvent.selectOptions(stateSelect, 'VIC');
    const regionSelect = canvas.getByTestId(testIds.local.table.regionSelect);
    await userEvent.selectOptions(regionSelect, 'Hume');
    const countrySelect = canvas.getByTestId(testIds.local.table.countrySelect);
    await userEvent.selectOptions(countrySelect, 'Alawa');
    const nameInput = canvas.getByTestId(testIds.local.form.nameInput);
    await userEvent.type(nameInput, 'Test User');
    const emailInput = canvas.getByTestId(testIds.local.form.emailInput);
    await userEvent.type(emailInput, 'test@example.com');
    const submitButton = canvas.getByTestId(testIds.local.form.submitButton);
    await userEvent.click(submitButton);
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
