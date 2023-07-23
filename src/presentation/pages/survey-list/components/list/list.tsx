import Styles from './list-styles.scss'
import { SurveyItem, SurveyItemEmpty } from '@/presentation/pages/survey-list/components'
import { type SurveyModel } from '@/domain/models'
import React from 'react'

type Props = {
  surveys: SurveyModel[]
}

const List: React.FC<Props> = ({ surveys }: Props) => {
  return (
    <ul className={Styles.listWrap} data-testid='survey-list'>
      {surveys.length
        ? surveys.map((survey: SurveyModel) => <SurveyItem key={survey.id} survey={survey} />)
        : <SurveyItemEmpty />
      }
    </ul>
  )
}

export default List
