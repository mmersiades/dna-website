import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tsconfigPaths from 'vite-tsconfig-paths';
import { coverageConfigDefaults, defineConfig } from 'vitest/config';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'dayjs',
      'dayjs/plugin/utc',
      'dayjs/plugin/timezone',
    ],
  },
  plugins: [tsconfigPaths()],
  test: {
    coverage: {
      // provider: 'istanbul',
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        ...coverageConfigDefaults.exclude,
        '**/.storybook/**',
        '**/*.stories.*',
        '**/storybook-static/**',
        'src/**/page.tsx',
        'src/**/error.tsx',
        'src/app/studio/**.*',
        '**/__mocks__/**.*',
        '/src/sanity/*/**',
        '/src/sanity/**.*',
        'src/utils/TestFixtures.ts',
      ],
    },
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({ configDir: path.join(dirname, '.storybook') }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
      {
        extends: true,
        test: {
          include: ['**/*.test.ts'],
          name: { label: 'node', color: 'green' },
          environment: 'node',
        },
      },
    ],
    reporters: ['verbose', 'html'],
  },
  server: {
    watch: {
      ignored: [path.resolve(dirname, 'html')],
    },
  },
});
