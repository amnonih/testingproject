import { Page } from '@playwright/test';
import { SearchFilterLocators } from './SearchFilterLocators';

class SearchFilter {
  private readonly locators = SearchFilterLocators;

  async performSearch(page: Page, searchTerm: string) {
    await page.click(this.locators.searchBar);

    await page.fill(this.locators.searchInput, searchTerm);

    await page.click(this.locators.showResultsButton);
  }
}

export default new SearchFilter();
