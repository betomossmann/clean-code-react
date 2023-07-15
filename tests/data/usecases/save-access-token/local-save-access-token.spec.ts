import { SetStorageMock } from '@/tests/data/mocks'
import { LocalSaveAccessToken } from '@/data/usecases/save-access-token'

import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: LocalSaveAccessToken
  setStorageMock: SetStorageMock
}

const makeSut = (): SutTypes => {
  const setStorageMock = new SetStorageMock()
  const sut = new LocalSaveAccessToken(setStorageMock)
  return {
    sut,
    setStorageMock
  }
}

describe('LocalSaveAccessToken', () => {
  it('Should call SetStorage with correct value', async () => {
    const { sut, setStorageMock } = makeSut()
    const accessToken = faker.string.uuid()
    await sut.save(accessToken)
    expect(setStorageMock.key).toBe('accessToken')
    expect(setStorageMock.value).toBe(accessToken)
  })
})
