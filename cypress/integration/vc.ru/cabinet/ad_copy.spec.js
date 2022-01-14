describe('check copy function for diff types of ads', () => {
    before(() => {
      cy
          .login('a.kondratev@cmtt.ru', 'q')
    });      
    beforeEach(() => {
        cy.sendCookie()
      });
    it('to copy express ad', () => {
        cy.visitCabinet()
          .clearNotifications()
          .get('.v-etc__button:first').click()
          .get('.popover-item__label').contains('Создать копию').click()
        cy.contains('Продолжить').click()
        cy.wait(2000)
        cy.checkNotifBadge()
    });  
    it('to copy ad', () => {
      cy.visitCabinet()
        .clearNotifications()
        .get('.v-etc__button:first').click()
        .get('.popover-item__label').contains('Создать копию').click()
      cy.contains('Сохранить').click()
      cy.wait(2000)
      cy.checkNotifBadge()
  });          
})      