import { AuthorizeHttpClientDecorator } from '@/main/decorators/authorize-http-client-decorators'
import { GetStorageSpy, mockGetRequest } from '@/tests/data/mocks'

describe('AuthorizeHttpClientDecorator', () => {
  it('Should call GetStorage with correct value', async () => {
    const getStorageSpy = new GetStorageSpy()
    const sut = new AuthorizeHttpClientDecorator(getStorageSpy)
    sut.get(mockGetRequest())
    expect(getStorageSpy.key).toBe('account')
  })
})
