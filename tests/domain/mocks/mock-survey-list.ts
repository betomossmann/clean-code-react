import { type LoadSurveyList } from '@/domain/usecases'
import { type SurveyModel } from '@/domain/models'

import { faker } from '@faker-js/faker'

export const mockSurveyModel = (): SurveyModel => ({
  id: faker.string.uuid(),
  question: faker.lorem.words(10),
  answers: [{
    answer: faker.lorem.words(4),
    image: faker.internet.url()
  }, {
    answer: faker.lorem.words(5)
  }],
  didAnswer: faker.datatype.boolean(),
  date: faker.date.recent()
})

export const mockSurveyListModel = (): SurveyModel[] => ([
  mockSurveyModel(),
  mockSurveyModel(),
  mockSurveyModel()
])

export class LoadSurveyListSpy implements LoadSurveyList {
  callsCount = 0
  surveys = mockSurveyListModel()

  async loadAll (): Promise<SurveyModel[]> {
    this.callsCount++
    return this.surveys
  }
}
