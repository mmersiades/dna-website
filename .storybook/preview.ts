import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { Preview, ReactRenderer } from '@storybook/nextjs-vite';
import '../src/app/globals.css';
import bodyDecorator from './bodyDecorator';
import './styles.css';

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
