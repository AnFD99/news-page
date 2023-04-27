import { FC } from 'react'
import styles from './News.module.css'
import { INews } from '../../../types/news.interface'
import { NavLink } from 'react-router-dom'
import { formatDate } from '../../../utils/formatDate'

const NewsItem: FC<{ item: INews }> = ({ item }) => {
   return (
      <li className={styles.item__container}>
         <NavLink to={`/news/${item.id}`} className={styles.link}>
            <h3 className={styles.item__title}>{item.title}</h3>

            <div className={styles.item__info}>
               <div className={styles.item__rating}>
                  Rating: {item.score || 0}
               </div>
               <div className={styles.item__author}>by {item.by || '-'}</div>
               <div className={styles.item__date}>
                  {formatDate(item.time) || 0}
               </div>
               <div className={styles.item__comments}>
                  Comment: {item.descendants || 0}
               </div>
            </div>
         </NavLink>
      </li>
   )
}

export default NewsItem

