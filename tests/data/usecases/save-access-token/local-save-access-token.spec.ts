import { SetStorageSpy } from '@/tests/data/mocks'
import { LocalSaveAccessToken } from '@/data/usecases/save-access-token'

import { faker } from '@faker-js/faker'

describe('LocalSaveAccessToken', () => {
  it('Should call SetStorage with correct value', async () => {
    const setStorageSpy = new SetStorageSpy()
    const sut = new LocalSaveAccessToken(setStorageSpy)
    const accessToken = faker.string.uuid()
    await sut.save(accessToken)
    expect(setStorageSpy.key).toBe('accessToken')
    expect(setStorageSpy.value).toBe(accessToken)
  })
})
