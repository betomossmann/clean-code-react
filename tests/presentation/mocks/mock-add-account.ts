import { mockAccountModel } from '@/tests/domain/mocks'
import { type AddAccountParams, type AddAccount } from '@/domain/usecases'
import { type AccountModel } from '@/domain/models'

export class AddAccountSpy implements AddAccount {
  account = mockAccountModel()
  params: AddAccountParams
  callsCount = 0

  async add (params: AddAccountParams): Promise<AccountModel> {
    this.params = params
    this.callsCount++
    return this.account
  }
}
