import { HttpStatusCode, type HttpPostClient } from '@/data/protocols/http'
import { InvalidCredentialsError, UnexpectedError } from '@/domain/error'
import { type AuthenticationParams } from '@/domain/usecases'
import { type AccountModel } from '@/domain/models'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: break
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
