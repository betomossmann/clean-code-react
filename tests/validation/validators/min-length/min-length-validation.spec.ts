import { InvalidFieldError } from '@/validation/errors'
import { MinLengthValidation } from '@/validation/min-length'

describe('MinLengthValidation', () => {
  it('Should return error if value is invalid', () => {
    const sut = new MinLengthValidation('field', 5)
    const error = sut.validate('123')
    expect(error).toEqual(new InvalidFieldError())
  })

  it('Should return falsy if value is valid', () => {
    const sut = new MinLengthValidation('field', 5)
    const error = sut.validate('12345')
    expect(error).toBeFalsy()
  })
})
