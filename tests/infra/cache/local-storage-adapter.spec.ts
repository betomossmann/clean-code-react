import { type AccountModel } from '@/domain/models'
import { LocalStorageAdapter } from '@/infra/cache'

import 'jest-localstorage-mock'
import { faker } from '@faker-js/faker'

const makeSut = (): LocalStorageAdapter => new LocalStorageAdapter()

describe('LocalStorageAdapter', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('Should call localStorage.setItem with correct values', () => {
    const sut = makeSut()
    const key = faker.database.column()
    const value = faker.helpers.objectEntry<AccountModel>({
      accessToken: '',
      name: ''
    })
    sut.set(key, value)
    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value))
  })

  it('Should call localStorage.removeItem if value is null', async () => {
    const sut = makeSut()
    const key = faker.database.column()
    sut.set(key, undefined)
    expect(localStorage.removeItem).toHaveBeenCalledWith(key)
  })
})
