describe('Navigation Test Cards', () => {
    it('Visits the Cards', () => {
        cy.visit("http://localhost:3000")
        cy.contains('Cards').click()
    })
})