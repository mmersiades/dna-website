import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { pageStyles } from '@/components/styles';
import { EXT_RESOURCES_QUERYResult } from '@/sanity/types';
import mainDecorator from '../../../../.storybook/mainDecorator';
import ExternalResourceCard from './ExternalResourceCard';

const meta = {
  component: ExternalResourceCard,
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
  decorators: [
    (Story) => {
      const { sectionContainer } = pageStyles;
      return (
        <section className={sectionContainer}>
          <div className={'grid grid-cols-12 gap-4 p-2 md:gap-8'}>
            <div className={'col-span-12 lg:col-span-6'}>
              <Story />
            </div>
          </div>
        </section>
      );
    },
    mainDecorator,
  ],
} satisfies Meta<typeof ExternalResourceCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const resource: EXT_RESOURCES_QUERYResult[0] = {
  category: 'degrowth',
  description:
    'Degrowth.info is an independent media platform driven by an international political collective dedicated to amplifying degrowth perspectives.',
  image:
    'https://www.degrowth.info/assets/og_image-a1ee48c8fa3d620aafe68ea95eb741659208d4aba83d2495899863079aa4092f.jpg',
  title: 'Degrowth.info',
  url: 'https://degrowth.info/',
  _id: 'ec4ab8e1-95e9-4f12-beaf-add29f02a88d',
  logo: null,
};

const args = {
  resource,
  index: 0,
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
