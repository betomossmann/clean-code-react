import { type HttpPostParams } from '@/data/protocols/http'

import { faker } from '@faker-js/faker'

export const mockPostRquest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.helpers.objectValue({ new: 'any_value' })
})
