import Styles from './signup-styles.scss'
import { Footer, FormStatus, Input, LoginHeader } from '@/presentation/components'
import { Context } from '@/presentation/contexts/form'

import React from 'react'
import { Link } from 'react-router-dom'

const SignUp: React.FC = () => {
  return (
    <>
      <div className={Styles.signup}>
        <LoginHeader />
        <Context.Provider value={{ state: {} }}>
          <form className={Styles.form}>
            <h2>Criar Conta</h2>
            <Input type='text' name='name' placeholder='Digite seu nome' />
            <Input type='email' name='email' placeholder='Digite seu e-mail' />
            <Input type='password' name='password' placeholder='Digite sua senha' />
            <Input type='password' name='passwordConfirmation' placeholder='Repita sua senha' />
            <button className={Styles.submit} type="submit">Criar</button>
            <Link to='/signup' className={Styles.link}>Voltar para Login</Link>
            <FormStatus />
          </form>
        </Context.Provider>
        <Footer />
      </div>
    </>
  )
}

export default SignUp
