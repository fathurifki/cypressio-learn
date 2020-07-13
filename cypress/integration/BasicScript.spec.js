describe('Login', function () {
    it('Sign in', function () {
        cy.visit('http://localhost:3000/')
        cy.get('input[type="text"]').type('jhondoe@gmail.com')
        cy.get('input[type="password"]').type('12345678')
        cy.get('button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.makeStyles-submit-4.MuiButton-containedPrimary.MuiButton-fullWidth').contains('Sign In').click()
        cy.get('div.MuiBackdrop-root').click({force: true})
    })
})