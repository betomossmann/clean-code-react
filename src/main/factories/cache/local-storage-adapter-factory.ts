import { type SetStorage } from '@/data/protocols/cache'
import { LocalStorageAdapter } from '@/infra/cache'

export const makeLocalStorageAdapter = (): SetStorage => {
  return new LocalStorageAdapter()
}
