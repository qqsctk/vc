Cypress.Commands.add('login', (email, password) => {
    Cypress.log({
        name: 'Login'
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
