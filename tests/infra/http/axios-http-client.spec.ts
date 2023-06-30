import { type HttpPostParams } from '@/data/protocols/http'
import { AxiosHttpClient } from '@/infra/http/axios-http-client'

import { faker } from '@faker-js/faker'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostRquest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.helpers.objectValue({ myProperty: 'myValue' })
})

describe('AxiosHttpClient', () => {
  it('Should call axios with correct values', async () => {
    const request = mockPostRquest()
    const sut = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })
})
