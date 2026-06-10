import { expect, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly usernameInput = this.page.locator('#username');
  readonly passwordInput = this.page.locator('#password');
  readonly termsCheckbox = this.page.locator('#terms');
  readonly signInButton = this.page.locator('#signInBtn');

  async goto() {
    await super.goto('/loginpagePractise/');
  }

  async signIn(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.termsCheckbox.check();
    await Promise.all([
      this.page.waitForURL('**/shop'),
      this.signInButton.click(),
    ]);
    await expect(this.page).toHaveURL(/.*shop/);
  }
}
