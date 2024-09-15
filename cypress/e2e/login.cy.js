describe('Teste focado em validar a interface de login', () => {

    it('Login com foco na Interface UI', () => {
        cy.visit('/')

        cy.get('[data-test="username"]').type(Cypress.env('username'))
        cy.get('[data-test="password"]').type(Cypress.env('password'))

        cy.get('[data-test="login-button"]').click()

        cy.contains('Add to cart').should('be.visible')

        /*  Este formato é interessante para validar a interface simulando
            o usuário final, é bom para testes onde você queira conferir
            que toda a experiência do usuário esteja funcionando conforme o esperado.
        */

    });

    it('Login com foco nas funcionalidades posteriores ao login', () => {
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

            cy.log('Login realizado!')

        /*  Use cy.request() quando o objetivo do teste não é validar a interface de login,
            mas sim testar funcionalidades posteriores a um login bem-sucedido, 
            de forma mais rápida e direta.
        */

    });

    it('Login armazenando o cache com foco na interface UI', () => {
        cy.loginUi(Cypress.env('username'), Cypress.env('password'))

    });
});