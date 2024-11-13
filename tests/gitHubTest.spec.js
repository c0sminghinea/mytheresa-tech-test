import { test } from '@playwright/test';

const githubPRPage = require('../pages/gitHubPRPage');

test('As a product owner, I want to see how many open pull requests are there for our product.', async () => {

  const allPRs = await githubPRPage.fetchAllPullRequests();
  
  githubPRPage.saveToCSV(allPRs);

});
