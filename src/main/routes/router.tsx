import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

type Props = {
  makeLogin: React.FC
}

const Router: React.FC<Props> = ({ makeLogin }: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={makeLogin} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
