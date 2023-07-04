import Styles from './spinner-styles.scss'

import React from 'react'

type Props = React.HTMLAttributes<HTMLElement> & { className?: string }

const Spinner: React.FC<Props> = (props: Props) => {
  return (
    <div {...props} data-testid='spinner' className={[Styles.spinnerWrap, props.className].join(' ')}>
      <div /><div /><div /><div />
    </div>
  )
}

export default Spinner
