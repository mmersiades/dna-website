import ParticipantsAgreementSection, {
  ParticipantsAgreementSectionProps,
} from '@/app/(main)/participants-agreement/ParticipantsAgreementSection';
import { paths } from '@/constants/paths';
import testIds from '@/constants/testIds';
import TestFixtures from '@/utils/TestFixtures';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { http, HttpResponse } from 'msw';
import { ToastContainer } from 'react-toastify';
import { within } from 'storybook/test';

const meta = {
  component: ParticipantsAgreementSection,
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
} satisfies Meta<typeof ParticipantsAgreementSection>;

export default meta;

type Story = StoryObj<typeof meta>;

const args: ParticipantsAgreementSectionProps = {
  data: TestFixtures.participantsAgreement,
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
      http.post(paths.api.google.sheets.participantsAgreement, () => {
        return HttpResponse.json({}, { status: 200 });
      }),
      http.post(paths.api.sendEmail, () => {
        return HttpResponse.json({}, { status: 200 });
      }),
    );
  },

  play: async ({ canvasElement, userEvent }) => {
    const form = testIds.participantsAgreement.form;
    const canvas = within(canvasElement);
    const nameInput = await canvas.findByTestId(form.nameInput);
    await userEvent.type(nameInput, 'Sarah Snook');
    const emailInput = await canvas.findByTestId(form.emailInput);
    await userEvent.type(emailInput, 's_snook@gmail.com');
    const checkbox = await canvas.findByTestId(form.agreementCheckbox);
    await userEvent.click(checkbox);
    const submitButton = canvas.getByTestId(form.submitButton);
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
