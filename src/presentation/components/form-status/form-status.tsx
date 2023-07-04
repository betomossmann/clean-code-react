import Styles from './form-status-styles.scss'
import { Spinner } from '@/presentation/components'
import { Context } from '@/presentation/contexts/form'

import React, { useContext } from 'react'

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context)

  return (
    <div data-testid='error-wrap' className={Styles.errorWrap}>
      { isLoading && <Spinner className={Styles.spinnerWrap} /> }
      { errorMessage && <span className={Styles.error}>{errorMessage}</span> }
    </div>
  )
}

export default FormStatus
