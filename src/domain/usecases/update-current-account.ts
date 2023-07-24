import { type AccountModel } from '@/domain/models'

export interface UpdateCurrentAccount {
  save: (account: AccountModel) => Promise<void>
}
