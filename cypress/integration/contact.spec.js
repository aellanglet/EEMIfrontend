describe('Navigation Test Contact', () => {
    it('Visits the Contact', () => {
        cy.visit("http://localhost:3000")
        cy.contains('Contact').click()
    })
})