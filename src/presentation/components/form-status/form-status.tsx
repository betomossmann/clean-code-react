import React from 'react'
import Styles from './form-status-styles.scss'
import { Spinner } from '@/presentation/components/spinner'

const FormStatus: React.FC = () => {
  return (
    <div className={Styles.errorWrap}>
      <Spinner className={Styles.spinnerWrap} />
      <span className={Styles.error}>Erro</span>
    </div>
  )
}

export default FormStatus
