import { faker } from '@faker-js/faker'

const baseUrl: string = Cypress.config().baseUrl

describe('Login', () => {
  beforeEach(() => {
    cy.visit('login')
  })
  it('Should load with correct initial state', () => {
    cy.getByTestId('email-status').should('have.attr', 'title', 'Campo obrigatório')
    cy.getByTestId('password-status').should('have.attr', 'title', 'Campo obrigatório')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present error state if form is invalid', () => {
    cy.getByTestId('email').type(faker.lorem.word())
    cy.getByTestId('email-status').should('have.attr', 'title', 'Valor inválido')
    cy.getByTestId('password').type(faker.string.alphanumeric(3))
    cy.getByTestId('password-status').should('have.attr', 'title', 'Valor inválido')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present valid state if form is valid', () => {
    cy.getByTestId('email').type(faker.internet.email())
    cy.getByTestId('email-status').should('have.attr', 'title', 'Tudo certo!')
    cy.getByTestId('password').type(faker.string.alphanumeric(5))
    cy.getByTestId('password-status').should('have.attr', 'title', 'Tudo certo!')
    cy.getByTestId('submit').should('not.have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present error if invalid credencials are provided', () => {
    cy.getByTestId('email').type(faker.internet.email())
    cy.getByTestId('password').type(faker.string.alphanumeric(5))
    cy.getByTestId('submit').click()
    cy.getByTestId('error-wrap')
      .getByTestId('spinner').should('exist')
      .getByTestId('main-error').should('not.exist')
      .getByTestId('spinner').should('not.exist')
      .getByTestId('main-error').should('contain.text', 'Credenciais inválidas')
    cy.url().should('eq', `${baseUrl}/login`)
  })
})
