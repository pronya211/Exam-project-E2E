import BasePage from "./BasePage";

class FeedbackPage extends BasePage{

    constructor(){
        super();
        this.elements.customerFeedbackButton = '.menu-text.truncate:contains(" Customer Feedback ")';
        this.elements.commentField = '#comment';
        this.elements.raitingSlider = '.mat-slider.mat-focus-indicator.mat-accent.mat-slider-has-ticks.mat-slider-horizontal.mat-slider-thumb-label-showing';
        this.elements.captchaTask = '#captcha';
        this.elements.captchaResultField = '#captchaControl';
        this.elements.submitFeedbackFormButton = '#submitButton';
        this.elements.textSuccessFeedback = '.mat-simple-snack-bar-content';
    }

    getCustomerFeedbackButton(){
        cy.log('Feedback form opened...');
        return cy.get(this.elements.customerFeedbackButton)

    }

    getCommentField(){

        return cy.get(this.elements.commentField)

    }

    getRaitingSlider(){

        return cy.get(this.elements.raitingSlider)

    }

    getCaptchaTask(){

        return cy.get(this.elements.captchaTask).invoke('text').then((expression) => {
            const result = eval(expression);
            cy.get(this.elements.captchaResultField).type(result);
          })

    }

    getSubmitFeedbackFormButton(){

        return cy.get(this.elements.submitFeedbackFormButton)

    }

    getTextSuccessFeedback(){

        return cy.get(this.elements.textSuccessFeedback)

    }

    fillFeadbackForm(information){

        this.getCustomerFeedbackButton().click();
        this.getCommentField().type(information.comment);
        this.getRaitingSlider().last().click();
        this.getCaptchaTask();
        this.getSubmitFeedbackFormButton().click();
        this.getTextSuccessFeedback().last().should('have.text', 'Thank you for your feedback.');
        cy.log('Successfull test...');

    }
    
}

export default new FeedbackPage();