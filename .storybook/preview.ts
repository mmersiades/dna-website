import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { Preview, ReactRenderer } from '@storybook/nextjs-vite';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { sb } from 'storybook/test';
import '../src/app/globals.css';
import bodyDecorator from './bodyDecorator';
import './styles.css';

// @ts-expect-error xvc
sb.mock(import('../src/app/actions.ts'));

/*
 * Initializes MSW
 * See https://github.com/mswjs/msw-storybook-addon#configuring-msw
 * to learn how to customize it
 */
initialize({
  onUnhandledRequest: 'bypass',
});

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
  loaders: [mswLoader],
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
