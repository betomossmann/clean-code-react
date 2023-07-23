import { SurveyList } from '@/presentation/pages'
import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

type Factory = {
  makeLogin: React.FC
  makeSignUp: React.FC
}

const Router: React.FC<Factory> = (factory: Factory) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={factory.makeLogin} />
        <Route path="/signup" Component={factory.makeSignUp} />
        <Route path="/" Component={SurveyList} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
