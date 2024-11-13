import { test, expect } from '@playwright/test';
const { HomePage } = require('../pages/homePage');

test('As a tester, I want to check if a page is returning the expected status code', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  
  const links = await homePage.getAllLinks();

  const brokenLinks = [];

  for (const link of links) {
    const status = await homePage.checkLinkStatus(link);
    
    if (status >= 400) {
        brokenLinks.push({ url: link, status: status });  
      }
    }
  expect(brokenLinks).toEqual([]);

});
