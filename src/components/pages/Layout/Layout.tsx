import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'

import styles from './Layout.module.css'

const Layout: FC = () => {
   return (
      <div className={styles.main__container}>
         <Sidebar />
         <main className={styles.main__content}>
            <Outlet />
         </main>
      </div>
   )
}

export default Layout

