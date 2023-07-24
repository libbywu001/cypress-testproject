describe('EBP-UI-login', () => {
    it('contributor logs in and verifies success page', () => {

        cy.fixture('test_data.json').then((data) => {
            cy.visit(data.homepage_ebp);
            cy.contains('Log In', { timeout: 4000 }).should('be.visible');

            //<input class="……" name="email" type="email" placeholder="Email" value="">
            cy.get('[name="email"]').type(data.contributor_email);
            //<input class="……" name="password" type="password" placeholder="Password" value="">
            cy.get('[name="password"]').type(data.contributor_password);
        });

        //<button type="submit" class="……">Log In</button>
        cy.get('button[type="submit"]').click();

        //cy.wait(4000);
        cy.contains('Dashboard', { timeout: 8000 }).should('exist');
        cy.contains('Sign out', { timeout: 4000 }).should('exist');

        cy.log('now sign out');
        cy.contains('Sign out').click();

        //
        cy.contains('Log In', { timeout: 4000 }).should('exist');
    })
})