import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-themes',
    'storybook-addon-pseudo-states',
  ],
  framework: '@storybook/nextjs-vite',
  staticDirs: ['../public'],
  features: {
    developmentModeForBuild: true,
  },
  async viteFinal(config) {
    return {
      ...config,
      define: {
        ...config.define,
        'process.env.STORYBOOK': JSON.stringify('true'),
      },
    };
  },
};
export default config;
