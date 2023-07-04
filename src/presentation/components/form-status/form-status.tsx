import Styles from './form-status-styles.scss'
import { Spinner } from '@/presentation/components'
import { Context } from '@/presentation/contexts/form'

import React, { useContext } from 'react'

const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(Context)

  return (
    <div data-testid='error-wrap' className={Styles.errorWrap}>
      { state.isLoading && <Spinner className={Styles.spinnerWrap} /> }
      { errorState.main && <span className={Styles.error}>{errorState.main}</span> }
    </div>
  )
}

export default FormStatus
