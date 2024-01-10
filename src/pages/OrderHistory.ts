import { Page } from '@playwright/test';
import { OrderHistoryLocators } from './OrderHistoryLocators';

class OrderHistory {
  private readonly locators = OrderHistoryLocators;

  async navigateToOrderHistory(page: Page) {
    await page.goto('https://www.sportvision.ba');

    await page.click(this.locators.orderHistoryLink);
  }
}

export default new OrderHistory();
