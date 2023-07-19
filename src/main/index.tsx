import '@/presentation/styles/global.scss'
import { Router } from '@/main/routes'
import { makeLogin } from './factories/pages/login/login-factory'
import { makeSignUp } from './factories/pages/signup/signup-factory'

import * as React from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))
root.render(<Router makeLogin={makeLogin} makeSignUp={makeSignUp} />)
