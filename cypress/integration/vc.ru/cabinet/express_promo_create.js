describe('express promo creating', () => {
    before(() => {
      cy
          .login('a.kondratev@cmtt.ru', 'q')
          .visit('/u/927443-test-com/')
          .get('.content-title').invoke('text').as('title')

      })
      beforeEach(() => {
        Cypress.Cookies.preserveOnce('osnova-aid', 'osnova-remember')
      })



    it('choose post and open constructor', () => {
      cy.get('.etc_control:first').click()
      cy.contains('Продвинуть').click()
      cy.get('.v-popup-container.constructor-popup-container .v-popup-window__content')
       .should('be.exist')
       
    })
    it('check title in constractor form', () => {
      cy.get('.booster-constructor__title')
        .should('have.css', 'font-size', '32px')
        .should('have.text', '\n    Продвинуть статью\n  ')
    })

    it('check preview in contractor form', () => {
    cy.get('.bp-unit__link')
      .should('have.attr', 'href')
    //cy.get('.bp-unit-entry__subsite-avatar').should('be.visible')
    cy.get('.bp-unit-entry__subsite-name').should('have.text', '\n      Test Com\n    ')
    cy.get('.bp-unit-entry__title').invoke('text').should('equal', '@title')
    })

    it('check hits form, submit button and redirect to cab', () => {
      cy.get('.t-link-inline').should('have.attr', 'href')
      cy.get('.v-range__handle').should('be.visible')
        .contains('Продолжить').should('be.visible').click()
      cy.url().should('eq', Cypress.config().baseUrl + '/cabinet/services')
      })
    it('check express promo added in cab', () => {
      cy.get('cs-list-item__title:first').should('equal', '@title')
        .get('cs-list-item__status').should('have.text', 'Не запущено')
        //.get('cs-list-item__info').should()
    })   
})    