import 'cypress-wait-until';

Cypress.Commands.add('login', () => {
    cy.visit('/')
    cy.fixture("login_details.json").then((user) => {
        cy.get("[type='email']").type(user.email);
        cy.get("[type='password']").type(user.password).type('{enter}');
     });

});
Cypress.Commands.add('sendCookie', () => {
    Cypress.Cookies.preserveOnce('sessionid');
}); 

Cypress.Commands.add('basicAuth', () => {
    cy.visit('https://finance.dev.fabrique.studio/accounts/login/', {
            auth: {
              username: 'fabrique',
              password: 'fabrique',
            },
          })
}); 
