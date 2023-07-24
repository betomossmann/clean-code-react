import { setCurrentAccountAdapter } from '@/main/adapters'
import { mockAccountModel } from '@/tests/domain/mocks'
import { LocalStorageAdapter } from '@/infra/cache'

jest.mock('@/infra/cache')

describe('CurrentAccountAdapter', () => {
  it('Should call LocalStorageAdapter.set with correct values', () => {
    const account = mockAccountModel()
    const setSpy = jest.spyOn(LocalStorageAdapter.prototype, 'set')
    setCurrentAccountAdapter(account)
    expect(setSpy).toHaveBeenCalledWith('account', account)
  })
})
