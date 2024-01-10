// src/pages/OrderItem.ts
import { Page } from '@playwright/test';
import { OrderItemLocators } from './OrderItemLocators';
import { test, expect } from '@playwright/test';

export class OrderItemPage {
  private readonly locators = OrderItemLocators;
  private readonly size = '45';

  private readonly firstName = 'Ahmed';
  private readonly lastName = 'Pilav';
  private readonly postcode = '71320';
  private readonly email = 'ahmedpilav21@gmail.com';
  private readonly city = 'Sarajevo';
  private readonly address = 'Gornja Josanica 1';
  private readonly streetNumber = '6D';
  private readonly phone = 'replace_with_actual_phone';

  private async navigateAndSelectProduct(page: Page) {
    await page.goto('https://www.sportvision.ba');

    await page.click(this.locators.categoryLink);

    await page.click(this.locators.productItem);

    await page.click(this.locators.sizeOption(this.size));
  }

  async orderProduct(page: Page) {
    await this.navigateAndSelectProduct(page);
    await page.click(this.locators.myBasket);
    await page.click(this.locators.myBasket);
    await this.fillUserData(page);
    await page.click(this.locators.nextCartStepButton);
    await page.click(this.locators.confirmOrderButton);

    await this.selectPaymentOption(page);

    await this.fillUserData(page);

    await this.completeOrder(page);
  }

  private async selectPaymentOption(page: Page) {
    await page.click(this.locators.deliveryOption);
  }

  private async fillUserData(page: Page) {
    await page.fill(this.locators.firstNameInput, this.firstName);
    await page.fill(this.locators.lastNameInput, this.lastName);
    await page.fill(this.locators.postcodeInput, this.postcode);
    await page.fill(this.locators.emailInput, this.email);
    await page.fill(this.locators.cityInput, this.city);
    await page.fill(this.locators.addressInput, this.address);
    await page.fill(this.locators.streetNoInput, this.streetNumber);
    await page.fill(this.locators.phoneInput, this.phone);
  }

  private async completeOrder(page: Page) {
    await page.click(this.locators.nextCartStepButton);

    await page.click(this.locators.confirmOrderButton);

    await this.assertOrderSuccess(page);
  }

  private async assertOrderSuccess(page: Page) {
    const successMessage = await page.textContent('.success-message-selector');
    expect(successMessage).toContain('Order successful');
  }
}

export default new OrderItemPage();
