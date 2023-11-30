import BasePage from "./BasePage";

class RegistrationPage extends BasePage{

    constructor(){
        super();
        this.elements.linkForRegistrationFrom = '.primary-link';
        this.elements.registrationEmailField = '#emailControl';
        this.elements.registrationPasswordField = '#passwordControl';
        this.elements.repeatPasswordField = '#repeatPasswordControl';
        this.elements.sequrityQuestionsMenu = '.mat-form-field-infix.ng-tns-c119-16';
        this.elements.selectedSequrityQuestion = '#mat-option-4';
        this.elements.securityAnswer = '#securityAnswerControl';
        this.elements.submitRegistrationFormButton  = '[aria-label="Button to complete the registration"]';
        this.elements.successRegistration = 'span[class="mat-simple-snack-bar-content"]';

        this.elements.emptyRegistrationEmailField = '.mat-error.ng-tns-c119-13.ng-star-inserted';
        this.elements.emptyRegistrationPasswordField = '.mat-error.ng-tns-c119-14.ng-star-inserted';
        this.elements.emptySecurityAnswer = '.mat-error.ng-tns-c119-18.ng-star-inserted';

    }

    

    getLinkForRegistrationFrom(){

        cy.log('Opening registration page...')
        return cy.get(this.elements.linkForRegistrationFrom)

    }

    getRegistrationEmailField(){

        cy.log('Fill in regisration fielsd...');
        return cy.get(this.elements.registrationEmailField)

    }

    getRegistrationPasswordField(){
        return cy.get(this.elements.registrationPasswordField)

    }

    getRepeatPasswordField(){
        return cy.get(this.elements.repeatPasswordField)

    }

    getSequrityQuestionsMenu(){
        return cy.get(this.elements.sequrityQuestionsMenu)

    }

    getSelectedSequrityQuestion(){
        return cy.get(this.elements.selectedSequrityQuestion)

    }

    getSecurityAnswer(){
        return cy.get(this.elements.securityAnswer)

    }

    getSubmitRegistrationFormButton(){

        cy.log('Submit registration form button...');
        return cy.get(this.elements.submitRegistrationFormButton)

    }

    getSuccessRegistration(){

        cy.log('Verify success registration...');
        return cy.get(this.elements.successRegistration)

    }

    getEmptyRegistrationEmailField(){

        return cy.get(this.elements.emptyRegistrationEmailField)

    }

    getEmptyRegistrationPasswordField(){

        return cy.get(this.elements.emptyRegistrationPasswordField)

    }

    getEmptySecurityAnswer(){

        return cy.get(this.elements.emptySecurityAnswer)

    }

    fillRegistrationField(user){

        this.getLinkForRegistrationFrom().last().click();
        this.getRegistrationEmailField().type(user.email);
        this.getRegistrationPasswordField().type(user.password);
        this.getRepeatPasswordField().type(user.password);
        this.getSequrityQuestionsMenu().click();
        this.getSelectedSequrityQuestion().click();
        this.getSecurityAnswer().type(user.securityAnswer);
        this.getSubmitRegistrationFormButton().click();
        this.getSuccessRegistration().should('have.text', 'Registration completed successfully. You can now log in.')
        cy.log('Successfull test...');

    }

    fillRegistrationWithEmptyEmailField(user){

        this.getLinkForRegistrationFrom().last().click();
        this.getRegistrationEmailField().click();
        this.getRegistrationPasswordField().type(user.password);
        this.getRepeatPasswordField().type(user.password);
        this.getSequrityQuestionsMenu().click();
        this.getSelectedSequrityQuestion().click();
        this.getSecurityAnswer().type(user.securityAnswer);
        this.getEmptyRegistrationEmailField().should('have.text', 'Please provide an email address.');
        cy.log('Successfull test...');

    }

    fillRegistrationWithEmptyPasswordField(user){

        this.getLinkForRegistrationFrom().last().click();
        this.getRegistrationEmailField().type(user.email);
        this.getRegistrationPasswordField().click();
        this.getRepeatPasswordField().type(user.password);
        this.getSequrityQuestionsMenu().click();
        this.getSelectedSequrityQuestion().click();
        this.getSecurityAnswer().type(user.securityAnswer);
        this.getEmptyRegistrationPasswordField().should('have.text', 'Please provide a password. ');
        cy.log('Success test...');

    }

    fillRegistrationWithEmptySecurityAnswer(user){

        this.getLinkForRegistrationFrom().last().click();
        this.getSecurityAnswer().click();
        this.getRegistrationEmailField().type(user.email);
        this.getRegistrationPasswordField().type(user.password);
        this.getRepeatPasswordField().type(user.password);
        this.getSequrityQuestionsMenu().click();
        this.getSelectedSequrityQuestion().click();
        this.getEmptySecurityAnswer().should('have.text', ' Please provide an answer to your security question. ');
        cy.log('Successfull test...');

    }
    
}

export default new RegistrationPage();