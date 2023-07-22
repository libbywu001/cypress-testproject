describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://ebp-test.ebuilding.ca/')
    cy.contains('Log In') //123
  })
})