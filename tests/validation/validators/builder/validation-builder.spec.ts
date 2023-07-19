import { ValidationBuilder as Builder } from '@/validation/builder'
import { CompareFieldsValidation } from '@/validation/compare-fields'
import { EmailValidation } from '@/validation/email'
import { MinLengthValidation } from '@/validation/min-length'
import { RequiredFieldValidation } from '@/validation/required-field'

import { faker } from '@faker-js/faker'

describe('ValidationBuilder', () => {
  it('Should return RequiredFieldValidation', () => {
    const field = faker.database.column()
    const validations = Builder.field(field).required().build()
    expect(validations).toEqual([new RequiredFieldValidation(field)])
  })

  it('Should return EmailValidation', () => {
    const field = faker.database.column()
    const validations = Builder.field(field).email().build()
    expect(validations).toEqual([new EmailValidation(field)])
  })

  it('Should return MinLengthValidation', () => {
    const field = faker.database.column()
    const length = faker.number.int()
    const validations = Builder.field(field).min(length).build()
    expect(validations).toEqual([new MinLengthValidation(field, length)])
  })

  it('Should return CompareFieldsValidation', () => {
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()
    const validations = Builder.field(field).sameAs(fieldToCompare).build()
    expect(validations).toEqual([new CompareFieldsValidation(field, fieldToCompare)])
  })

  it('Should return a list of Validations', () => {
    const field = faker.database.column()
    const length = faker.number.int()
    const validations = Builder.field(field).required().min(length).email().build()
    expect(validations).toEqual([
      new RequiredFieldValidation(field),
      new MinLengthValidation(field, length),
      new EmailValidation(field)
    ])
  })
})
