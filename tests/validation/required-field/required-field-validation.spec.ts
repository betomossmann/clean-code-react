import { RequiredFieldValidation } from '@/validation/required-field'
import { RequiredFieldError } from '@/validation/errors'

import { faker } from '@faker-js/faker'

describe('RequiredFieldValidation', () => {
  it('Should return error if field is empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })

  it('Should return falsy if field is not empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate(faker.lorem.words())
    expect(error).toBeFalsy()
  })
})
