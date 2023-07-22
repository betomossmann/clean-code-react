import { HttpStatusCode, type HttpGetClient } from '@/data/protocols/http'
import { AccessDeniedError, UnexpectedError } from '@/domain/error'

export class RemoteLoadSurveyList {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async loadAll (): Promise<void> {
    const httpResponse = await this.httpGetClient.get({ url: this.url })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: break
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      default: throw new UnexpectedError()
    }
  }
}
