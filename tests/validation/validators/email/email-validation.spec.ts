import { EmailValidation } from '@/validation/email'
import { InvalidFieldError } from '@/validation/errors'

import { faker } from '@faker-js/faker'

const makeSut = (): EmailValidation => new EmailValidation(faker.database.column())

describe('EmailValidation', () => {
  it('Should return error if email is invalid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.lorem.word())
    expect(error).toEqual(new InvalidFieldError())
  })

  it('Should return falsy if email is valid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })

  it('Should return falsy if email is empty', () => {
    const sut = makeSut()
    const error = sut.validate('')
    expect(error).toBeFalsy()
  })
})
