import { FC } from 'react'
import styles from './News.module.css'
import NewsItem from './NewsItem'
import Line from '../../ui/Line/Line'
import { useNews } from '../../../hooks/useNews'
import Loader from '../../ui/Loader/Loader'
import RefreshButton from '../../ui/Button/RefreshButton'

const News: FC = () => {
   const { data, isLoading, refetch, isRefetching, error } = useNews()

   return (
      <section className={styles.news__container}>
         <h2 className={styles.title}>News</h2>
         <Line />
         {isLoading ? (
            <Loader />
         ) : !data || error ? (
            <h3 className={styles.not_found}>News not found</h3>
         ) : (
            <ul className={styles.news__list}>
               {data?.map((item) => (
                  <NewsItem item={item} key={item.id} />
               ))}
            </ul>
         )}
         <RefreshButton
            onClick={() => refetch()}
            disabled={isRefetching || isLoading}
         >
            {isRefetching ? 'Loading...' : 'Refresh'}
         </RefreshButton>
      </section>
   )
}

export default News

