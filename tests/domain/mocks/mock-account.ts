import { type AccountModel } from '@/domain/models/'

import { faker } from '@faker-js/faker'

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.string.uuid(),
  name: faker.person.fullName()
})
