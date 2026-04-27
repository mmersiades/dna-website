import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { Preview, ReactRenderer } from '@storybook/nextjs-vite';
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
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'error',
      context: 'body',
    },
  },
};

export default preview;
