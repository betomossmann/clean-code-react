import { type GetStorage } from '@/data/protocols/cache'
import { type HttpGetClient, type HttpGetParams, type HttpResponse } from '@/data/protocols/http'
import { type HttpGetClientSpy } from '@/tests/data/mocks'

export class AuthorizeHttpClientDecorator implements HttpGetClient {
  constructor (
    private readonly getStorage: GetStorage,
    private readonly httpGetClientSpy: HttpGetClientSpy
  ) {}

  async get (params: HttpGetParams): Promise<HttpResponse> {
    const account = this.getStorage.get('account')
    if (account?.accessToken) {
      Object.assign(params, {
        headers: Object.assign(params.headers || {}, {
          'x-access-token': account.accessToken
        })
      })
    }
    await this.httpGetClientSpy.get(params)
    return null
  }
}
