import Styles from './login-styles.scss'
import { Footer, FormStatus, Input, LoginHeader, SubmitButton } from '@/presentation/components'
import { type Validation } from '@/presentation/protocols/validation'
import { ApiContext, FormContext } from '@/presentation/contexts'
import { type Authentication } from '@/domain/usecases'

import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

type Props = {
  validation: Validation
  authentication: Authentication
}

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const { setCurrentAccount } = useContext(ApiContext)
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

  useEffect(() => { validate('email') }, [state.email])
  useEffect(() => { validate('password') }, [state.password])

  const validate = (field: string): void => {
    const { email, password } = state
    const formData = { email, password }
    setState(old => ({ ...old, [`${field}Error`]: validation.validate(field, formData) }))
    setState(old => ({ ...old, isFormInvalid: !!old.emailError || !!old.passwordError }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.isFormInvalid) {
        return
      }
      setState({ ...state, isLoading: true })
      const account = await authentication.auth({
        email: state.email,
        password: state.password
      })
      setCurrentAccount(account)
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
        <FormContext.Provider value={{ state, setState }}>
          <form data-testid='form' className={Styles.form} onSubmit={handleSubmit}>
            <h2>Login</h2>
            <Input type='email' name='email' placeholder='Digite seu e-mail' />
            <Input type='password' name='password' placeholder='Digite sua senha' />
            <SubmitButton text='Entrar' />
            <Link data-testid='signup' to='/signup' className={Styles.link}>Cadastre-se</Link>
            <FormStatus />
          </form>
        </FormContext.Provider>
        <Footer />
      </div>
    </>
  )
}

export default Login
