import Styles from './login-header-styles.scss'
import { Logo } from '@/presentation/components'

import React, { type FC, memo } from 'react'

const LoginHeader: FC = () => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>BDev - Enquetes para Programadores</h1>
    </header>
  )
}

export default memo(LoginHeader)
