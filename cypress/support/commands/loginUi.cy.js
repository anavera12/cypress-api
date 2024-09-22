Cypress.Commands.add('loginUi', (username, password) => {
    cy.session(["username", "password"], () => {
        cy.visit('https://www.saucedemo.com')

        cy.get('[data-test="username"]').type(Cypress.env('username'))
        cy.get('[data-test="password"]').type(Cypress.env('password'))

        cy.get('[data-test="login-button"]').click()

        cy.waitUntil(() =>

            cy.contains('Add to cart').then($el => $el.is(':visible')), {

            timeout: 12000,
            interval: 500
        })  //Optei por utilizar o cy.waitUntil pois é uma espera mais orgânica.
        //Em uma interface de maior lentidão, trás o benefício de ser mais rápido 
        //que o cy.wait estático.
    })
})