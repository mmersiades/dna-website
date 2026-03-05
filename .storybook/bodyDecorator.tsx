import '@/app/globals.css';
import { ReactRenderer } from '@storybook/nextjs-vite';
import { ThemeProvider } from 'next-themes';
import { Atma } from 'next/font/google';
import { StoryFn } from 'storybook/internal/csf';
import cn from '../src/utils/cn';

const atma = Atma({
  variable: '--atma-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const bodyDecorator = (Story: StoryFn<ReactRenderer>) => {
  const { body } = {
    body: cn(
      'overscroll-none',
      atma.className,
      'antialiased',
      'overflow-x-hidden',
    ),
  };
  return (
    <div className={body}>
      <ThemeProvider>
        {/* @ts-expect-error missing properties*/}
        <Story />
      </ThemeProvider>
    </div>
  );
};

export default bodyDecorator;
