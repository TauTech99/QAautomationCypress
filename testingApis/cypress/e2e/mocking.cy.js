describe('Mocking Tests', () => {
    it('Mocking',()=>{
        cy.intercept('GET', '/api/articles*',{
            body:{
                "articles": [
                {
                    "title": "Que tremendo titulazo",
                    "body": "Este es un cuerpo de prueba para el artículo.",
                    "createdAt": "Hace cualquier momento Brother",
                    "description": "Discover Bondar Academy's unique place...",
                    "author": {
                        "username": "Tester",
                        "following": false   
                    },
                    "favorited": false,
                    "favoritesCount": 9999
                }
                ],
                "articlesCount": 1
            }
        }).as('Tau99');
        
        cy.visit("https://conduit.bondaracademy.com/")
        cy.contains('Que tremendo titulazo').should('be.visible')
        cy.get('.author').should('be.visible')
        
        
    })
})


