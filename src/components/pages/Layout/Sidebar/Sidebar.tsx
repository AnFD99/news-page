import { FC, useState } from 'react'
import styles from './Sidebar.module.css'
import Menu from './Menu/Menu'
import { NavLink } from 'react-router-dom'
import Button from '../../../ui/Button/Button'
import Line from '../../../ui/Line/Line'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Sidebar: FC = () => {
   const [isOpen, setIsOpen] = useState(false)

   return (
      <>
         {isOpen ? (
            <AiOutlineClose
               className={styles.icon}
               onClick={() => setIsOpen(!isOpen)}
            />
         ) : (
            <AiOutlineMenu
               className={styles.icon}
               onClick={() => setIsOpen(!isOpen)}
            />
         )}
         <div className={isOpen ? styles.sidebar__container : styles.hidden}>
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
      </>
   )
}

export default Sidebar

