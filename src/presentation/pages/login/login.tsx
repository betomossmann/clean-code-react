import Styles from './login-styles.scss'
import { Footer, FormStatus, Input, LoginHeader, SubmitButton } from '@/presentation/components'
import { Context } from '@/presentation/contexts/form'
import { type Validation } from '@/presentation/protocols/validation'
import { type SaveAccessToken, type Authentication } from '@/domain/usecases'

import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

type Props = {
  validation: Validation
  authentication: Authentication
  saveAccessToken: SaveAccessToken
}

const Login: React.FC<Props> = ({ validation, authentication, saveAccessToken }: Props) => {
  const navigate = useNavigate()
  const [state, setState] = useState({
    isLoading: false,
    isFormInvalid: true,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })
  useEffect(() => {
    const { email, password } = state
    const formData = { email, password }
    const emailError = validation.validate('email', formData)
    const passwordError = validation.validate('password', formData)

    setState({
      ...state,
      emailError,
      passwordError,
      isFormInvalid: !!emailError || !!passwordError
    })
  }, [state.email, state.password])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.isFormInvalid) {
        return
      }
      setState({ ...state, isLoading: true })
      const account = await authentication.auth({
        email: state.email, password: state.password
      })
      await saveAccessToken.save(account.accessToken)
      navigate('/', { replace: true })
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        mainError: error.message
      })
    }
  }

  return (
    <>
      <div className={Styles.login}>
        <LoginHeader />
        <Context.Provider value={{ state, setState }}>
          <form data-testid='form' className={Styles.form} onSubmit={handleSubmit}>
            <h2>Login</h2>
            <Input type='email' name='email' placeholder='Digite seu e-mail' />
            <Input type='password' name='password' placeholder='Digite sua senha' />
            <SubmitButton text='Entrar' />
            <Link data-testid='signup' to='/signup' className={Styles.link}>Cadastre-se</Link>
            <FormStatus />
          </form>
        </Context.Provider>
        <Footer />
      </div>
    </>
  )
}

export default Login
