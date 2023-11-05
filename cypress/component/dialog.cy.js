import { html } from "lit";
import "../../dist/components/dialog/dialog.js";

describe('dialog', () => {
  it('focus back to trigger button when close button clicked', () => {
    cy.mount(html`
      <cc-button onclick="this.nextElementSibling.showModal();" data-trigger>Open Dialog</cc-button>
      <cc-dialog>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <cc-button slot="footer-actions-right" theme="primary" onclick="this.parentElement.close('close');">Close</cc-button>
      </cc-dialog>
    `)

    cy.get('cc-button[data-trigger]').click()
    cy.get('cc-button:not([data-trigger])').click()
    cy.get('cc-button[data-trigger]').should('have.focus')
  })

  it('focus back to trigger button when icon button clicked', () => {
    cy.mount(html`
      <cc-button onclick="this.nextElementSibling.showModal();" data-trigger>Open Dialog</cc-button>
      <cc-dialog>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <cc-button slot="footer-actions-right" theme="primary" onclick="this.parentElement.close('close');">Close</cc-button>
      </cc-dialog>
    `)

    cy.get('cc-button[data-trigger]').click()
    cy.get('cc-dialog').shadow().find('[part="close-button"]').click()
    cy.get('cc-button[data-trigger]').should('have.focus')
  })
})