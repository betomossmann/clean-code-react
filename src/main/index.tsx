import '@/presentation/styles/global.scss'
import { Router } from '@/main/routes'

import * as React from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('main'))
root.render(<Router />)
