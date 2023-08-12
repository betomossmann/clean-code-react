import { signUpState } from './atoms'
import { SubmitButtonBase } from '@/presentation/components'

import React from 'react'
import { useRecoilValue } from 'recoil'

type Props = {
  text: string
}

const SubmitButton: React.FC<Props> = ({ text }: Props) => {
  const state = useRecoilValue(signUpState)
  return (
    <SubmitButtonBase text={text} state={state} />
  )
}

export default SubmitButton
