import { mockAxios, mockHttpResponse } from '@/tests/infra/mocks'
import { mockPostRquest } from '@/tests/data/mocks'
import { AxiosHttpClient } from '@/infra/http/axios-http-client'

import type axios from 'axios'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios
  }
}

describe('AxiosHttpClient', () => {
  it('Should call axios with correct values', async () => {
    const request = mockPostRquest()
    const { sut, mockedAxios } = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  it('Should return the correct statusCode and body', async () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.post(mockPostRquest())
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })

  it('Should return the correct statusCode and body on failure', async () => {
    const { sut, mockedAxios } = makeSut()
    mockedAxios.post.mockRejectedValueOnce({
      response: mockHttpResponse()
    })
    const promise = sut.post(mockPostRquest())
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
