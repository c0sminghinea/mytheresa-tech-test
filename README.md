# Fashion Hub Automation Testing

This repository contains automated tests for the **Fashion Hub** website, implemented using **Playwright**. The tests cover various aspects of the application to ensure that the website behaves as expected across different browsers and environments.

# Features

- **Cross-browser testing support** (Chromium, Firefox, Webkit).
- **Environment-specific configuration** (Local, Staging, Production).
- **Page Object Model (POM)** structure for scalability and maintainability.
- **Report generation** for test results.

# Test Scenarios

# **Test Case 1: As a tester, I want to make sure there are no console errors**
- **Goal**: Ensure that no console errors occur when navigating to the FashionHub page (`https://pocketaces2.github.io/fashionhub/`).
- **Test Details**: The test listens for console errors during page load and fails if any errors are detected. The errors are logged in a file with a timestamp.
- **bash command to run test**: npm test consoleError.spec.js

# **Test Case 2: As a tester, I want to check if a page is returning the expected status code**
- **Goal**: Verify that all links on the FashionHub page return a status code of `200` or `30x` and not a `40x` (client error).
- **Test Details**: The test iterates over all anchor (`<a>`) elements on the page, fetches the links, and checks the response status code for each link.
- **bash command to run test**: npm test statusCodes.spec.js

# **Test Case 3: As a customer, I want to verify I can log in**
- **Goal**: Verify that a user can log in successfully.
- **Test Details**: Using predefined credentials (`Username: demouser`, `Password: fashion123`), the test verifies that the login is successful by navigating to the login page and checking for a successful redirection.
- **bash command to run test**: npm test successfulLogin.spec.js

# **Test Case 4: As a product owner, I want to see how many open pull requests are there for our product**
- **Goal**: Retrieve and save open pull requests from the GitHub repository for the appwrite project.
- **Test Details**: The test uses the GitHub API to fetch all open pull requests, save them in a CSV format with the title, creation date, and author of each PR, and stores them in a file.
- **bash command to run test**: npm test gitHubTest.spec.js

# Prerequisites

- **Node.js** (>=16.x)
- **npm** (>=7.x) 

# Installation

1. Clone the repository:

   git clone https://github.com/c0sminghinea/mytheresa-tech-test.git
   cd mytheresa-test-tech

2. Install the dependencies:

   npm install

3. Configure the environment:

   You can configure the environment (local, staging, or production) by passing the TEST_ENV variable when running tests. (ex. TEST_ENV=staging npm test testname.spec.js).
   NOTE: without passing this to the command, the tests will run by default on the production environment.(default)

4. Cross-Browser Testing:
   
   npm test --project=chromium
   npm test --project=firefox
   npm test --project=webkit

5. Reporting

   Test results are saved in the /reports folder, and detailed logs are generated for each run. The reports contain information about passed/failed tests, errors, and other relevant details.

   To view a test report, navigate to the reports folder and open the generated HTML file. 

6. Project structure
```
/mytheresa-tech-test
├── /pages                  # Page Object Model (POM) files
│   ├── gitHubPRPage.js     # Github page methods
│   ├── homePage.js         # Home page methods
│   └── loginPage.js        # Login page methods
├── /tests                  # Test files
│   ├── consoleError.spec.js    # Test file for console log test
│   ├── gitHubTest.spec.js      # Test file for github test
│   ├── successfulLogin.spec.js # Test file for successful login 
│   └── statusCodes.spec.js     # Test file for links' status codes
├── /reports                # Folder where test reports are saved
├── /consoleErrors          # Folder for storing console error logs
├── /pullRequests           # Folder for stroring the pull requests' csv.
├── /data.json              # Sample test data
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```
