describe('express ad creating', () => {
    before(() => {
      cy
          .login('a.kondratev@cmtt.ru', 'q')
          .visit('/u/927443-test-com/319516-test')
          .clearNotifications()
    });
    beforeEach(() => {
        cy.sendCookie()
    });
    it('create express ad', () => {
      cy.visit('/u/927443-test-com/319516-test').get('h1').invoke('text').then((text) => {
        const postTitle = text.trim()
        cy.get('.etc_control:first').click()
        cy.contains('Продвинуть').click()
        cy.get('.bc-form__button')
          .find('button')
          .click()
        cy.url().should('eq', Cypress.config().baseUrl + 'cabinet/services')
        cy.get('.cs-list-item__title:first').find('span').invoke('text').should((text1) => {
        expect(text1.trim()).to.eq(postTitle)
        })
      })
    })   
    it('check notification about express ad', () => {
        cy.checkNotifBadge()
    })
    it('check express ad status after it was created', () => {
      cy.visit('/cabinet/services')
      cy.get('.cs-list-item__header:first').should('contain' , 'Не запущено')
    })
   /* 
   it('check layout for island of express ad ', () => {

    })
  */
})    