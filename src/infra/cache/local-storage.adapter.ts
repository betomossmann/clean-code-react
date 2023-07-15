import { type SetStorage } from '@/data/protocols/cache'

export class LocalStorageAdapter implements SetStorage {
  async set (key: string, value: string): Promise<void> {
    localStorage.setItem(key, value)
  }
}
