import { type HttpResponse } from '@/data/protocols/http'

export type HttpPostParams<T> = {
  url: string
  body?: T
}

// Generics typescript "<T>"
export interface HttpPostClient<T, R> {
  post: (params: HttpPostParams<T>) => Promise<HttpResponse<R>>
}
