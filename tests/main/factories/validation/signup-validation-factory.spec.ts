import { makeSignUpValidation } from '@/main/factories/pages/signup/signup-validation-factory'
import { ValidationComposite } from '@/validation/validation-composite'
import { RequiredFieldValidation } from '@/validation/required-field'
import { MinLengthValidation } from '@/validation/min-length'
import { EmailValidation } from '@/validation/email'
import { CompareFieldsValidation } from '@/validation/compare-fields'

describe('SignUpValidationFactory', () => {
  test('Should make ValidationComposite with correct validations', () => {
    const composite = makeSignUpValidation()
    expect(composite).toEqual(ValidationComposite.build([
      new RequiredFieldValidation('name'),
      new MinLengthValidation('name', 5),
      new RequiredFieldValidation('email'),
      new EmailValidation('email'),
      new RequiredFieldValidation('password'),
      new MinLengthValidation('password', 5),
      new RequiredFieldValidation('passwordConfirmation'),
      new CompareFieldsValidation('passwordConfirmation', 'password')
    ]))
  })
})
