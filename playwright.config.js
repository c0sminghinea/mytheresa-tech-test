
  import { defineConfig } from '@playwright/test';
  
  const env = process.env.TEST_ENV || 'production';
  global.userData = require('./data.json');
  
  const environments = {
    local: 'http://localhost:4000/fashionhub/',
    staging: 'https://staging-env/fashionhub/',
    production: 'https://pocketaces2.github.io/fashionhub/',
  };
  
  const config = defineConfig({
    testDir: './tests',  
    timeout: 60000,     
    retries: 1,          
    
    // Global settings applied to all projects
    use: {
      baseURL: environments[env],
      headless: true,
      slowMo: 1000,
      screenshot: 'on',           
      video: 'retain-on-failure',
      trace: 'retain-on-failure',
    },
  
    projects: [
      { name: 'chromium', use: { browserName: 'chromium' } },
      { name: 'firefox', use: { browserName: 'firefox' } },
      { name: 'webkit', use: { browserName: 'webkit' } },
    ],
  
    reporter: [
      ['list'],                                  
      ['html', { outputFolder: 'test-results' }], 
      //['json', { outputFile: 'results.json' }], 
    ],
    outputDir: 'reports/artifacts'
    
    
  });
  
  export default config;
  