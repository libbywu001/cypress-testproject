describe('EBP-UI-Billing-notloin', () => {
    //core business operation
    it('contributor-billing page', () => {
        cy.visit('https://ebp-test.ebuilding.ca/dashboard/billing');
        cy.contains('Payment History', { timeout: 6000 }).should('exist');

    })
})