describe('creating payment', () => {
    
    it('all required items filled', () => {
        cy.basicAuth();
        cy.fixture("login_details.json").then((user) => {
            cy.get("[type='email']").type(user.email);
            cy.get("[type='password']").type(user.password)
            cy.contains('Далее')
              .click()
            cy.contains('Добавить платёж')
              .click()  
            cy.get('textarea').first().type('Hello world')
            cy.contains('Добавить').click()
            cy.get('.notification__body').should('have.text', 'Платеж успешно добавлен')  
         });
     
    })   
})