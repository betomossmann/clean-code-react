import { HttpGetClientSpy } from '@/tests/data/mocks'
import { RemoteLoadSurveyList } from '@/data/usecases/load-survey-list'

import { faker } from '@faker-js/faker'

describe('LoadSurveyList', () => {
  it('Should call HttpClient with correct URL', async () => {
    const url = faker.internet.url()
    const httpGetClientSpy = new HttpGetClientSpy()
    const sut = new RemoteLoadSurveyList(url, httpGetClientSpy)
    await sut.loadAll()
    expect(httpGetClientSpy.url).toBe(url)
  })
})
