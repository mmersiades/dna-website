import ParticipantsAgreementSection, {
  ParticipantsAgreementSectionProps,
} from '@/app/(main)/participants-agreement/ParticipantsAgreementSection';
import QrCodeSection from '@/app/(main)/qr-codes/QrCodeSection';
import copy from '@/constants/copy';
import testIds from '@/constants/testIds';
import TestFixtures from '@/utils/TestFixtures';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { within } from 'storybook/test';

const meta = {
  component: QrCodeSection,
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
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
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    const pageSelect = await canvas.findByTestId(testIds.qrCodes.pageSelect);
    await userEvent.selectOptions(pageSelect, copy.qrCodes.links[2].label);
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
