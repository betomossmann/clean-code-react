import React from 'react'
import { Login } from '@/presentation/pages'
import { RemoteAuthentication } from '@/data/usecases/authentication'
import { AxiosHttpClient } from '@/infra/http/axios-http-client'
import { ValidationComposite } from '@/validation/validation-composite'
import { ValidationBuilder } from '@/validation/builder'

export const makeLogin: React.FC = () => {
  const url = 'https://bdev.onrender.com/api/login'
  const axiosHttpClient = new AxiosHttpClient()
  const remoteAuthentication = new RemoteAuthentication(url, axiosHttpClient)
  const validationComposite = ValidationComposite.build([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('Password').required().min(5).build()
  ])
  return (
    <Login authentication={remoteAuthentication} validation={validationComposite} />
  )
}
