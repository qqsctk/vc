describe('to archive ad', () => {
    before(() => {
        cy.login('a.kondratev@cmtt.ru', 'q');
    });

    beforeEach(() => {
       sendCookie()
    });

    it('send the service to the archive', () => {
        cy
            .visit('/cabinet/services')
            .get('.cs-list .cs-list-item .cs-list-item__title').contains('тест')
            .closest('.cs-list-item')
            .within(() => {
                cy
                    .get('.v-etc__button')
                    .click()
                    .get('.popover-item__label').contains('Архивировать')
                    .click();
            });

        cy.waitUntil(() => 
            cy.get('#notify').contains('Объявление заархивировано')
        );

        cy 
            .get('.cs-list .cs-list-item .cs-list-item__title').contains('тест').should('not.exist')
    });

    it('remove a service from the archive', () => {
        cy
            .visit('/cabinet/archive')    
            .get('.cs-list .cs-list-item .cs-list-item__title').contains('тест')
            .closest('.cs-list-item')
            .within(() => {
                cy
                    .get('.v-etc__button')
                    .click()
                    .get('.popover-item__main .popover-item__label').contains('Разархивировать')
                    .click();
            });   

        cy.waitUntil(() => 
            cy.get('#notify').contains('Объявление восстановлено из архива')
        );
            

        cy 
            .get('.l-page__content .v-archive').contains('тест').should('not.exist')
    });

});