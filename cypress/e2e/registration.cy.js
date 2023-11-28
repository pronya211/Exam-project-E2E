import user from '../fixtures/user.json'
import { faker } from '@faker-js/faker';
import homePage from '../support/pages/HomePage';
import registrationPage from '../support/pages/RegistrationPage';
import authorizationPage from '../support/pages/AuthorizationPage';

user.email = faker.internet.email();
user.securityAnswer = faker.person.lastName();


describe('Success registration', () => {
  it('Registration', () => {
    
    homePage.visit();

    homePage.getDismissBanerButton().click();
    homePage.getAccountButton().click();
    homePage.getLoginButton().click();

    registrationPage.fillRegistrationField(user);

  })

  it('Authorization', () => {

    homePage.visit();

    homePage.getDismissBanerButton().click();
    homePage.getAccountButton().click();
    homePage.getLoginButton().click();

    authorizationPage.fillAuthorizationField(user);

  })

  it('Registration with empty email field', () => {
    
    homePage.visit();

    homePage.getDismissBanerButton().click();
    homePage.getAccountButton().click();
    homePage.getLoginButton().click();

    registrationPage.fillRegistrationWithEmptyEmailField(user);

  })

  it('Registration with empty password field', () => {
    
    homePage.visit();

    homePage.getDismissBanerButton().click();
    homePage.getAccountButton().click();
    homePage.getLoginButton().click();

    registrationPage.fillRegistrationWithEmptyPasswordField(user);

  })

  it('Registration with empty security answer field', () => {
    
    homePage.visit();

    homePage.getDismissBanerButton().click();
    homePage.getAccountButton().click();
    homePage.getLoginButton().click();

    registrationPage.fillRegistrationWithEmptySecurityAnswer(user);

  })

})