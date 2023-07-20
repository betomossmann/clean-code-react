const baseUrl: string = Cypress.config().baseUrl

export const testUrl = (path: string): void => {
  cy.url().should('eq', `${baseUrl}${path}`)
}
