import { AxiosHttpClient } from '@/infra/http/axios-http-client'

import { faker } from '@faker-js/faker'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('AxiosHttpClient', () => {
  it('Should call axios with correct URL', () => {
    const url = faker.internet.url()
    const sut = new AxiosHttpClient()
    sut.post({ url })
    expect(mockedAxios).toHaveBeenCalledWith(url)
  })
})
