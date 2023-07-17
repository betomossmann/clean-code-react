import { HttpStatusCode, type HttpPostClient } from '@/data/protocols/http'
import { type AddAccountParams, type AddAccount } from '@/domain/usecases'
import { type AccountModel } from '@/domain/models'
import { EmailInUseError, UnexpectedError } from '@/domain/error'

export class RemoteAddAccount implements AddAccount {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AddAccountParams, AccountModel>
  ) {}

  async add (params: AddAccountParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return null
      case HttpStatusCode.forbidden: throw new EmailInUseError()
      default: throw new UnexpectedError()
    }
  }
}
