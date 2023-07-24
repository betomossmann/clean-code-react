import { PrivateRoute } from '@/presentation/components'
import { ApiContext } from '@/presentation/contexts'

import React from 'react'
import { render } from '@testing-library/react'
import { mockAccountModel } from '../../domain/mocks'
import { type MemoryHistory, createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

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
})
