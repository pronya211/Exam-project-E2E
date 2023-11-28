import BasePage from "./BasePage";

class AuthorizatipnPage extends BasePage{

    constructor(){
        super();
        this.elements.authorizationEmailField = '#email';
        this.elements.authorizationPasswordField = '#password';
        this.elements.submitAuthorizationFormButton = '[aria-label="Login"]';
        this.elements.successAuthorization = '[aria-label="Show the shopping cart"]';

        this.elements.emptyAuthorizationEmailField = '.mat-error.ng-tns-c119-11.ng-star-inserted'
        this.elements.emptyAuthorizationPasswordField = '.mat-error.ng-tns-c119-12.ng-star-inserted'
        this.elements.clickCheckbox = '.mat-checkbox-label'
    }

    getAuthorizationEmailField(){

        cy.log('Fill in authorization fielsd...');
        return cy.get(this.elements.authorizationEmailField)

    }

    getAuthorizationPasswordField(){
        return cy.get(this.elements.authorizationPasswordField)

    }

    getSubmitAuthorizationFormButton(){

        cy.log('Submit authorization form button...');
        return cy.get(this.elements.submitAuthorizationFormButton)

    }

    getSuccessAuthorization(){

        cy.log('Verify success authorization...');
        return cy.get(this.elements.successAuthorization)

    }

    getEmptyAuthorizationEmailField(){

        return cy.get(this.elements.emptyAuthorizationEmailField)

    }

    getEmptyAuthorizationPasswordField(){
        
        return cy.get(this.elements.emptyAuthorizationPasswordField)

    }

    getClickCheckbox(){
        
        return cy.get(this.elements.clickCheckbox)

    }

    fillAuthorizationField(user){

        this.getAuthorizationEmailField().type(user.email);
        this.getAuthorizationPasswordField().type(user.password);
        this.getSubmitAuthorizationFormButton().click();
        this.getSuccessAuthorization().should('exist');

    }

    fillAuthorizationWithEmptyEmailField(user){

        this.getAuthorizationEmailField().click();
        this.getAuthorizationPasswordField().type(user.password);
        this.getEmptyAuthorizationEmailField().should('have.text', 'Please provide an email address.');

    }

    fillAuthorizationWithEmptyPasswordField(user){

        this.getAuthorizationEmailField().type(user.email);
        this.getAuthorizationPasswordField().click();
        this.getClickCheckbox().last().click();
        this.getEmptyAuthorizationPasswordField().should('have.text', 'Please provide a password.');

    }
    
}

export default new AuthorizatipnPage();