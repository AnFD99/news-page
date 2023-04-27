import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import styles from './Home.module.css'

const Home: FC = () => {
   return (
      <div className={styles.home__container}>
         <h1 className={styles.title}>Welcome to Hacker News</h1>
         <NavLink to='/news' className={styles.link}>
            Read news <AiOutlineArrowRight className={styles.icon} />
         </NavLink>
      </div>
   )
}

export default Home



