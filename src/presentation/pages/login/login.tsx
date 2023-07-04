import Styles from './login-styles.scss'
import { Footer, FormStatus, Input, LoginHeader } from '@/presentation/components'

import * as React from 'react'

const Login: React.FC = () => {
  return (
    <>
      <div className={Styles.login}>
        <LoginHeader />
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type='email' name='email' placeholder='Digite seu e-mail' />
          <Input type='password' name='password' placeholder='Digite sua senha' />
          <button className={Styles.submit} type="submit">Entrar</button>
          <span className={Styles.link}>Cadastre-se</span>
          <FormStatus />
        </form>
        <Footer />
      </div>
    </>
  )
}

export default Login
