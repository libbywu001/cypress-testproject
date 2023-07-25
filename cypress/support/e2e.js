// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
// Global "before" hook, executed before all tests run
before(() => {
    // some global preparation work, such as cleaning test data and simulating login operations
    //e.g. login
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
});

after(() => {
    // some global cleanup tasks, such as clearing test data and logging out, etc.
    //e.g. logout
    cy.visit('https://ebp-test.ebuilding.ca/');
    //cy.contains('Log In');
    cy.contains('Sign out').click();
    cy.contains('Log In', { timeout: 4000 }).should('exist');
});

// Alternatively you can use CommonJS syntax:
// require('./commands')