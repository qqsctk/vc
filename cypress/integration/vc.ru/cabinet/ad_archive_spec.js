describe('to archive ad', () => {
    before(() => {
        cy.login('a.kondratev@cmtt.ru', 'q');
    });

    beforeEach(() => {
        cy.sendCookie()
    });

    it('send an ad to the archive', () => {
        cy
            .visitCabinet()
            .get('.cs-list .cs-list-item .cs-list-item__title').contains('test')
            .closest('.cs-list-item__title')
            .zip() 
        cy.waitUntil(() => 
            cy.get('#notify').contains('Объявление заархивировано').should('be.visible'))
        /*cy 
          .contains('Услуги').click({force:true})
          .contains('test').should('not.exist');
        check case if one ad only
        */
    });
    it('remove an ad from the archive', () => {
        cy
            .visitCabinet()  
            .get('.cs-list .cs-list-item .cs-list-item__title').contains('test')
            .closest('.cs-list-item__title')
            .unzip() 
        cy.waitUntil(() => 
            cy.get('#notify').contains('Объявление восстановлено из архива').should('be.visible'))
    });
});