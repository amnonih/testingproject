// Import the correct name
import { Page } from '@playwright/test';
import { LoginPageLocators } from './LoginPageLocators';
import { test, expect } from '@playwright/test';

class LoginPage {
    private readonly locators = LoginPageLocators;

    private readonly email = 'amnahasanovic2510@gmail.com'
    private readonly password = 'amnica123';
    
    async login(page: Page, email: string, password: string) {
        await page.fill(this.locators.emailInput, email);
        await page.fill(this.locators.passwordInput, password);
        await page.click(this.locators.loginButton);
    }

    async assertUserNavigation(page: Page) {
        await expect(page.url()).toContain('dashboard');
    }
    
    async assertWrongPasswordError(page: Page) {
        const errorMessage = await page.textContent('.alert.alert-danger');
        expect(errorMessage).toContain('Pogrešna email adresa ili lozinka.');
    }    


    async assertBlankPasswordError(page: Page) {
        const errorMessage = await page.textContent('li.parsley-required');
        expect(errorMessage).toContain('Ovo polje je obavezno.');
    }    

    async assertBlankEmailError(page: Page) {
        const errorMessage = await page.textContent('li.parsley-required');
        expect(errorMessage).toContain('Ovo polje je obavezno.');
    }
    
    
    
    
    
    
    // Additional methods for login-related actions can be added here
}

export default new LoginPage();
