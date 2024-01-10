import { Page } from '@playwright/test';
import { RegistrationPageLocators } from './RegistrationPageLocators';
import { test, expect } from '@playwright/test';

class RegistrationPage {

    private readonly locators = RegistrationPageLocators;
    
    private readonly firstName = 'Amna';
    private readonly lastName = 'Hasanovic';
    private readonly email = 'amnahasanovic2510@gmail.com'
    private readonly phone = '062300259';
    private readonly city = 'Sarajevo';
    private readonly street = 'Josipa Vancasa';
    private readonly streetNum = '30';
    private readonly postalCode = '71000';
    private readonly password = 'amnica123';
    private readonly repeatPassword = 'amnica123'
    private readonly gender = 'female';

    async register(page: Page, 
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        city: string,
        street: string,
        streetNum: string,
        postalCode: string,
        password: string,
        repeatPassword: string,
        gender: string   
    ) {
        await page.fill(this.locators.firstNameInput, this.firstName);
        await page.fill(this.locators.lastNameInput, this.lastName);
        await page.fill(this.locators.emailInput, this.email);
        await page.fill(this.locators.phoneInput, this.phone);
        await page.fill(this.locators.cityInput, this.city);
        await page.fill(this.locators.streetInput, this.street);
        await page.fill(this.locators.streetNumInput, this.streetNum);
        await page.fill(this.locators.postalCodeInput, this.postalCode);
        await page.fill(this.locators.passwordInput, this.password);
        await page.fill(this.locators.repeatPassInput, this.repeatPassword);
        await page.click(this.gender === 'female' ? this.locators.genderButtonMale : this.locators.genderButtonFemale);
        await page.click(this.locators.agreeTermsInput);
        await page.click(this.locators.registerButton);
    }

    async fillFirstName(page: Page, firstName: string) {
        await page.fill(this.locators.firstNameInput, firstName);
    }

    async fillLastName(page: Page, lastName: string) {
        await page.fill(this.locators.lastNameInput, lastName);
    }

    async fillPhone(page: Page, phone: string) {
        await page.fill(this.locators.phoneInput, phone);
    }

    async fillCity(page: Page, city: string) {
        await page.fill(this.locators.cityInput, city);
    }

    async fillStreet(page: Page, street: string) {
        await page.fill(this.locators.streetInput, street);
    }

    async fillStreetNumber(page: Page, streetNumber: string) {
        await page.fill(this.locators.streetNumInput, streetNumber);
    }

    async fillPostalCode(page: Page, postalCode: string) {
        await page.fill(this.locators.postalCodeInput, postalCode);
    }

    async fillEmail(page: Page, email: string) {
        await page.fill(this.locators.emailInput, email);
    }

    async fillPassword(page: Page, password: string) {
        await page.fill(this.locators.passwordInput, password);
    }

    async fillRepeatPassword(page: Page, password: string) {
        await page.fill(this.locators.repeatPassInput, this.repeatPassword);
    }

    async clickGender(page: Page, gender: string) {
        await page.click(gender === 'female' ? this.locators.genderButtonFemale : this.locators.genderButtonMale);
    }

    async clickRegisterButton(page: Page) {
        await page.click(this.locators.registerButton);
    }

    async agreeToTerms(page: Page) {
        await page.check(this.locators.agreeTermsInput);
    }

    async assertRegistrationSuccess(page: Page) {
        await page.waitForSelector('.alert.alert-success');
        const confirmationMessage = await page.textContent('.alert.alert-success');
        expect(confirmationMessage).toContain('Uspješno ste započeli proces registracije.');
        expect(confirmationMessage).toContain('Na email adresu koju ste naveli poslate su instrukcije za kompletiranje procesa registracije.');
        expect(confirmationMessage).toContain('Molimo vas provjerite Vašu email adresu!');
    }

    async assertUserNavigation(page: Page) {
        await expect(page.url()).toContain('dashboard');
    }

    async assertErrorMessage(page: Page, fieldName: string, expectedMessage: string) {
        const errorMessage = await page.textContent(`.error-message.${this.email}`);
        expect(errorMessage).toContain('Unesite Validan Email.');
    } // POPRAVITIIIIIIIIIIIIIIIIII
}

    

export default new RegistrationPage();
