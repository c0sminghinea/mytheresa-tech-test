import { test, expect } from '@playwright/test';
const { HomePage } = require('../pages/homePage');

test(' As a tester, I want to make sure there are no console errors ', async ({ page, browserName }) => {
  
    const homePage = new HomePage(page);
    
    const { consoleErrors, logFilePath } = await homePage.checkForConsoleErrors(browserName);

    expect(consoleErrors.length, `Console errors detected! See ${logFilePath} for details.`).toBe(0);
});
