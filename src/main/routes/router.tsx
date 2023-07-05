import { Login } from '@/presentation/pages'

import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login validation={undefined} authentication={undefined} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
