import { HttpStatusCode, type HttpPostClient } from '@/data/protocols/http'
import { InvalidCredentialsError } from '@/domain/error'
import { type AuthenticationParams } from '@/domain/usecases'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url, body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
    }
  }
}
