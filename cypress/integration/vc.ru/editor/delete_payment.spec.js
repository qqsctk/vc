describe('deleting payment', () => {
    
    it('delete payment', () => {
        cy.basicAuth();
        cy.fixture("login_details.json").then((user) => {
            cy.get("[type='email']").type(user.email);
            cy.get("[type='password']").type(user.password)
            cy.contains('Далее')
              .click()
            cy.get('[data-field=0]').find('td:first').next()
              .click()
            cy.get('.swal2-actions').find('button:first').click({forse:true})
            cy.get('.notification__body').should('have.text', 'Платеж успешно удалён')   
         });
     
    })   

})