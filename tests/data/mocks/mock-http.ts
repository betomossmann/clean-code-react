import { type HttpPostParams, type HttpPostClient, type HttpResponse, HttpStatusCode } from '@/data/protocols/http'

import { faker } from '@faker-js/faker'

export const mockPostRequest = (): HttpPostParams => ({
  url: faker.internet.url(),
  body: faker.helpers.objectValue({ new: 'any_value' })
})

export class HttpPostClientSpy<R> implements HttpPostClient<R> {
  url?: string
  body?: any
  response?: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostParams): Promise<HttpResponse<R>> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
