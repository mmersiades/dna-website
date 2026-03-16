import '@/app/globals.css';
import { ReactRenderer } from '@storybook/nextjs-vite';
import { StoryFn } from 'storybook/internal/csf';
import cn from '../src/utils/cn';

const mainDecorator = (Story: StoryFn<ReactRenderer>) => {
  const { main } = {
    main: cn('min-h-svh'),
  };
  return (
    <div className={main}>
      {/* @ts-expect-error missing properties*/}
      <Story />
    </div>
  );
};

export default mainDecorator;
