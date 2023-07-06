import { ValidationBuilder } from '@/validation/builder'
import { ValidationComposite } from '@/validation/validation-composite'

export const makeLoginValidation = (): ValidationComposite => {
  return ValidationComposite.build([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().min(5).build()
  ])
}
