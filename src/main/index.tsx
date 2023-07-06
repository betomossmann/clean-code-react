import '@/presentation/styles/global.scss'
import { Router } from '@/main/routes'

import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { makeLogin } from './factories/pages/login/login-factory'

const root = createRoot(document.getElementById('root'))
root.render(<Router makeLogin={makeLogin} />)
