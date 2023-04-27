import { FC } from 'react'
import styles from './Menu.module.css'
import MenuItem from './MenuItem'
import { menu } from './menu.data'

const Menu: FC = () => {
   return (
      <nav className={styles.menu__container}>
         <ul className={styles.menu}>
            {menu.map((item) => (
               <MenuItem item={item} key={item.link} />
            ))}
         </ul>
      </nav>
   )
}

export default Menu

