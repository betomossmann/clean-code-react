import { makeSignUpValidation } from './signup-validation-factory'
import { makeRemoteAddAccount } from '@/main/factories/usecases'
import { SignUp } from '@/presentation/pages'

import React from 'react'

export const MakeSignUp: React.FC = () => {
  return <SignUp addAccount={makeRemoteAddAccount()} validation={makeSignUpValidation()} />
}
