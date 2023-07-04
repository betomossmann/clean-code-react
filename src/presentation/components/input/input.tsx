import Styles from './input-styles.scss'
import { Context } from '@/presentation/contexts/form'

import React, { useContext } from 'react'
import PropTypes from 'prop-types'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { errorState } = useContext(Context)
  const error = errorState[props.name]
  const getStatus = (): string => {
    return '🔴'
  }
  const getTitle = (): string => {
    return error
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...props} />
      <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status}>{getStatus()}</span>
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired
}

export default Input
