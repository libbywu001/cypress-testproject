describe('EBP-UI-Billing', () => {
    // login
    beforeEach(() => {
        cy.contruibutor_loginByDefaultAccount();
      });
    // logout
    afterEach(() => {
        cy.contruibutor_signOut();
      });

    // one of the core business operations
    it('contributor-billing page', () => {
        cy.visit('https://ebp-test.ebuilding.ca/dashboard/billing');
        cy.contains('Payment History', { timeout: 6000 }).should('exist');

    })
})