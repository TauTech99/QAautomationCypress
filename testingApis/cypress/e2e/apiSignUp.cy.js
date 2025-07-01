describe('log',()=>{
    it("Crear usuario ok",()=>{
        cy.intercept('POST', '/api/users').as('tau99')/*This is an alias for the request*/
        cy.visit("https://conduit.bondaracademy.com/")
        cy.contains('Sign up').click()
        const randomNum = Math.floor(Math.random() * 10000)
        const username = `testerTau${randomNum}`
        const email = `test${randomNum}@gmail.com`
        //cy.get('input[placeholder="Username"]').type("testuser") /*This is an op1 */
        cy.get(':nth-child(1) > .form-control').type(username) /*This is an op2 */
        cy.get(':nth-child(2) > .form-control').type(email)
        cy.get(':nth-child(3) > .form-control').type('12345678')
        cy.get('.btn').click()
        cy.wait('@tau99').then((interception) => {
            expect(interception.response.statusCode).to.equal(201)
            expect(interception.response.body.user.username).to.equal(username)
            expect(interception.response.body.user.email).to.equal(email)
        })

        
    })
});

