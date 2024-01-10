import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import OrderItemPage from '../pages/OrderItemPage';
import SearchFilter from '../pages/SearchFilter';
import WishList from '../pages/WishList';
import OrderHistory from '../pages/OrderHistory';

test('Login Test - Correct Credentials', async ({ page }) => {
    await page.goto('https://www.sportvision.ba');
    await LoginPage.login(page, 'amnahasanovic2510@gmail.com', 'amnica123');
    await LoginPage.assertUserNavigation(page);
});


test('Login Test - Wrong Password', async ({ page }) => {
    await page.goto('https://www.sportvision.ba');
    await LoginPage.login(page, 'amnahasanovic2510@gmail.com', 'amna');
    await LoginPage.assertWrongPasswordError(page);
});

test('Login Test - Blank Email', async ({ page }) => {
    await page.goto('https://www.sportvision.ba');
    await LoginPage.login(page, '', 'amnica123');
    await LoginPage.assertBlankEmailError(page);
});

test('Login Test - Blank Password', async ({ page }) => {
    await page.goto('https://www.sportvision.ba');
    await LoginPage.login(page, 'amnahasanovic2510@gmail.com', '');
    await LoginPage.assertBlankPasswordError(page);
});

test('Registration Test', async ({ page }) => {

await page.goto('https://www.sportvision.ba');

await RegistrationPage.register(page, 'Amna', 'Hasanovic', 'amnahasanovic2510@gmail.com', '062300259', 'Sarajevo', 'Josipa Vancasa', '30', '71000', 'amnica123', 'amnica123', 'female');

const confirmationMessage = await page.textContent('.confirmation-message-selector');
expect(confirmationMessage).toContain('Registration successful');

const isAuthenticated = await page.isVisible('.authentication-status-selector');
expect(isAuthenticated).toBeTruthy();

const errorMessages = await page.textContent('.error-message-selector');
expect(errorMessages).toContain('Invalid email format');

await RegistrationPage.fillEmail(page, 'invalid-email');

    await RegistrationPage.assertErrorMessage(page, 'email', 'Unesite validan email.');

    await expect(page.url()).toContain('dashboard');

});

test('Order Item Test', async ({ page }) => {
    await page.goto('https://www.sportvision.ba');
    await OrderItemPage.orderProduct(page);
  });

test('Search Test - Nike', async ({ page }) => {
    await page.goto('https://www.sportvision.ba');
  
    await SearchFilter.performSearch(page, 'nike');
  
    const currentUrl = page.url();
    expect(currentUrl).toContain('https://www.sportvision.ba/proizvodi?search=nike');
  });

test('Wishlist Test', async ({ page }) => {
    await WishList.navigateToWishlist(page);

    await WishList.verifyProductInWishlist(page);
  });

test('Order History Test', async ({ page }) => {
    await OrderHistory.navigateToOrderHistory(page);
  
  });
