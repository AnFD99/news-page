import { FC, PropsWithChildren } from 'react'

import { IButton } from './Button.interface'
import styles from './Button.module.css'

const RefreshButton: FC<PropsWithChildren<IButton>> = ({ children, ...props }) => {
   return (
      <button className={`${styles.button} ${styles.refresh_button}`} {...props}>
         {children}
      </button>
   )
}

export default RefreshButton


