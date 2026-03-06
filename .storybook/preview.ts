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
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
      context: 'body',
    },
  },
};

export default preview;
