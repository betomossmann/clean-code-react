import Styles from './input-styles.scss'

import React, { type FC, useRef } from 'react'
import PropTypes from 'prop-types'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  state: any
  setState: any
}

const Input: FC<Props> = ({ state, setState, ...props }: Props) => {
  const inputRef = useRef<HTMLInputElement>()
  const error = state[`${props.name}Error`]
  return (
    <div data-testid={`${props.name}-wrap`} className={Styles.inputWrap} data-status={error ? 'invalid' : 'valid'}>
      <input
        {...props}
        ref={inputRef}
        title={error}
        placeholder=" "
        data-testid={props.name}
        readOnly
        onFocus={e => { e.target.readOnly = false }}
        onChange={e => { setState({ ...state, [e.target.name]: e.target.value }) }}
      />
      <label data-testid={`${props.name}-label`} onClick={() => { inputRef.current.focus() }} title={error}>
        {props.placeholder}
      </label>
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

export default Input
