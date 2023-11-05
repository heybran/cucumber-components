describe('cc-select accessibility test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/components/select');
    cy.injectAxe();
  });

  it('Has no detectable a11y violations on load (custom configuration)', () => {
    // Configure aXe and test the page at initial load
    // cy.configureAxe({
    //   branding: {
    //     brand: String,
    //     application: String
    //   },
    //   reporter: 'option',
    //   checks: [Object],
    //   rules: [Object],
    //   locale: Object
    // });
    cy.checkA11y();
  });
});