import GroupLink from '@/app/(main)/local/GroupLink';
import { GroupLink as Props } from '@/sanity/types';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const links: Props[] = [
  {
    _type: 'groupLink',
    label: 'Facebook',
    url: 'https://www.google.com',
    category: 'facebook',
  },
  {
    _type: 'groupLink',
    label: 'Instagram',
    url: 'https://www.google.com',
    category: 'instagram',
  },
  {
    _type: 'groupLink',
    label: 'Mailing List',
    url: 'https://www.google.com',
    category: 'mailing-list',
  },
  {
    _type: 'groupLink',
    label: 'Substack',
    url: 'https://www.google.com',
    category: 'substack',
  },
  {
    _type: 'groupLink',
    label: 'Matrix',
    url: 'https://www.google.com',
    category: 'matrix',
  },
];

const meta = {
  component: GroupLink,
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
} satisfies Meta<typeof GroupLink>;

export default meta;

type Story = StoryObj<typeof meta>;

const args = links[0];

// noinspection JSUnusedGlobalSymbols
export const DesktopLandscape: Story = {
  globals: {
    theme: 'light',
  },
  args,
  render: () => {
    return (
      <div className={'flex flex-wrap gap-2'}>
        <GroupLink {...links[0]} />
        <GroupLink {...links[1]} />
        <GroupLink {...links[2]} />
        <GroupLink {...links[3]} />
        <GroupLink {...links[4]} />
      </div>
    );
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
  render: () => {
    return (
      <div className={'flex flex-wrap gap-2'}>
        <GroupLink {...links[0]} />
        <GroupLink {...links[1]} />
        <GroupLink {...links[2]} />
        <GroupLink {...links[3]} />
        <GroupLink {...links[4]} />
      </div>
    );
  },
};

// noinspection JSUnusedGlobalSymbols
export const TabletLandscape: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: true },
    theme: 'light',
  },
  args,
  render: () => {
    return (
      <div className={'flex flex-wrap gap-2'}>
        <GroupLink {...links[0]} />
        <GroupLink {...links[1]} />
        <GroupLink {...links[2]} />
        <GroupLink {...links[3]} />
        <GroupLink {...links[4]} />
      </div>
    );
  },
};

// noinspection JSUnusedGlobalSymbols
export const TabletPortrait: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: false },
    theme: 'light',
  },
  args,
  render: () => {
    return (
      <div className={'flex flex-wrap gap-2'}>
        <GroupLink {...links[0]} />
        <GroupLink {...links[1]} />
        <GroupLink {...links[2]} />
        <GroupLink {...links[3]} />
        <GroupLink {...links[4]} />
      </div>
    );
  },
};

// noinspection JSUnusedGlobalSymbols
export const SmallMobilePortrait: Story = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
    theme: 'light',
  },
  args,
  render: () => {
    return (
      <div className={'flex flex-wrap gap-2'}>
        <GroupLink {...links[0]} />
        <GroupLink {...links[1]} />
        <GroupLink {...links[2]} />
        <GroupLink {...links[3]} />
        <GroupLink {...links[4]} />
      </div>
    );
  },
};

// noinspection JSUnusedGlobalSymbols
export const LargeMobilePortrait: Story = {
  globals: {
    viewport: { value: 'mobile2', isRotated: false },
    theme: 'light',
  },
  args,
  render: () => {
    return (
      <div className={'flex flex-wrap gap-2'}>
        <GroupLink {...links[0]} />
        <GroupLink {...links[1]} />
        <GroupLink {...links[2]} />
        <GroupLink {...links[3]} />
        <GroupLink {...links[4]} />
      </div>
    );
  },
};
