import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  globalSetup: require.resolve('./src/globalSetup/global-setup'),
  testDir: './src/tests',
  testMatch: '**/*.spec.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
      ['line'],
      ['json', { outputFile: 'test-results.xml' }],
      ['allure-playwright',
          {
              resultDir: './allure-result',
              detail: true,
              environmentInfo:{
                  OS: process.platform,
                  Node: process.version,
                  Browser: 'chromium',
              }
          }
      ]
  ],
  use: {
    storageState: './storage/state.json',
    baseURL: process.env.HOSTNAME || 'https://opensource-demo.orangehrmlive.com', //TODO - подумать над process.env.HOSTNAME
    headless: true, //Отладка с браузером
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ]
});
