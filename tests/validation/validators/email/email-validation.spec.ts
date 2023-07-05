import { EmailValidation } from '@/validation/email'
import { InvalidFieldError } from '@/validation/errors'

import { faker } from '@faker-js/faker'

describe('EmailValidation', () => {
  it('Should return error if email is invalid', () => {
    const sut = new EmailValidation(faker.lorem.word())
    const error = sut.validate(faker.lorem.word())
    expect(error).toEqual(new InvalidFieldError())
  })

  it('Should return falsy if email is valid', () => {
    const sut = new EmailValidation(faker.lorem.word())
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
