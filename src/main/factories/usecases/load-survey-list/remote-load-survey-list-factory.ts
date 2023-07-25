import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { RemoteLoadSurveyList } from '@/data/usecases'
import { type LoadSurveyList } from '@/domain/usecases'

export const makeRemoteLoadSurveyList = (): LoadSurveyList => {
  return new RemoteLoadSurveyList(makeApiUrl('/surveys'), makeAxiosHttpClient())
}
