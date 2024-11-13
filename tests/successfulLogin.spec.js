import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/loginPage');

test('As a customer, I want to verify I can login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.login(userData.username, userData.password);
  await expect(page).toHaveURL(/.*account\.html$/);
  await expect (loginPage.welcomeText).toBeVisible();
});
