import Styles from './input-styles.scss'
import { Context } from '@/presentation/contexts/form'

import React, { useContext, useRef } from 'react'
import PropTypes from 'prop-types'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const inputRef = useRef<HTMLInputElement>()
  const error = state[`${props.name}Error`]
  const getStatus = (): string => {
    return error ? '🔴' : '🟢'
  }
  const getTitle = (): string => {
    return error || 'Tudo certo!'
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...props} ref={inputRef} placeholder=' ' data-testid={props.name} onFocus={e => { e.target.readOnly = false }} onChange={e => { setState({ ...state, [e.target.name]: e.target.value }) }} />
      <label onClick={() => { inputRef.current.focus() }}>{props.placeholder}</label>
      <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status}>{getStatus()}</span>
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

export default Input
