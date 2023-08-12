import Styles from './footer-styles.scss'

import React, { type FC, memo } from 'react'

const Footer: FC = () => {
  return <footer className={Styles.footer} />
}

export default memo(Footer)
