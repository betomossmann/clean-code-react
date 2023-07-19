import Styles from './signup-styles.scss'
import { Footer, FormStatus, Input, LoginHeader, SubmitButton } from '@/presentation/components'
import { Context } from '@/presentation/contexts/form'
import { type Validation } from '@/presentation/protocols/validation'
import { type SaveAccessToken, type AddAccount } from '@/domain/usecases'

import React, { useEffect, useState } from 'react'
import { useNavigate , Link } from 'react-router-dom'

type Props = {
  validation: Validation
  addAccount: AddAccount
  saveAccessToken: SaveAccessToken
}

const SignUp: React.FC<Props> = ({ validation, addAccount, saveAccessToken }: Props) => {
  const navigate = useNavigate()
  const [state, setState] = useState({
    isLoading: false,
    isFormInvalid: true,
    name: '',
    nameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    passwordConfirmation: '',
    passwordConfirmationError: '',
    mainError: ''
  })
  useEffect(() => {
    const nameError = validation.validate('name', state.name)
    const emailError = validation.validate('email', state.email)
    const passwordError = validation.validate('password', state.password)
    const passwordConfirmationError = validation.validate('passwordConfirmation', state.passwordConfirmation)

    setState({
      ...state,
      nameError,
      emailError,
      passwordError,
      passwordConfirmationError,
      isFormInvalid: !!nameError || !!emailError || !!passwordError || !!passwordConfirmationError
    })
  }, [state.name, state.email, state.password, state.passwordConfirmation])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.isFormInvalid) {
        return
      }
      setState({ ...state, isLoading: true })
      const account = await addAccount.add({
        name: state.name,
        email: state.email,
        password: state.password,
        passwordConfirmation: state.passwordConfirmation
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
      <div className={Styles.signup}>
        <LoginHeader />
        <Context.Provider value={ { state, setState } }>
          <form data-testid='form' className={Styles.form} onSubmit={handleSubmit}>
            <h2>Criar Conta</h2>
            <Input type='text' name='name' placeholder='Digite seu nome' />
            <Input type='email' name='email' placeholder='Digite seu e-mail' />
            <Input type='password' name='password' placeholder='Digite sua senha' />
            <Input type='password' name='passwordConfirmation' placeholder='Repita sua senha' />
            <SubmitButton text='Cadastrar' />
            <Link data-testid='login' to='/login' className={Styles.link}>Voltar para Login</Link>
            <FormStatus />
          </form>
        </Context.Provider>
        <Footer />
      </div>
    </>
  )
}

export default SignUp
