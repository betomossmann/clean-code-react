import { CompareFieldValidation } from '@/validation/compare-fields'
import { InvalidFieldError } from '@/validation/errors'

import { faker } from '@faker-js/faker'

const makeSut = (valueToCompare: string): CompareFieldValidation => new CompareFieldValidation(faker.database.column(), valueToCompare)

describe('CompareFieldValidation', () => {
  it('Should return error if compare is invalid', () => {
    const sut = makeSut(faker.lorem.word())
    const error = sut.validate(faker.lorem.word())
    expect(error).toEqual(new InvalidFieldError())
  })

  it('Should return falsy if compare is valid', () => {
    const valueToCompare = faker.lorem.word()
    const sut = makeSut(valueToCompare)
    const error = sut.validate(valueToCompare)
    expect(error).toBeFalsy()
  })
})
