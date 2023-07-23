describe('EBP-UI-login', () => {
  it('contributor logs in and verifies success page', () => {
    cy.visit('https://ebp-test.ebuilding.ca/');
    //verifies 1
    cy.contains('Log In');

    //<input class="……" name="email" type="email" placeholder="Email" value="">
    cy.get('[name="email"]').type('testcontributor@ebuilding.ca');
    //<input class="……" name="password" type="password" placeholder="Password" value="">
    cy.get('[name="password"]').type('Test@1234');

    //<button type="submit" class="……">Log In</button>
    cy.get('button[type="submit"]').click();

    cy.wait(4000);
    //verifies 2
    cy.contains('Dashboard');
    //cy.contains('Sign out');

  })
})