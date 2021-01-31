describe('Navigation Test Mentions', () => {
    it('Visits the Mentions', () => {
        cy.visit("http://localhost:3000")
        cy.contains('Mentions').click()
    })
})