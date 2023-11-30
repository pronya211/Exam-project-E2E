export function registrationApi(user) {

    cy.request({
        url: '/api/Users/',
        method: 'POST',
        body: user
    })
    .then( response => {
        
        
        expect(response.body.data.email).to.eq(user.email);
    })
}