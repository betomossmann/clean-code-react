import { type HttpResponse } from '@/data/protocols/http'

export type HttpPostParams = {
  url: string
  body?: object
}

export interface HttpPostClient {
  post: (params: HttpPostParams) => Promise<HttpResponse>
}
