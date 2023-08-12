import { MakeLogin, MakeSignUp, MakeSurveyList } from '@/main/factories/pages'
import { getCurrentAccountAdapter, setCurrentAccountAdapter } from '@/main/adapters/current-account-adapter'
import { PrivateRoute, currentAccountState } from '@/presentation/components'

import React from 'react'
import { RecoilRoot } from 'recoil'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router: React.FC = () => {
  const state = {
    setCurrentAccount: setCurrentAccountAdapter,
    getCurrentAccount: getCurrentAccountAdapter
  }
  return (
    <RecoilRoot initializeState={({ set }) => { set(currentAccountState, state) }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<MakeSurveyList />} />
          </Route>
          <Route path="/signup" element={<MakeSignUp />} />
          <Route path="/login" element={<MakeLogin />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default Router
