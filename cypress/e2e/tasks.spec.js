describe('Home page', () => {
  it('navigate', () => {
    cy.visit('/')

    cy.get('h1').should('be.visible')
  });
});