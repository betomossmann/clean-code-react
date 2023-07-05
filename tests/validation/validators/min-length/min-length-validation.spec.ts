import { InvalidFieldError } from '@/validation/errors'
import { MinLengthValidation } from '@/validation/min-length'

import { faker } from '@faker-js/faker'

const makeSut = (): MinLengthValidation => new MinLengthValidation(faker.database.column(), 5)

describe('MinLengthValidation', () => {
  it('Should return error if value is invalid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.string.alpha(4))
    expect(error).toEqual(new InvalidFieldError())
  })

  it('Should return falsy if value is valid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.string.alpha(5))
    expect(error).toBeFalsy()
  })
})
