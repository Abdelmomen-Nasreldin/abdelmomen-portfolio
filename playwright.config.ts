import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './e2e',
  fullyParallel: false,
  workers: 1,
  timeout: 60000,
  reporter: [['list'], ['html', { open: 'never', outputFolder: 'tmp/playwright-report' }]],
  outputDir: 'tmp/test-results',
  use: { baseURL: 'http://127.0.0.1:4400', channel: 'chrome', trace: 'retain-on-failure' },
  webServer: {
    command: 'node tools/serve-preview.mjs',
    url: 'http://127.0.0.1:4400',
    reuseExistingServer: !process.env['CI'],
  },
});
