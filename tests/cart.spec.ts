import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ShopPage } from '../pages/ShopPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('E-commerce page-object flow', () => {
  test('user can sign in, add iphone X to cart, and verify checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const shopPage = new ShopPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.signIn('rahulshettyacademy', 'Learning@830$3mK2');
    await shopPage.addProductToCart('iphone X');
    await shopPage.goToCheckout();
    await checkoutPage.verifyProductInCart('iphone X');
  });
});
