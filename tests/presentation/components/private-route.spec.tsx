import { PrivateRoute, currentAccountState } from '@/presentation/components'
import { mockAccountModel } from '@/tests/domain/mocks'
import { MakeSurveyList } from '@/main/factories/pages'

import React from 'react'
import { render } from '@testing-library/react'
import { Route, Router, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { type MemoryHistory, createMemoryHistory } from 'history'

type SutTypes = {
  history: MemoryHistory
}

const makeSut = (account = mockAccountModel()): SutTypes => {
  const history = createMemoryHistory({ initialEntries: ['/'] })
  const setCurrentAccountMock = jest.fn()
  const mockedState = { setCurrentAccount: setCurrentAccountMock, getCurrentAccount: () => account }
  render(
    <RecoilRoot initializeState={({ set }) => { set(currentAccountState, mockedState) }}>
      <Router location={history.location} navigator={history}>
          <Routes>
            <Route path='/' element={<PrivateRoute />}>
              <Route path='/' element={<MakeSurveyList />} />
            </Route>
          </Routes>
      </Router>
    </RecoilRoot>
  )
  return { history }
}

describe('PrivateRoute', () => {
  it('Should redirect to /login if token is empty', () => {
    const { history } = makeSut(null)
    expect(history.location.pathname).toBe('/login')
  })

  it('Should render current component if token is not empty', () => {
    const { history } = makeSut()
    expect(history.location.pathname).toBe('/')
  })
})
