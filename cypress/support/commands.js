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

Cypress.Commands.add('sendCookie', (email, password) => {
    Cypress.Cookies.preserveOnce('osnova-aid', 'osnova-remember');
});     

import 'cypress-wait-until';