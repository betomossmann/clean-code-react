import { type SetStorage } from '@/data/protocols/cache'

export class SetStorageSpy implements SetStorage {
  key: string
  value: any

  async set (key: string, value: string): Promise<void> {
    this.key = key
    this.value = value
  }
}
