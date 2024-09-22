describe('Test focused on validating the login interface', () => {

    it('Login focused on the UI interface', () => {
        cy.visit('https://www.saucedemo.com')

        cy.get('[data-test="username"]').type(Cypress.env('username'))
        cy.get('[data-test="password"]').type(Cypress.env('password'))

        cy.get('[data-test="login-button"]').click()

        cy.contains('Add to cart').should('be.visible')

        /*  This format is interesting for validating the interface by 
        simulating the end user. It's good for tests where you want 
        to ensure that the entire user experience is working as expected.
        */

    });

    it('Login focused on functionalities', () => {
        cy.request({

            method: 'GET',
            url: ('/'),
            form: true,
            body: {
                username: Cypress.env('username'),
                password: Cypress.env('password'),
            },

        }).then((response) => {

            if (response.status === 200) { }
        }),

            cy.log('Login success!')

        /*  Use cy.request() when the goal of the test is not to validate 
        the login interface, but to test functionalities after a successful 
        login, in a quicker and more direct way.
        */

    });

    it('Login storing the cache with a focus on the UI interface', () => {
        cy.loginUi(Cypress.env('username'), Cypress.env('password'))

        /*  This scenario uses two interesting functions to apply in projects, 
        bringing the point of reusing the login through cookies, so it only goes through 
        the login screen once. It is a way to implement the login using Commands, 
        combined with the .env (to check the code for this scenario, 
        just go to the commands folder (loginUI.cy.js)).
        */
    });
});