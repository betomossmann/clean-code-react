import { SurveyList } from '@/presentation/pages'
import { makeRemoteLoadSurveyList } from '@/main/factories/usecases'

import React from 'react'

export const MakeSurveyList: React.FC = () => {
  return (
    <SurveyList loadSurveyList={makeRemoteLoadSurveyList()} />
  )
}
