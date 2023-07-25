import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { RemoteAddAccount } from '@/data/usecases'
import { type AddAccount } from '@/domain/usecases'

export const makeRemoteAddAccount = (): AddAccount => {
  return new RemoteAddAccount(makeApiUrl('/signup'), makeAxiosHttpClient())
}
