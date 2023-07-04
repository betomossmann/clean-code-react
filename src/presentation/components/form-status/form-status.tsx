import Styles from './form-status-styles.scss'
import { Spinner } from '@/presentation/components'
import { Context } from '@/presentation/contexts/form'

import React, { useContext } from 'react'

const FormStatus: React.FC = () => {
  const { state } = useContext(Context)
  const { isLoading, mainError } = state

  return (
    <div data-testid='error-wrap' className={Styles.errorWrap}>
      { isLoading && <Spinner className={Styles.spinnerWrap} /> }
      { mainError && <span data-testid='main-error' className={Styles.error}>{mainError}</span> }
    </div>
  )
}

export default FormStatus
