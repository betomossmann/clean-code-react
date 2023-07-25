import { type GetStorage } from '../protocols/cache'
import { faker } from '@faker-js/faker'

export class GetStorageSpy implements GetStorage {
  key: string
  value: any = faker.helpers.objectKey({ key: 'account' })

  get (key: string): any {
    this.key = key
    return this.value
  }
}
