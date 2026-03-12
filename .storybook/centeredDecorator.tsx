import { ReactRenderer } from '@storybook/nextjs-vite';
import { StoryFn } from 'storybook/internal/csf';

import '@/app/globals.css';

const centeredDecorator = (Story: StoryFn<ReactRenderer>) => (
  <div className={'container mr-auto ml-auto'}>
    <div className={'grid h-screen place-items-center'}>
      {/* @ts-expect-error some bullshit*/}
      <Story />
    </div>
  </div>
);

export default centeredDecorator;
