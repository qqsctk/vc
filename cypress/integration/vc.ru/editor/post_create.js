describe('post creating',() => {
   before(() => {
     cy
       .login('a.kondratev@cmtt.ru', 'q')
       .wait(1000);
   })
   beforeEach(() => {
     Cypress.Cookies.preserveOnce('osnova-aid', 'osnova-remember');
   })
   
    it('post windows opens type and publish',() => {
        cy.visit('/')
        cy.contains('Новая запись').click()
          .should("have.class","editor_body")
          .should("have.class","editor_title")
          .should("have.class","editor-content")
          .should("have.class","editor-cp__content l-editor")

        cy.fixture("text_data.json").then((data) => {
           cy.get("textarea[placeholder='Заголовок']").type(data.title)
             .get("textarea[placeholder='Нажмите Tab для выбора инструмента']").type(data.p)
             .type('{tab}').type(data.p2)
             .contains('Опубликовать').click()
             .get(".ui-button ui-button--2 ui-button--default").click()
             .should("have.class","v-button v-button--blue v-button--size-default v-button--mobile-size-tiny")   
        })
    })    
})