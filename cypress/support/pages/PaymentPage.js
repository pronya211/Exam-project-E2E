import BasePage from "./BasePage";

class PaymentPage extends BasePage{

    constructor(){
        super();
        this.elements.addNewCardButton = '#mat-expansion-panel-header-0';
        this.elements.nameCardField = '#mat-input-10';
        this.elements.cardNumberField = '#mat-input-11';
        this.elements.expiryMonthField = '#mat-input-12';
        this.elements.expiryYearField = '#mat-input-13';
        this.elements.submitButtonPaymentForm = '#submitButton';
        this.elements.radioButtonExistPaymentOption = '.mat-radio-container';
        this.elements.continueButtonPaymrntOption = '[aria-label="Proceed to review"]';
        this.elements.payButtonOrderSummery = '#checkoutButton';
        this.elements.successOrderText = '.confirmation';
        this.elements.errorMessageNameField = '#mat-error-15';
        this.elements.errorMessageCardNumberField = '#mat-error-16';
    }

    getAddNewCardButton(){

        cy.log('Opening payment options...');
        return cy.get(this.elements.addNewCardButton)

    }

    getNameCardField(){

        cy.log('Start input card information...');
        return cy.get(this.elements.nameCardField)

    }

    getCardNumberField(){
        
        return cy.get(this.elements.cardNumberField)

    }

    getExpiryMonthField(){
        
        return cy.get(this.elements.expiryMonthField)

    }

    getExpiryYearField(){
        
        return cy.get(this.elements.expiryYearField)

    }

    getSubmitButtonPaymentForm(){
        
        return cy.get(this.elements.submitButtonPaymentForm)

    }

    getRadioButtonExistPaymentOption(){
        
        return cy.get(this.elements.radioButtonExistPaymentOption)

    }

    getContinueButtonPaymrntOption(){
        
        return cy.get(this.elements.continueButtonPaymrntOption)

    }

    getPayButtonOrderSummery(){
        
        return cy.get(this.elements.payButtonOrderSummery)

    }

    getSuccessOrderText(){
        
        cy.log('Order has been placed...');
        return cy.get(this.elements.successOrderText)
        
    }

    getErrorMessageNameField(){
        
        return cy.get(this.elements.errorMessageNameField)
        
    }

    getErrorMessageCardNumberField(){
        
        return cy.get(this.elements.errorMessageCardNumberField)
        
    }

    fillPaymentInformation(information){
        
        this.getAddNewCardButton().click();
        this.getNameCardField().type(information.name);
        this.getCardNumberField().type(information.creditCardNumber);
        this.getExpiryMonthField().select('3').should('have.value', '3');
        this.getExpiryYearField().select('2083').should('have.value', '2083');
        this.getSubmitButtonPaymentForm().last().click();
        this.getRadioButtonExistPaymentOption().last().click();
        this.getContinueButtonPaymrntOption().click();
        this.getPayButtonOrderSummery().last().click();
        this.getSuccessOrderText().first().should('have.text', 'Thank you for your purchase!');
        cy.log('Success test...');
        

    }

    fillPaymentInformationWithEmptyNameField(information){
        
        this.getAddNewCardButton().click();
        this.getNameCardField().click();
        this.getCardNumberField().type(information.creditCardNumber);
        this.getExpiryMonthField().select('3').should('have.value', '3');
        this.getExpiryYearField().select('2083').should('have.value', '2083');
        this.getErrorMessageNameField().should('have.text', ' Please provide a name. ');
        cy.log('Success test...');

    }

    fillPaymentInformationWithEmptyCardNumberField(information){
        
        this.getAddNewCardButton().click();
        this.getNameCardField().type(information.name);
        this.getCardNumberField().click();
        this.getExpiryMonthField().select('3').should('have.value', '3');
        this.getExpiryYearField().select('2083').should('have.value', '2083');
        this.getErrorMessageCardNumberField().should('have.text', ' Please enter your card number. ');
        cy.log('Success test...');
        

    }

   
}

export default new PaymentPage();