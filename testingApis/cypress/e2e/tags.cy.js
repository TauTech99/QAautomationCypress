describe('Mocking Tests', () => {
    it('Mocking',()=>{
        cy.intercept('GET', '/api/tags*',{fixture: 'tags.json'}).as('Tau99Tags');
        cy.visit("https://conduit.bondaracademy.com/")

        // Esperar el intercept y verificar que los tags aparecen
        cy.wait('@Tau99Tags')
        cy.contains('Test').should('be.visible')
        cy.contains('Cypress').should('be.visible')
        cy.contains('Bondar Academy').should('be.visible')

            
        });
       
    })
