import { type HttpPostParams, type HttpPostClient } from '@/data/protocols/http'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object

  async post (params: HttpPostParams): Promise<void> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve()
  }
}
