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
    cy.get("[type='email']").type('a.kondratev@cmtt.ru');
    cy.get("[type='password']").type('q').type('{enter}');
    cy.get(".navigation-user-profile__avatar-image")
      .should('be.exist');

  });
});
