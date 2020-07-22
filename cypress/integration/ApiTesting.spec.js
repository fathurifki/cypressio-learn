describe('Api Testing', () => {

    let result

    it('Validate Header', () => {

        result = cy.request('https://jsonplaceholder.typicode.com/posts')

        result.its('headers')
            .its('content-type')
            .should('include', 'application/json')
    })

    it('Validate Status', () => {

        result = cy.request('https://jsonplaceholder.typicode.com/posts')

        result.its('status').should('equal', 200);

    })

    it('Validate Body', () => {

        result = cy.request('https://jsonplaceholder.typicode.com/posts/1')

        result.its('body')
        result.should((response) => {
            expect(response).to.have.property('title')
            expect(response).to.have.property('body')
        })

    })
})