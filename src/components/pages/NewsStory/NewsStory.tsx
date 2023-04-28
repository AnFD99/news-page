import { FC } from 'react'
import styles from './NewsStory.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import Line from '../../ui/Line/Line'
import { formatDateWithTime } from '../../../utils/formatDate'
import { useOneNews } from '../../../hooks/useOneNews'
import Loader from '../../ui/Loader/Loader'
import Comment from './Comment/Comment'
import RefreshButton from '../../ui/Button/RefreshButton'
import NotFound from '../NotFound/NotFound'
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'

const NewsStory: FC = () => {
   const navigate = useNavigate()
   const { id } = useParams()
   const { data, isLoading, refetch, isRefetching, error } = useOneNews(
      String(id),
   )

   return (
      <>
         {isLoading ? (
            <Loader />
         ) : !data || error ? (
            <NotFound />
         ) : (
            <section className={styles.story__container}>
               <div className={styles.buttons}>
                  <div onClick={() => navigate(-1)} className={styles.button}>
                     <BiChevronLeft className={styles.icon} />
                     Back
                  </div>
                  <a
                     href={data?.url}
                     target='_blank'
                     rel='noreferrer'
                     className={!data?.url ? styles.disabled : styles.button}
                  >
                     Read the original
                     <BiChevronRight className={styles.icon} />
                  </a>
               </div>
               <Line />
               <div className={styles.story__info}>
                  <div className={styles.item__rating}>
                     Rating: {data?.score || 0}
                  </div>
                  <div className={styles.item__author}>
                     by {data?.by || '-'}
                  </div>
                  <div className={styles.item__date}>
                     {formatDateWithTime(data?.time || 0)}
                  </div>
                  <div className={styles.item__comments}>
                     Comment: {data?.descendants || 0}
                  </div>
               </div>
               <h2 className={styles.story__title}>{data?.title}</h2>
               <Line />
               <RefreshButton
                  onClick={() => refetch()}
                  disabled={isRefetching || isLoading}
               >
                  {isRefetching ? 'Loading...' : 'Refresh'}
               </RefreshButton>
               <Comment comments={data?.kids || []} />
            </section>
         )}
      </>
   )
}

export default NewsStory

