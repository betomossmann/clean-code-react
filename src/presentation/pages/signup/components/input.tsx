import { signUpState } from './atoms'
import { InputBase } from '@/presentation/components'

import React from 'react'
import { useRecoilState } from 'recoil'

type Props = {
  type: string
  name: string
  placeholder: string
}

const Input: React.FC<Props> = ({ type, name, placeholder }: Props) => {
  const [state, setState] = useRecoilState(signUpState)
  return <InputBase type={type} name={name} placeholder={placeholder} state={state} setState={setState} />
}

export default Input
