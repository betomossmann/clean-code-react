import Styles from './survey-list-styles.scss'
import { SurveyListItem, surveyListState } from './components'
import { Footer, Header, Error } from '@/presentation/components'
import { useErrorHandler } from '@/presentation/hooks'
import { type LoadSurveyList } from '@/domain/usecases'

import React, { type FC, useEffect } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'

type Props = {
  loadSurveyList: LoadSurveyList
}

const SurveyList: FC<Props> = ({ loadSurveyList }: Props) => {
  const resetSurveyListState = useResetRecoilState(surveyListState)
  const handleError = useErrorHandler((error: Error) => {
    setState((old) => ({ ...old, error: error.message }))
  })
  const [state, setState] = useRecoilState(surveyListState)
  const reload = (): void => {
    setState((old) => ({ surveys: [], error: '', reload: !old.reload }))
  }

  useEffect(() => {
    resetSurveyListState()
  }, [])
  useEffect(() => {
    loadSurveyList
      .loadAll()
      .then((surveys) => {
        setState((old) => ({ ...old, surveys }))
      })
      .catch(handleError)
  }, [state.reload])

  return (
    <div className={Styles.surveyListWrap}>
      <Header />
      <div className={Styles.contentWrap}>
        <h2>Enquetes</h2>
        {state.error ? <Error error={state.error} reload={reload} /> : <SurveyListItem surveys={state.surveys} />}
      </div>
      <Footer />
    </div>
  )
}

export default SurveyList
