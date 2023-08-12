import { mockAccountModel } from '@/tests/domain/mocks'
import { Header, currentAccountState } from '@/presentation/components'
import { type AccountModel } from '@/domain/models'

import React from 'react'
import { Router } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { fireEvent, render, screen } from '@testing-library/react'
import { createMemoryHistory, type MemoryHistory } from 'history'

type SutTypes = {
  history: MemoryHistory
  setCurrentAccountMock: (account: AccountModel) => void
}

const makeSut = (account = mockAccountModel()): SutTypes => {
  const history = createMemoryHistory({ initialEntries: ['/'] })
  const setCurrentAccountMock = jest.fn()
  const mockedState = { setCurrentAccount: setCurrentAccountMock, getCurrentAccount: () => account }
  render(
    <RecoilRoot
      initializeState={({ set }) => {
        set(currentAccountState, mockedState)
      }}
    >
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    </RecoilRoot>
  )
  return { history, setCurrentAccountMock }
}

describe('Header Component', () => {
  it('Should call setCurrentAccount with null', () => {
    const { history, setCurrentAccountMock } = makeSut()
    fireEvent.click(screen.getByTestId('logout'))
    expect(setCurrentAccountMock).toHaveBeenCalledWith(undefined)
    expect(history.location.pathname).toBe('/login')
  })

  it('Should render username correctly', () => {
    const account = mockAccountModel()
    makeSut(account)
    expect(screen.getByTestId('username')).toHaveTextContent(account.name)
  })
})
