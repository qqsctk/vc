Cypress.Commands.add('login', (email, password) => {
    Cypress.log({
        name: 'login'
    })
    cy.request({
        'method':'POST',
        'url': 'https://vc.ru/auth/simple/login',
        'form': true,
        'body': {
            'values[login]': 'a.kondratev@cmtt.ru',
            'values[password]': 'q',
        }, 
        'headers': {
          'x-this-is-csrf': 'THIS IS SPARTA!'
        },
    })
});     
Cypress.Commands.add('sendCookie', () => {
    Cypress.Cookies.preserveOnce('osnova-aid', 'osnova-remember');
});  
Cypress.Commands.add('zip', () => {
    cy.get('.v-etc__button:first')
      .click()
      .get('.popover-item__label').contains('Архивировать')
      .click();
});
Cypress.Commands.add('unzip', () => {
    cy.get('.v-etc__button:first')
      .click()
      .get('.popover-item__label').contains('Разархивировать')
      .click();
});
Cypress.Commands.add('clearNotifications', () => {
    cy.get('.head-notifies__badge:last').dblclick({force:true})
});
Cypress.Commands.add('checkNotifBadge', () => {
    cy.get('.head-notifies__toggler:last')
          .find('span')
          .invoke('text').then((text)=> {
          expect(text.trim()).equal('1')
        })
});        
import 'cypress-wait-until';