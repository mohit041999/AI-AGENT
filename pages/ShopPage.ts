import { expect, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ShopPage extends BasePage {
  async addProductToCart(productName: string) {
    const productCard = this.page.locator('.card').filter({ hasText: productName });
    await expect(productCard).toBeVisible();
    await productCard.getByRole('button', { name: 'Add' }).click();
  }

  async goToCheckout() {
    const checkoutNav = this.page.locator('a.nav-link.btn.btn-primary', { hasText: 'Checkout' });
    await expect(checkoutNav).toContainText('Checkout ( 1 )');
    await checkoutNav.click();
    await expect(this.page.locator('table.table-hover')).toBeVisible();
  }
}
