import BasePage from "./BasePage";

class AddressPage extends BasePage{

    constructor(){
        super();
        this.elements.checkoutButtonInCart = '#checkoutButton';
        this.elements.addNewAddressbutton = '[aria-label="Add a new address"]';
        this.elements.countryField = '[placeholder="Please provide a country."]';
        this.elements.nameField = '[placeholder="Please provide a name."]';
        this.elements.phoneNumberField = '[type="number"]';
        this.elements.zipCodeField = '[placeholder="Please provide a ZIP code."]';
        this.elements.addressField = '#address';
        this.elements.cityField = '[placeholder="Please provide a city."]';
        this.elements.stateField = '[placeholder="Please provide a state."]';
        this.elements.addressFormSubmitButton = '#submitButton';
        this.elements.radioButtonForSelectAddress = '[class="mat-radio-label"]';
        this.elements.continueButtonAddressMenu = '[aria-label="Proceed to payment selection"]';
        this.elements.radioButtonSelectDeliverySpeed = '.mat-radio-button.mat-accent';
        this.elements.continueButtonDeliverySpeedMenu = '[aria-label="Proceed to delivery method selection"]';
        this.elements.errorMessageCountry = '#mat-error-2';
        this.elements.errorMessageCity = '.ng-tns-c119-21.ng-trigger.ng-trigger-transitionMessages.ng-star-inserted';
    }

    getCheckoutButtonInCart(){

        cy.log('Start order processing...');
        return cy.get(this.elements.checkoutButtonInCart)

    }

    getAddNewAddressbutton(){

        return cy.get(this.elements.addNewAddressbutton)

    }

    getCountryField(){
        
        return cy.get(this.elements.countryField)

    }

    getNameField(){
        
        return cy.get(this.elements.nameField)

    }

    getPhoneNumberField(){
        
        return cy.get(this.elements.phoneNumberField)

    }

    getZipCodeField(){
        
        return cy.get(this.elements.zipCodeField)

    }

    getAddressField(){
        
        return cy.get(this.elements.addressField)

    }

    getCityField(){
        
        return cy.get(this.elements.cityField)

    }

    getStateField(){
        
        return cy.get(this.elements.stateField)

    }

    getAddressFormSubmitButton(){
        
        return cy.get(this.elements.addressFormSubmitButton)

    }

    getRadioButtonForSelectAddress(){
        
        return cy.get(this.elements.radioButtonForSelectAddress)

    }

    getContinueButtonAddressMenu(){
        
        return cy.get(this.elements.continueButtonAddressMenu)

    }

    getRadioButtonSelectDeliverySpeed(){
        
        return cy.get(this.elements.radioButtonSelectDeliverySpeed)

    }

    getContinueButtonDeliverySpeedMenu(){
        
        return cy.get(this.elements.continueButtonDeliverySpeedMenu)

    }

    getErrorMessageCountry(){
        
        return cy.get(this.elements.errorMessageCountry)

    }

    getErrorMessageCity(){
        
        return cy.get(this.elements.errorMessageCity)

    }

    fillAddressInformation(information){
        
        this.getCheckoutButtonInCart().last().click();
        this.getAddNewAddressbutton().click();
        this.getCountryField().type(information.country);
        this.getNameField().type(information.name);
        this.getPhoneNumberField().type(information.phoneNumber);
        this.getZipCodeField().type(information.zipCode);
        this.getAddressField().type(information.address); 
        this.getCityField().type(information.city); 
        this.getStateField().type(information.state); 
        this.getAddressFormSubmitButton().last().click();
        this.getRadioButtonForSelectAddress().last().click();
        this.getContinueButtonAddressMenu().click();
        this.getRadioButtonSelectDeliverySpeed().first().click();
        this.getContinueButtonDeliverySpeedMenu().click()

    }

    fillAddressInformationWithEmptyCountryField(information){
        
        this.getCheckoutButtonInCart().last().click();
        this.getAddNewAddressbutton().click();
        this.getCountryField().click();
        this.getNameField().type(information.name);
        this.getPhoneNumberField().type(information.phoneNumber);
        this.getZipCodeField().type(information.zipCode);
        this.getAddressField().type(information.address); 
        this.getCityField().type(information.city); 
        this.getStateField().type(information.state); 
        this.getErrorMessageCountry().should('have.text', ' Please provide a country. ')
        cy.log('Success test...');

    }

    fillAddressInformationWithEmptyCityField(information){
        
        this.getCheckoutButtonInCart().last().click();
        this.getAddNewAddressbutton().click();
        this.getCountryField().type(information.country);
        this.getNameField().type(information.name);
        this.getPhoneNumberField().type(information.phoneNumber);
        this.getZipCodeField().type(information.zipCode);
        this.getAddressField().type(information.address); 
        this.getCityField().click(); 
        this.getStateField().type(information.state)
        this.getErrorMessageCity().should('have.text', ' Please provide a city. ')
        cy.log('Success test...'); 

    }


   
}

export default new AddressPage();