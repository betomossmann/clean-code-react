import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { type AddAccount } from '@/domain/usecases'
import { RemoteAddAccount } from '@/data/usecases/add-account'

export const makeRemoteAddAccount = (): AddAccount => {
  return new RemoteAddAccount(makeApiUrl('/signup'), makeAxiosHttpClient())
}
