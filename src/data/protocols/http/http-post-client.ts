import { type HttpResponse } from '@/data/protocols/http'

export type HttpPostParams = {
  url: string
  body?: any
}

// Generics typescript "<R>"
export interface HttpPostClient<R = any> {
  post: (params: HttpPostParams) => Promise<HttpResponse<R>>
}
