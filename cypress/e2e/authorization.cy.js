import user from '../fixtures/user.json';
import homePage from '../support/pages/HomePage';
import authorizationPage from '../support/pages/AuthorizationPage';
import { registrationApi } from '../support/registrationHelper';
import { faker } from '@faker-js/faker';

user.email = faker.internet.email();
user.securityAnswer = faker.person.lastName();


describe('Success authorization', () => {

  it('Authorization', () => {

    registrationApi(user);
    cy.log('Verufy user regisrtion');
    
    homePage.visit();

    homePage.getDismissBanerButton().click();
    homePage.getAccountButton().click();
    homePage.getLoginButton().click();

    authorizationPage.fillAuthorizationField(user);

  })

  it('Authorization with empty email field', () => {
    
    homePage.visit();

    homePage.getDismissBanerButton().click();
    homePage.getAccountButton().click();
    homePage.getLoginButton().click();

    authorizationPage.fillAuthorizationWithEmptyEmailField(user);

  })

  it('Authorization with empty password field', () => {
    
    homePage.visit();

    homePage.getDismissBanerButton().click();
    homePage.getAccountButton().click();
    homePage.getLoginButton().click();

    authorizationPage.fillAuthorizationWithEmptyPasswordField(user);

  })

})