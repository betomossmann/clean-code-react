import { makeLogin } from '@/main/factories/pages/login/login-factory'
import { makeSignUp } from '@/main/factories/pages/signup/signup-factory'
import { getCurrentAccountAdapter, setCurrentAccountAdapter } from '@/main/adapters/current-account-adapter'
import { SurveyList } from '@/presentation/pages'
import { ApiContext } from '@/presentation/contexts'

import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router: React.FC = () => {
  return (
    <ApiContext.Provider value={{
      setCurrentAccount: setCurrentAccountAdapter,
      getCurrentAccount: getCurrentAccountAdapter
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" Component={makeLogin} />
          <Route path="/signup" Component={makeSignUp} />
          <Route path="/" Component={SurveyList} />
        </Routes>
      </BrowserRouter>
    </ApiContext.Provider>
  )
}

export default Router
