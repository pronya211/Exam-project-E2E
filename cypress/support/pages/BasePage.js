
export default class BasePage{

    constructor(){

        this.elements = {};
        this.elements.dismissBanerButton = '[aria-label="Close Welcome Banner"]';
        this.elements.headerLogo = '[alt="OWASP Juice Shop"]';
        this.elements.addToBasketButton = '[aria-label="Add to Basket"]';
        this.elements.accountButton = '#navbarAccount';
        this.elements.loginButton = '#navbarLoginButton';
        this.elements.shoppingCartButton = '[aria-label="Show the shopping cart"]';
        this.elements.sidebarButton = '[aria-label="Open Sidenav"]';
    }

    getDismissBanerButton(){

        cy.log('Dismiss baner...');
        return cy.get(this.elements.dismissBanerButton);

    }

    getAccountButton(){

        cy.log('Opening authorization page...')
        return cy.get(this.elements.accountButton);

    }

    getLoginButton(){

        return cy.get(this.elements.loginButton);

    }

    getHeaderLogo(){

        return cy.get(this.elements.headerLogo);

    }

    getAddToBasketButton(){

        return cy.get(this.elements.addToBasketButton);

    }

    getShoppingCartButton(){

        return cy.get(this.elements.shoppingCartButton);

    }

    getSidebarButton(){

        return cy.get(this.elements.sidebarButton);

    }

    
}
