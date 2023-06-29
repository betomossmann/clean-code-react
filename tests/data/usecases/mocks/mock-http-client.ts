import { type HttpPostParams, type HttpPostClient, type HttpResponse, HttpStatusCode } from '@/data/protocols/http'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object
  response?: HttpResponse = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostParams): Promise<HttpResponse> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
