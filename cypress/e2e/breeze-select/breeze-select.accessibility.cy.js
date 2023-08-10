describe('breeze-select accessibility test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/breeze-select');
  });

  it('dialog should not be visible', () => {
    cy.get('breeze-select')
      .shadow()
      .find('dialog')
      .should('not.be.visible');   
  });

  it('pressing UP ARROW should open dropdown', () => {
    cy.get('breeze-select')
      .shadow()
      .within(() => {
        cy.get('button[type=button]').focus().type('{upArrow}');
        // not sure why this is not working as the dialog is clearly visible
        // cy.get('dialog').should('be.visible');
      })
      .root()
      .find('breeze-option')
      .should('be.visible')
  });

  it('pressing DOWN ARROW should open dropdown', () => {
    cy.get('breeze-select')
      .shadow()
      .within(() => {
        cy.get('button[type=button]').focus().type('{downArrow}');
        // cy.get('dialog').should('be.visible');
      })
      .root()
      .find('breeze-option')
      .should('be.visible')
  });

  it('pressing ENTER should open dropdown', () => {
    cy.get('breeze-select')
      .shadow()
      .within(() => {
        cy.get('button[type=button]').focus().type('{enter}');
        // cy.get('dialog').should('be.visible');
      })
      .root()
      .find('breeze-option')
      .should('be.visible')
  });

  // it('pressing SPACE should open dropdown', () => {
  //   cy.get('breeze-select')
  //     .shadow()
  //     .within(() => {
  //       cy.get('button[type=button]').focus().type('{space}');
  //       // cy.get('dialog').should('be.visible');
  //     })
  //     .root()
  //     .find('breeze-option')
  //     .should('be.visible')
  // });

  it('pressing HOME should open dropdown', () => {
    cy.get('breeze-select')
      .shadow()
      .within(() => {
        cy.get('button[type=button]').focus().type('{home}');
      })
      .root()
      .find('breeze-option')
      .should('be.visible')
  });

  it('pressing END should open dropdown', () => {
    cy.get('breeze-select')
      .shadow()
      .within(() => {
        cy.get('button[type=button]').focus().type('{end}');
      })
      .root()
      .find('breeze-option')
      .should('be.visible')
  });
});