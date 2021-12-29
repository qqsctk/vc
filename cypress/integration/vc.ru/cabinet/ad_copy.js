describe('copeing ad', () => {
    before(() => {
      cy
          .login('a.kondratev@cmtt.ru', 'q')
          .visit('/cabinet/services')
    });      
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('osnova-aid', 'osnova-remember')
      });
    it('to copy ad', () => {
        cy.get('.v-etc__button:first').click()
        cy.get('.popover-item__label').contains('Создать копию').click()
        cy.get('.booster-constructor__form .bc-form .v-button v-button--blue v-button--size-default').click()
        //cy.reload()
        //cy.get('.head-notifies__badge').invoke('text').should('eq', '1')
    });      
})      