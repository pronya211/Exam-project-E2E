import user from '../fixtures/user.json';
import information from '../fixtures/information.json';
import orderData from '../fixtures/order.json'
import homePage from '../support/pages/HomePage';
import authorizationPage from '../support/pages/AuthorizationPage';
import addressPage from '../support/pages/AddressPage';
import paymentPage from '../support/pages/PaymentPage';
import { registrationApi } from '../support/registrationHelper';
import { findProduct } from '../support/helperForOrder';
import { faker } from '@faker-js/faker';

user.email = faker.internet.email();
user.securityAnswer = faker.person.lastName();

information.country = faker.location.country();
information.name = faker.person.firstName()
information.phoneNumber = faker.finance.accountNumber()
information.zipCode = faker.location.zipCode('####')
information.address = faker.location.street();
information.city = faker.location.city();
information.state = faker.location.state();
information.creditCardNumber = faker.finance.creditCardNumber({ issuer: '63[7-9]############L' })

describe('Orders tests', () => {

    it('Success order', () => {
  
       registrationApi(user);
      cy.log('Verufy user regisrtion');
      
      homePage.visit();
  
      homePage.getDismissBanerButton().click();
      homePage.getAccountButton().click();
      homePage.getLoginButton().click();
  
      authorizationPage.fillAuthorizationField(user);

      

      findProduct(orderData.productName)
      cy.log('Product was added in cart');

      homePage.getHeaderLogo().click()
      homePage.getShoppingCartButton().click();

      addressPage.fillAddressInformation(information);

      paymentPage.fillPaymentInformation(information);
  
    })

})