import "cypress-file-upload";

describe('Identify Element', () => {
    it('Sign Up', () => {
        cy.visit('/')
        cy.contains(`Don't have an account? Sign Up`).click()
        cy.get('form').within(($form) => {
            cy.fixture('userCredential').then(user => {
                cy.get('input[type="text"]').type(user.email)
                cy.get('input[type="password"]').type(user.password)
                cy.root().submit()
            })
        })
        cy.wait(500)
        cy.contains('OK').click()
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/register')
        })
    })

    it('Sign In', () => {
        cy.SignIn()
    })

    it('Create Profile', () => {
        cy.contains('Profile').click({ force: true })
        cy.get('form').within(($form) => {
            cy.get('input').first().type('Jono')
            cy.get('input').eq(1).type('08747474711')
            cy.get('input').eq(2).type('Jalan Aman')
            cy.get('input').eq(3).type('Yogyakarta')
            cy.get('input').eq(4).type('Bca')
            cy.get('input').eq(5).type('098484848')
            cy.get('input').eq(6).type('Mandiri')
            cy.get('input').last(7).type('939393939')
            cy.root().submit()
        })
        cy.wait(500)
        cy.contains('OK').click()
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/products')
        })
    })

    it('Create Product', () => {
        cy.contains('Input Product').click()
        cy.get('form').within(($form) => {
            cy.get('input').first().type('Buah Melon')
            cy.get('input').eq(1).type('Buah-Buahan')
            cy.get('input').eq(2).type('10000')
            cy.get('input').eq(3).type('20')
            cy.get('input').eq(4).type('10')
            cy.get('input').eq(5).type('Buah Melon Yang Segar')
            const picture = 'melon.jpg'
            cy.get('input[type=file]')
                .attachFile(picture)
            cy.root().submit()
        })
        cy.wait(600)
        cy.contains('OK').click()
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/products')
        })
    })
})