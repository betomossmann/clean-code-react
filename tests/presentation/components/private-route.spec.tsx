import { PrivateRoute } from '@/presentation/components'
import { ApiContext } from '@/presentation/contexts'
import { mockAccountModel } from '@/tests/domain/mocks'

import React from 'react'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { type MemoryHistory, createMemoryHistory } from 'history'

type SutTypes = {
  history: MemoryHistory
}

const makeSut = (account = mockAccountModel()): SutTypes => {
  const history = createMemoryHistory({ initialEntries: ['/'] })
  render(
    <ApiContext.Provider value={{ getCurrentAccount: () => account }}>
      <Router location={history.location} navigator={history}>
        <PrivateRoute />
      </Router>
    </ApiContext.Provider>
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
