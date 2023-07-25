import { type GetStorage } from '@/data/protocols/cache'
import { type HttpGetClient, type HttpGetParams, type HttpResponse } from '@/data/protocols/http'
import { type HttpGetClientSpy } from '../../../data/mocks'

export class AuthorizeHttpClientDecorator implements HttpGetClient {
  constructor (
    private readonly getStorage: GetStorage,
    private readonly httpGetClientSpy: HttpGetClientSpy
  ) {}

  async get (params: HttpGetParams): Promise<HttpResponse> {
    this.getStorage.get('account')
    await this.httpGetClientSpy.get(params)
    return null
  }
}
