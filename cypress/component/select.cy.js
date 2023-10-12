import { html } from "lit";
import "../../dist/components/email-field/email-field.js";

describe('cc-email-field', () => {
  it('label', () => {
    cy.mount(html`
      <cc-email-field label="Email" name="email"></cc-email-field>
    `)

    // Label
    cy.get('cc-email-field').shadow().find('label')
      .should('be.visible')
      .should('have.text', 'Email')

    /**
     * @todo - click label should focus input
     */
  })

  it('name attr and placeholder attr', () => {
    const placeholder = 'mail@exmaple.com';

    cy.mount(html`
      <cc-email-field label="Email" name="email" placeholder="${placeholder}"></cc-email-field>
    `)
     
    // Name attr
    cy.get('cc-email-field').shadow().find('input')
    .should('have.attr', 'name')
    .and('equal', 'email')

    // Placeholder
    cy.get('cc-email-field').shadow().find('input')
    .should('have.attr', 'placeholder')
    .and('equal', placeholder)
  })

  it('initial value is synced', () => {
    const value = 'brandon@exmaple.com';

    cy.mount(html`
      <cc-email-field label="Email" name="email" value="${value}"></cc-email-field>
    `)

    cy.get('cc-email-field').shadow().find('input')
    .should('have.attr', 'value')
    .and('equal', value)

    cy.get('cc-email-field').should('have.value', value)
  })

  it('helper text', () => {
    const data = 'Please enter your email address.';

    cy.mount(html`
      <cc-email-field label="Email" name="email" helper-text="${data}"></cc-email-field>
    `)

    cy.get('cc-email-field').shadow().find('slot[name="helper-text"]')
      .should('have.text', data)
  })
})