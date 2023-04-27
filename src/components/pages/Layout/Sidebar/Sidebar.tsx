import { FC } from 'react'
import styles from './Sidebar.module.css'
import Menu from './Menu/Menu'
import { NavLink } from 'react-router-dom'
import Button from '../../../ui/Button/Button'
import Line from '../../../ui/Line/Line'

const Sidebar: FC = () => {
   return (
      <div className={styles.sidebar__container}>
         <div className={styles.logo}>
            <NavLink to='/'>Hacker News</NavLink>
         </div>
         <Line />
         <Menu />
         <Line />
         <NavLink to='/login'>
            <Button>Login</Button>
         </NavLink>
      </div>
   )
}

export default Sidebar



