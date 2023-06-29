import { RemoteAuthentication } from '@/data/usecases/authentication'
import { HttpPostClientSpy } from '@/tests/data/usecases/mocks'

describe('RemoteAuthentication', () => {
  it('Should call HttpPostClient with correct URL', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
