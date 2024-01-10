// WishList.ts
import { Page } from '@playwright/test';
import { WishListLocators } from './WishListLocators';
import { test, expect } from '@playwright/test';

class WishList {
  private readonly locators = WishListLocators;

  async navigateToWishlist(page: Page) {
    await page.goto('https://www.sportvision.ba');

    await page.click(this.locators.wishlistButton);
  }

  async verifyProductInWishlist(page: Page) {
    const productLink = await page.getAttribute(this.locators.productInWishlist, 'href');
    expect(productLink).toBe('https://www.sportvision.ba/patike/53101016-reebok-reebok-lite-3-0');
  }
}

export default new WishList();
