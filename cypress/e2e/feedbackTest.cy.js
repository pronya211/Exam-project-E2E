import user from '../fixtures/user.json';
import information from '../fixtures/information.json';
import homePage from '../support/pages/HomePage';
import authorizationPage from '../support/pages/AuthorizationPage';
import feedbackPage from '../support/pages/FeedbackPage';
import { registrationApi } from '../support/registrationHelper';
import { faker } from '@faker-js/faker';

user.email = faker.internet.email();
user.securityAnswer = faker.person.lastName();
information.comment = faker.hacker.phrase();


describe('Success authorization', () => {

  it('Authorization', () => {

    registrationApi(user);
    cy.log('Verufy user regisrtion');

    homePage.visit();

    homePage.getDismissBanerButton().click();
    homePage.getAccountButton().click();
    homePage.getLoginButton().click();

    authorizationPage.fillAuthorizationField(user);

    homePage.getSidebarButton().click();

    feedbackPage.fillFeadbackForm(information);

  })

})