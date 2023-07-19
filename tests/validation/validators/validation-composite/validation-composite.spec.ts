import { ValidationComposite } from '@/validation/validation-composite'
import { FieldValidationSpy } from '@/tests/validation/mocks'

import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: ValidationComposite
  fieldValidationsSpy: FieldValidationSpy[]
}

const makeSut = (fieldName: string): SutTypes => {
  const fieldValidationsSpy = [
    new FieldValidationSpy(fieldName),
    new FieldValidationSpy(fieldName)
  ]
  const sut = ValidationComposite.build(fieldValidationsSpy)
  return {
    sut,
    fieldValidationsSpy
  }
}

describe('ValidationComposite', () => {
  it('Should return erro if any validation fails', () => {
    const fieldName = faker.database.column()
    const { sut, fieldValidationsSpy } = makeSut(fieldName)
    const errorMessage = faker.lorem.words()
    fieldValidationsSpy[0].error = new Error(errorMessage)
    fieldValidationsSpy[1].error = new Error(faker.lorem.words())
    const error = sut.validate(fieldName, { [fieldName]: faker.lorem.words() })
    expect(error).toBe(error)
  })

  it('Should validaiton return falsy there is no error', () => {
    const fieldName = faker.database.column()
    const { sut } = makeSut(fieldName)
    const error = sut.validate(fieldName, { [fieldName]: faker.lorem.words() })
    expect(error).toBeFalsy()
  })
})
