import Styles from './login-styles.scss'
import { Footer, FormStatus, Input, LoginHeader } from '@/presentation/components'
import { Context } from '@/presentation/contexts/form'
import { type Validation } from '@/presentation/protocols/validation'
import { type Authentication } from '@/domain/usecases'

import React, { useEffect, useState } from 'react'

type Props = {
  validation: Validation
  authentication: Authentication
}

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })
  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    })
  }, [state.email, state.password])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (state.isLoading || state.emailError || state.passwordError) { return }
    setState({ ...state, isLoading: true })
    authentication.auth({ email: state.email, password: state.password })
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
            <button data-testid='submit' disabled={!!state.emailError || !!state.passwordError} className={Styles.submit} type="submit">Entrar</button>
            <span className={Styles.link}>Cadastre-se</span>
            <FormStatus />
          </form>
        </Context.Provider>
        <Footer />
      </div>
    </>
  )
}

export default Login
