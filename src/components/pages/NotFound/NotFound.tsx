import { FC } from 'react'
import styles from './NotFound.module.css'

const NotFound: FC = () => {
   return (
      <section className={styles.container}>
         <h1 className={styles.title}>404 Error Page Not Found</h1>
         <section className={styles.errorContainer}>
            <span className={styles.four}>
               <span className={styles.screenReaderText}>4</span>
            </span>
            <span className={styles.zero}>
               <span className={styles.screenReaderText}>0</span>
            </span>
            <span className={styles.four}>
               <span className={styles.screenReaderText}>4</span>
            </span>
         </section>
      </section>
   )
}

export default NotFound

