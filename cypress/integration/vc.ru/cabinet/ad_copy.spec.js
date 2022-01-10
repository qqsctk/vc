describe('copeing ad', () => {
    before(() => {
      cy
          .login('a.kondratev@cmtt.ru', 'q')
    });      
    beforeEach(() => {
        cy.sendCookie()
      });
    it('to copy express ad', () => {
        cy.visit('/cabinet/services')
          .clearNotifications()
          .get('.v-etc__button:first').click()
          .get('.popover-item__label').contains('Создать копию').click()
        cy.contains('Продолжить').click()
        cy.wait(2000)
        cy.checkNotifBadge()
    });      
})      