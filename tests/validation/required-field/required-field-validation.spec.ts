import { RequiredFieldValidation } from '@/validation/required-field'
import { RequiredFieldError } from '@/validation/errors'

import { faker } from '@faker-js/faker'

const makeSut = (): RequiredFieldValidation => new RequiredFieldValidation(faker.database.column())

describe('RequiredFieldValidation', () => {
  it('Should return error if field is empty', () => {
    const sut = makeSut()
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })

  it('Should return falsy if field is not empty', () => {
    const sut = makeSut()
    const error = sut.validate(faker.lorem.words())
    expect(error).toBeFalsy()
  })
})
