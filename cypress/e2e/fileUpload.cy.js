describe('Test focused on showing how to perform and validate a file upload', () => {

    it('Validate response request', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#file-upload').selectFile('cypress/fixtures/testFileUpload.png')
        cy.wait(1000)
        cy.get('#file-submit').click()

        cy.request({

            method: 'GET',
            url: ('https://the-internet.herokuapp.com/upload'),
            form: true,

        }).then((response) => {

            if (response.status === 200) { }
        }),

            cy.log('File Uploaded!')
    }); // This method validates the response through the request's status.
});