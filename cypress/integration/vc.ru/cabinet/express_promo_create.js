describe('express promo create', () => {
    before(() => {
        cy
          .login('a.kondratev@cmtt.ru', 'q')
          .wait(1000);
      })
      beforeEach(() => {
        Cypress.Cookies.preserveOnce('osnova-aid', 'osnova-remember');
      })

    it('choose post and open constructor', () => {
    cy.visit('/u/927443-test-com')
    cy.get('.etc_control:first').click()
    cy.contains('Продвинуть').click()
    cy.get('v-popup-window__content')
       .should('be.exist')
       
    })
    it('check booster form title in constractor form', () => {
    cy.get('.booster-constructor__title')
      .should('have.css', 'font-size', '32px')
      .should('have.text', '\n Продвинуть статью\n ')
    })

    it('check preview', () => {
    cy.get('.bp-unit__link')
      .should('have.attr', 'href')
    //cy.get('.bp-unit-entry__subsite-avatar').should('be.visible')
    cy.get('.bp-unit-entry__subsite-name').should('have.text', '\n      Test Com\n    ')
    })
})    