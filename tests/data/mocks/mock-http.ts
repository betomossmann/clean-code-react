import { type HttpPostParams, type HttpPostClient, type HttpResponse, HttpStatusCode } from '@/data/protocols/http'

import { faker } from '@faker-js/faker'

export const mockPostRquest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.helpers.objectValue({ new: 'any_value' })
})

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string
  body?: T
  response?: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
