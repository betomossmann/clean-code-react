import { ValidationBuilder as Builder } from '@/validation/builder'
import { EmailValidation } from '@/validation/email'
import { MinLengthValidation } from '@/validation/min-length'
import { RequiredFieldValidation } from '@/validation/required-field'

describe('ValidationBuilder', () => {
  it('Should return RequiredFieldValidatiom', () => {
    const validations = Builder.field('any_field').required().build()
    expect(validations).toEqual([new RequiredFieldValidation('any_field')])
  })

  it('Should return EmailValidatiom', () => {
    const validations = Builder.field('any_field').email().build()
    expect(validations).toEqual([new EmailValidation('any_field')])
  })

  it('Should return EmailValidatiom', () => {
    const validations = Builder.field('any_field').min(5).build()
    expect(validations).toEqual([new MinLengthValidation('any_field', 5)])
  })
})
