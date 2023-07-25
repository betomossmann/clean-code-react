import Styles from './item-styles.scss'
import { Calendar, Icon, IconName } from '@/presentation/components'
import { type SurveyModel } from '@/domain/models'

import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  survey: SurveyModel
}

const SurveyItem: React.FC<Props> = ({ survey }: Props) => {
  const iconName = survey.didAnswer ? IconName.thumbUp : IconName.thumbDown
  return (
    <li className={Styles.surveyItemWrap}>
      <div className={Styles.surveyContent}>
        <Icon className={Styles.iconWrap} iconName={iconName} />
        <Calendar date={survey.date} className={Styles.calendarWrap} />
        <p data-testid="question">{survey.question}</p>
      </div>
      <footer><Link data-testid="link" to={`/surveys/${survey.id}`}>Ver Resultado</Link></footer>
    </li>

  )
}

export default SurveyItem
