import { HttpGetClientSpy } from '@/tests/data/mocks'
import { RemoteLoadSurveyList } from '@/data/usecases/load-survey-list'

import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: RemoteLoadSurveyList
  httpGetClientSpy: HttpGetClientSpy
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy()
  const sut = new RemoteLoadSurveyList(url, httpGetClientSpy)
  return { sut, httpGetClientSpy }
}

describe('LoadSurveyList', () => {
  it('Should call HttpClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpGetClientSpy } = makeSut(url)
    await sut.loadAll()
    expect(httpGetClientSpy.url).toBe(url)
  })
})
