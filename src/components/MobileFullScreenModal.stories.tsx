import MobileFullScreenModal from '@/components/MobileFullScreenModal';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import { userEvent, within } from 'storybook/test';

const meta = {
  component: MobileFullScreenModal,
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
} satisfies Meta<typeof MobileFullScreenModal>;

export default meta;

type Story = StoryObj<typeof meta>;

// noinspection JSUnusedGlobalSymbols
export const SmallMobilePortraitOpen: Story = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
    theme: 'light',
  },
  args: {
    open: true,
    onClose: () => {},
  },
  render: ({ open }) => {
    const [openModal, setOpenModal] = useState(open);
    return (
      <MobileFullScreenModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <div>
          <h2>Hello world</h2>
          <p>How are you today?</p>
        </div>
      </MobileFullScreenModal>
    );
  },
};

// noinspection JSUnusedGlobalSymbols
export const LargeMobilePortraitOpen: Story = {
  globals: {
    viewport: { value: 'mobile2', isRotated: false },
    theme: 'light',
  },
  args: {
    open: true,
    onClose: () => {},
  },
  render: ({ open }) => {
    const [openModal, setOpenModal] = useState(open);
    return (
      <MobileFullScreenModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <div>
          <h2>Hello world</h2>
          <p>How are you today?</p>
        </div>
      </MobileFullScreenModal>
    );
  },
};

// noinspection JSUnusedGlobalSymbols
export const SmallMobileLandscapeOpen: Story = {
  globals: {
    viewport: { value: 'mobile1', isRotated: true },
    theme: 'light',
  },
  args: {
    open: true,
    onClose: () => {},
  },
  render: ({ open }) => {
    const [openModal, setOpenModal] = useState(open);
    return (
      <MobileFullScreenModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <div>
          <h2>Hello world</h2>
          <p>How are you today?</p>
        </div>
      </MobileFullScreenModal>
    );
  },
};

// noinspection JSUnusedGlobalSymbols
export const SmallMobilePortraitClose: Story = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
    theme: 'light',
  },
  args: {
    open: true,
    onClose: () => {},
  },
  render: ({ open }) => {
    const [openModal, setOpenModal] = useState(open);
    return (
      <MobileFullScreenModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <div>
          <h2>Hello world</h2>
          <p>How are you today?</p>
        </div>
      </MobileFullScreenModal>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const closeButton = await canvas.findByRole('button');
    await userEvent.click(closeButton);
  },
};
