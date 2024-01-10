/// src/pages/OrderItemLocators.ts

export const OrderItemLocators = {
    categoryLink: 'a[href="https://www.sportvision.ba/obuca/za-muskarce+unisex/za-odrasle/"]',
    productItem: 'a[href="https://www.sportvision.ba/patike/53101016-reebok-reebok-lite-3-0"]',
    sizeOption: (size: string) => `li[data-productsize-name="${45}"]`,
    myBasket: 'a.btn.btn-success[title="MOJA KORPA"]',
    nextStepButton: 'button[type="submit"]:contains("Sljedeći korak")',
    deliveryOption: 'div.delivery-option-name strong:contains("GOTOVINA")',
    firstNameInput: 'input[name="cart_onepage_firstname"]',
    lastNameInput: 'input[name="cart_onepage_lastname"]',
    emailInput: 'input[name="cart_onepage_email"]',
    phoneInput: 'input[name="cart_onepage_phone"]',
    cityInput: 'input[name="cart_onepage_city"]',
    postcodeInput: 'input[name="cart_onepage_postcode"]',
    addressInput: 'input[name="cart_onepage_street"]',
    streetNoInput: 'input[name="cart_onepage_street_no"]',
    nextCartStepButton: 'button[type="submit"]:contains("Sljedeći korak")',
    confirmOrderButton: 'button[type="submit"]:contains("Potvrdi")',
    
  };
  
  