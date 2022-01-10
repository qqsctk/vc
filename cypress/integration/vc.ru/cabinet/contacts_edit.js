describe('editing and saving contacts', () => {
    before(() => {
      cy
          .login('a.kondratev@cmtt.ru', 'q')
          .visit('cabinet/details')
    });      
    beforeEach(() => {
        cy.sendCookie()
      });
    it('to copy ad', () => {
        cy.get('button').should('have.class', 'v-button v-button--blue v-button--size-default v-button--disabled')
        cy.get('input[type=email]')
          .invoke('val')
          .then((val1) => {
            cy.get('input[type=email]').type('com')
            cy.get('button').should('have.class', 'v-button v-button--blue v-button--size-default')
              .contains('Сохранить')
              .click()
            cy.get('input[type=email]')
              .invoke('val')
              .should((val2) => {
                  expect(val1).not.to.eq(val2)
              })
          })
          
    })
})        