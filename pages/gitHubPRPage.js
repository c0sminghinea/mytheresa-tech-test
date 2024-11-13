//import axios from 'axios';
import fetch from 'node-fetch';
import fs from'fs';
import path from 'path';

class GitHubPRPage {
  constructor() {
    this.repoUrl = 'https://api.github.com/repos/appwrite/appwrite/pulls';
    this.perPage = 100;
  }
 
async fetchAllPullRequests() {
  let page = 1;
  let allPRs = [];

  while (true) {
    const response = await fetch(`${this.repoUrl}?per_page=${this.perPage}&page=${page}`);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const pullRequests = await response.json();
    allPRs = allPRs.concat(pullRequests);

    if (pullRequests.length < this.perPage) break;

    page += 1;
  }

  return allPRs;
}

saveToCSV(pullRequests) {
  const timestamp = new Date().toISOString().replace(/:/g, '-');
  const fileName = `openPullRequests-${timestamp}.csv`;
  const filePath = path.join(__dirname, '../pullRequests', fileName);
  const csvContent = pullRequests.map(pr => `${pr.title},${pr.created_at},${pr.user.login}`).join('\n');
  fs.writeFileSync(filePath, 'Title,Created Date,Author\n' + csvContent);
  //console.log(pullRequests.length, 'pull requests were added to', filePath);
  }
}

module.exports = new GitHubPRPage();
