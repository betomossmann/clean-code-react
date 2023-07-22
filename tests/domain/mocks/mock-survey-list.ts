import { type SurveyModel } from '@/domain/models'

import { faker } from '@faker-js/faker'

export const mockSurveyListModel = (): SurveyModel[] => ([{
  id: faker.string.uuid(),
  question: faker.lorem.words(10),
  answers: [{
    image: faker.internet.url(),
    answer: faker.lorem.words(4)
  }, {
    answer: faker.lorem.words(5)
  }],
  didAnswer: faker.datatype.boolean(),
  date: faker.date.recent()
}])
