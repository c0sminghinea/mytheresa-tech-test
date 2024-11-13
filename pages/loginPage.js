class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.welcomeText = page.locator('text=Welcome, testUser!');
    }
  
    async goto() {
        await this.page.goto('./login.html');
    }
  
    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
  }
  
  module.exports = { LoginPage };
  