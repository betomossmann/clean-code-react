import { mockAxios, mockHttpResponse } from '@/tests/infra/mocks'
import { mockGetRequest, mockPostRequest } from '@/tests/data/mocks'
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
  return { sut, mockedAxios }
}

describe('AxiosHttpClient', () => {
  describe('Post', () => {
    it('Should call axios.post with correct values', async () => {
      const request = mockPostRequest()
      const { sut, mockedAxios } = makeSut()
      await sut.post(request)
      expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
    })

    it('Should return the correct response on axios.post', async () => {
      const { sut, mockedAxios } = makeSut()
      // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
      const httpResponse = await sut.post(mockPostRequest())
      const axiosResponse = await mockedAxios.post.mock.results[0].value
      expect(httpResponse).toEqual({
        statusCode: axiosResponse.status,
        body: axiosResponse.data
      })
    })

    it('Should return correct error on axios.post', async () => {
      const { sut, mockedAxios } = makeSut()
      mockedAxios.post.mockRejectedValueOnce({
        response: mockHttpResponse()
      })
      const promise = sut.post(mockPostRequest())
      expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
    })
  })

  describe('Get', () => {
    it('Should call axios.get with correct values', async () => {
      const request = mockGetRequest()
      const { sut, mockedAxios } = makeSut()
      await sut.get(request)
      expect(mockedAxios.get).toHaveBeenCalledWith(request.url)
    })

    it('Should return correct response on axios.get', async () => {
      const { sut, mockedAxios } = makeSut()
      // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
      const httpResponse = await sut.get(mockGetRequest())
      const axiosResponse = await mockedAxios.get.mock.results[0].value
      expect(httpResponse).toEqual({
        statusCode: axiosResponse.status,
        body: axiosResponse.data
      })
    })

    it('Should return correct error on axios.get', () => {
      const { sut, mockedAxios } = makeSut()
      mockedAxios.get.mockRejectedValueOnce({
        response: mockHttpResponse()
      })
      const promise = sut.get(mockGetRequest())
      expect(promise).toEqual(mockedAxios.get.mock.results[0].value)
    })
  })
})
