import { FC } from 'react'
import styles from './Menu.module.css'
import { NavLink } from 'react-router-dom'
import { IMenuItem } from './menu.interface'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
   return (
      <li>
         <NavLink
            to={item.link}
            className={({ isActive }) =>
               isActive ? `${styles.menu__link} active_link` : styles.menu__link
            }
         >
            {item.title}
         </NavLink>
      </li>
   )
}

export default MenuItem

