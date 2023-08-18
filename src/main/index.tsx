import '@/presentation/styles/global.scss'
import { Router } from '@/main/routes'

import React from 'react'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('main')
const root = createRoot(container!)
root.render(<Router />)
