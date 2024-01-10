// src/pages/LoginPageLocators.ts
export const LoginPageLocators = {
    emailInput: 'input[name="login_email"]',
    passwordInput: 'input[name="login_password"]',
    loginButton: 'button[type="submit"]:contains("Prijava")',
    wrongPasswordError: '.alert.alert-danger:has-text("Pogrešna email adresa ili lozinka.")',
    blankEmailError: 'li.parsley-required:has-text("Ovo polje je obavezno.")',
    blankPasswordError: 'li.parsley-required:has-text("Ovo polje je obavezno.")',
};
