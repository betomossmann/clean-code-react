import { type AddAccountParams, type AddAccount } from '@/domain/usecases'
import { type AccountModel } from '@/domain/models'
import { type HttpPostClient } from '@/data/protocols/http'
import { EmailInUseError } from '@/domain/error'
import { HttpStatusCode } from 'axios'

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
      case HttpStatusCode.Forbidden: throw new EmailInUseError()
      default: return null
    }
  }
}
