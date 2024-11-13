import fs from 'fs';
const path = require('path');

class HomePage {
  constructor(page) {
    this.page = page;
    this.linksSelector = 'a[href]';
  }
  
  async goto() {
    await this.page.goto('./');
  }

  async checkForConsoleErrors(browserName) {
    const consoleErrors = [];
    const timestamp = new Date().toISOString().replace(/:/g, '-');
    const logFilePath = path.join(__dirname, '../consoleErrors', `consoleErrors-${browserName}-${timestamp}.log`);
    this.page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await this.goto();

    if (consoleErrors.length > 0) {
      fs.writeFileSync(logFilePath, consoleErrors.join('\n'), 'utf-8');
    }
    return { consoleErrors, logFilePath };
  }

  async getAllLinks() {
    return await this.page.$$eval(this.linksSelector, elements =>
      elements.map(el => el.href)
    );
  }

  async checkLinkStatus(link) {
    const response = await this.page.request.get(link);
    return response.status();
  }
}

module.exports = { HomePage };
  