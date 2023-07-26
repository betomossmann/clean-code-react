import { InvalidFieldError } from '@/validation/errors'
import { MinLengthValidation } from '@/validation/min-length'

import { faker } from '@faker-js/faker'

const makeSut = (field: string): MinLengthValidation => new MinLengthValidation(field, 5)

describe('MinLengthValidation', () => {
  it('Should return error if value is invalid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: faker.string.alpha(4) })
    expect(error).toEqual(new InvalidFieldError())
  })

  it('Should return falsy if value is valid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: faker.string.alpha(5) })
    expect(error).toBeFalsy()
  })

  it('Should return falsy if field does not exists in schema', () => {
    const sut = makeSut('any_field')
    const error = sut.validate({ invalidField: faker.string.alpha(5) })
    expect(error).toBeFalsy()
  })
})
