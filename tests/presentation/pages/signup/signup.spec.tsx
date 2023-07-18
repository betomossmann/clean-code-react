import { Helper, ValidationStub } from '@/tests/presentation/mocks'
import { SignUp } from '@/presentation/pages'

import React from 'react'
import { faker } from '@faker-js/faker'
import { type RenderResult, render, cleanup } from '@testing-library/react'

type SutTypes = {
  sut: RenderResult
}

type SutParams = {
  validationError: string
}

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  validationStub.errorMessage = params?.validationError
  const sut = render(
    <SignUp validation={validationStub} />
  )
  return {
    sut
  }
}

describe('SignUp Component', () => {
  afterEach(cleanup)

  it('Should start with initial state', () => {
    const validationError = faker.lorem.words()
    const { sut } = makeSut({ validationError })
    Helper.testChildCount(sut, 'error-wrap', 0)
    Helper.testButtonDisabled(sut, 'submit', true)
    Helper.testStatusForField(sut, 'name', validationError)
    Helper.testStatusForField(sut, 'email', 'Campo obrigatório')
    Helper.testStatusForField(sut, 'password', 'Campo obrigatório')
    Helper.testStatusForField(sut, 'passwordConfirmation', 'Campo obrigatório')
  })

  it('Should show name error if Validation fails', () => {
    const validationError = faker.lorem.words()
    const { sut } = makeSut({ validationError })
    Helper.populateField(sut, 'name')
    Helper.testStatusForField(sut, 'name', validationError)
  })
})
