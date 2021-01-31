describe('Navigation Test Cards item', () => {
    it('Visits the Cards item', () => {
        cy.visit("http://localhost:3000/cards")
        cy.get('[alt="AS"]').click()
    })
})