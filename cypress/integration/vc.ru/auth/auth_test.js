describe('auth',() => {
  it('email auth', ()=> {
    cy.visit('/');
    cy.contains('Войти')
      .should('be.visible')
      .click();
    cy.get(".t-link-inline")
       .contains('Войти')
       .should('be.visible')
       .click();
    cy.get(".v-button__label").contains('Почта').click();
    cy.fixture("login.json").then((user) => {
       cy.get("[type='email']").type(user.email);
       cy.get("[type='password']").type(user.password).type('{enter}');
    });
    cy.get(".navigation-user-profile__avatar-image")
      .should('be.exist'); 
    cy.get("[type='email']").type('a.kondratev@cmtt.ru');
    cy.get("[type='password']").type('q').type('{enter}');
    cy.get(".navigation-user-profile__avatar-image")
      .should('be.exist');
  });
});
