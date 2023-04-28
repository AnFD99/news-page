import { FC } from 'react'
import { useComment } from '../../../../hooks/useComment'
import CommentItem from './CommentItem'
import styles from './Comment.module.css'
import Loader from '../../../ui/Loader/Loader'

const Comment: FC<{ comments: number[] }> = ({ comments }) => {
   const { data, isLoading, error } = useComment(comments)

   return (
      <section className={styles.comments__container}>
         {isLoading ? (
            <Loader />
         ) : data?.length === 0 || !data || error ? (
            <h3 className={styles.not_found}>Comment not found</h3>
         ) : (
            <>
               <h3 className={styles.title}>Comment</h3>
               <ul>
                  {data?.map((comment) => (
                     <li key={comment.id}>
                        <CommentItem item={comment} />
                     </li>
                  ))}
               </ul>
            </>
         )}
      </section>
   )
}

export default Comment

