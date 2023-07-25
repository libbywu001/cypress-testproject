// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('contruibutor_loginByDefaultAccount', () => {
    cy.visit('https://ebp-test.ebuilding.ca/');
    //cy.contains('Log In');
    cy.contains('Log In', { timeout: 4000 }).should('be.visible');

    //<input class="……" name="email" type="email" placeholder="Email" value="">
    cy.get('[name="email"]').type('testcontributor@ebuilding.ca');
    //<input class="……" name="password" type="password" placeholder="Password" value="">
    cy.get('[name="password"]').type('Test@1234');

    //<button type="submit" class="……">Log In</button>
    cy.get('button[type="submit"]').click();

    //cy.wait(4000);
    cy.contains('Dashboard', { timeout: 8000 }).should('exist');
   // cy.contains('Sign out', { timeout: 4000 }).should('exist');
})
Cypress.Commands.add('contruibutor_loginByAccount', (contributor_username, contributor_password) => {
    cy.visit('https://ebp-test.ebuilding.ca/');
    //cy.contains('Log In');
    cy.contains('Log In', { timeout: 4000 }).should('be.visible');

    //<input class="……" name="email" type="email" placeholder="Email" value="">
    cy.get('[name="email"]').type(contributor_username);
    //<input class="……" name="password" type="password" placeholder="Password" value="">
    cy.get('[name="password"]').type(contributor_password);

    //<button type="submit" class="……">Log In</button>
    cy.get('button[type="submit"]').click();

    //cy.wait(4000);
    cy.contains('Dashboard', { timeout: 8000 }).should('exist');
   // cy.contains('Sign out', { timeout: 4000 }).should('exist');
})
//
Cypress.Commands.add('contruibutor_signOut', () => {
    cy.visit('https://ebp-test.ebuilding.ca/');
    //cy.contains('Log In');
    cy.contains('Sign out').click();

    //
    cy.contains('Log In', { timeout: 4000 }).should('exist');
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })