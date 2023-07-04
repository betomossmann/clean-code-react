import Styles from './login-styles.scss'
import { Footer, FormStatus, Input, LoginHeader } from '@/presentation/components'
import { Context } from '@/presentation/contexts/form'
import { type Validation } from '@/presentation/protocols/validation'

import React, { useEffect, useState } from 'react'

type Props = {
  validation: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
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

  return (
    <>
      <div className={Styles.login}>
        <LoginHeader />
        <Context.Provider value={{ state, setState }}>
          <form className={Styles.form}>
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
