import { Login } from '@/presentation/pages'

import * as React from 'react'
import { render } from '@testing-library/react'

describe('Login Component', () => {
  it('Should start with initial state', () => {
    const { getByTestId } = render(<Login />)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
    const submitButton = getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
  })
})
