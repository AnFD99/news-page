import { FC, PropsWithChildren } from 'react'

import { IButton } from './Button.interface'
import styles from './Button.module.css'

const Button: FC<PropsWithChildren<IButton>> = ({
   children,
   ...props
}) => {
   return (
      <button className={styles.button} {...props}>
         {children}
      </button>
   )
}

export default Button

