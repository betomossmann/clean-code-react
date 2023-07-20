import { faker } from '@faker-js/faker'

export const mockUnauthorizedError = (url: RegExp): void => {
  cy.intercept({
    method: 'POST',
    url
  }, {
    statusCode: 401,
    body: {
      error: faker.lorem.words()
    }
  }).as('request')
}

export const mockForbiddenError = (url: RegExp, method: string): void => {
  cy.intercept({
    method,
    url
  }, {
    statusCode: 403,
    body: {
      error: faker.lorem.words()
    }
  }).as('request')
}

export const mockServerError = (url: RegExp, method: string): void => {
  cy.intercept({
    method,
    url
  }, {
    statusCode: faker.helpers.shuffle([400, 404, 500]),
    body: {
      error: faker.lorem.words()
    }
  }).as('request')
}

export const mockOk = (url: RegExp, method: string, fixture: string, alias: string = 'request'): void => {
  cy.intercept({
    method,
    url
  }, {
    statusCode: 200,
    fixture
  }).as(alias)
}
