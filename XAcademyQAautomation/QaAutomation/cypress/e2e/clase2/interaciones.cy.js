
describe('UI Interaciones',()=>{
    it('passes',()=>{
        cy.visit('https://endearing-lollipop-19f16d.netlify.app/')
        cy.get('[data-cy="nav-interacciones-ui"]').click()
        cy.wait(2000) // //////////////////////////////////////////////////////////////////
        //cy.get('[data-cy="interaction-form"] > :nth-child(1)').type('Taoufik')
        cy.get('[data-cy="username-input"]').type('Cypress') // Selector por atributo data-cy
        cy.wait(2000) // //////////////////////////////////////////////////////////////////
        cy.get('#email').type('cypress@gmail.com') // Selector por ID
        cy.wait(2000) // //////////////////////////////////////////////////////////////////
        //cy.get(".rounded-md").eq(12).type('123456') // Selector por clase, eq(12) para seleccionar el 13vo elemento
        cy.contains("Password").type('123456') // Selector por texto
        cy.wait(2000) // //////////////////////////////////////////////////////////////////
        cy.contains('Confirm Password').type('123456') // Selector por texto
        cy.wait(2000) // //////////////////////////////////////////////////////////////////
        cy.get('[data-cy="role-select"]').select("Manager") // Selector por atributo data-cy

        
                cy.contains('Notification Preferences').parent().within(() => {
                  cy.get('.space-y-2 > :nth-child(1) > .ml-2').click(0);
                  cy.get(':nth-child(2) > .ml-2').click(1);
                  cy.get(':nth-child(3) > .ml-2').click(2);
                  
                });
        cy.get(':nth-child(7) > .flex > .ml-2').click() // Selector por clase
        cy.wait(3000) // //////////////////////////////////////////////////////////////////

        cy.get('[data-cy="submit-button"]').should('have.text','Submit').click()// Selector por atributo data-cy
              
        




    })
})

// https://endearing-lollipop-19f16d.netlify.app/
