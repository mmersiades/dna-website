import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { Preview, ReactRenderer } from '@storybook/nextjs-vite';
import { mswLoader } from 'msw-storybook-addon/csf3';
import { setupWorker } from 'msw/browser';
import { sb } from 'storybook/test';
import '../src/app/globals.css';
import bodyDecorator from './bodyDecorator';
import './styles.css';

// @ts-expect-error xvc
sb.mock(import('../src/app/actions.ts'));

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute<ReactRenderer>({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
    bodyDecorator,
  ],
  loaders: [
    mswLoader(async () => {
      const worker = setupWorker();

      await worker.start({
        onUnhandledRequest: 'bypass',
      });

      return worker;
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chromatic: {
      delay: 3000,
    },
    a11y: {
      test: 'error',
      context: 'body',
    },
  },
};

export default preview;
