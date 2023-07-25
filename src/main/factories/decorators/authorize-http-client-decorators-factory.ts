import { AuthorizeHttpClientDecorator } from '@/main/decorators/authorize-http-client-decorators'
import { makeLocalStorageAdapter } from '@/main/factories/cache'
import { makeAxiosHttpClient } from '@/main/factories/http'
import { type HttpGetClient } from '@/data/protocols/http'

export const makeAuthorizeHttpClientDecorator = (): HttpGetClient => {
  return new AuthorizeHttpClientDecorator(makeLocalStorageAdapter(), makeAxiosHttpClient())
}
