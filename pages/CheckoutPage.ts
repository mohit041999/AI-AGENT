import { expect, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  readonly cartTable = this.page.locator('table.table-hover');

  async verifyProductInCart(productName: string) {
    await expect(this.cartTable).toBeVisible();
    await expect(this.cartTable).toContainText(productName);
  }
}
