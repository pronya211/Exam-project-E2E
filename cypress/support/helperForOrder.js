export function findProduct(productName) { 
  cy.get('body').then( body => {
      if(body.find(`[alt="${productName}"]`).length > 0){
        cy.get(`[alt="${productName}"]`);
        cy.get('[aria-label="Add to Basket"]').eq(10).click();
      } else {
        cy.get('.mat-paginator-icon').last().click();
        findProduct(productName);
      }
  })
} 