// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Autenticar', () => { 
    cy.visit('https://endearing-lollipop-19f16d.netlify.app/')
    cy.get('[data-cy="nav-autenticacion"]').click()
    cy.wait(3000) // Espera 2 segundos para que la página cargue
    cy.get('[data-cy="generate-credentials-btn"]').click() // Clic en el botón para generar credenciales
    cy.get('[data-cy="login-submit"]').click()
})
