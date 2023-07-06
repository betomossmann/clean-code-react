import { makeLoginValidation } from './login-validation-factory'
import { makeRemoteAuthentication } from '@/main/factories/usecases/authentication'
import { Login } from '@/presentation/pages'

import React from 'react'

export const makeLogin: React.FC = () => {
  return (
    <Login authentication={makeRemoteAuthentication()} validation={makeLoginValidation()} />
  )
}
