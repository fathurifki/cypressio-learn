Cypress.Commands.add('SignIn', () => {
    cy.visit('https://ecstatic-mahavira-dcba2a.netlify.app/')
    cy.get('form').within(($form) => {
        cy.get('input[type="text"]').type('jhondoe@gmail.com')
        cy.get('input[type="password"]').type('12345678')
        cy.root().submit()
    })
    cy.wait(500)
    cy.location().should((location) => {
        expect(location.pathname).to.eq('/')
    })
})