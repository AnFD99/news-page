import { FC } from 'react'
import { IComment } from '../../../../types/comment.interface'
import styles from './Comment.module.css'
import { formatDateWithTime } from '../../../../utils/formatDate'
import { useNestedComment } from '../../../../hooks/useNestedComment'
import { BiChevronDown } from 'react-icons/bi'
import Line from '../../../ui/Line/Line'

const CommentItem: FC<{ item: IComment }> = ({ item }) => {
   const { data, refetch } = useNestedComment(item.kids || [])

   return (
      <div className={styles.comment__container}>
         <div
            className={`${styles.open_next} ${
               !item.kids || item.kids.length === 0 ? styles.disabled : ''
            }`}
            onClick={() => refetch()}
         >
            <div className={styles.button}>
               <BiChevronDown
                  className={`${styles.icon} ${
                     !item.kids || item.kids.length === 0 ? styles.disabled : ''
                  }`}
               />
               <span>{item.kids ? `+${item.kids?.length}` : ''}</span>
            </div>

            <div className={styles.comment__info}>
               <div className={styles.name}>{item.by}</div>
               <div
                  dangerouslySetInnerHTML={{ __html: item.text }}
                  className={styles.text}
               ></div>

               <div className={styles.date}>
                  {formatDateWithTime(item.time || 0)}
               </div>
            </div>
         </div>
         {item?.kids?.length > 0 &&
            data?.map((item) => (
               <div className={styles.nested_comment} key={item.id}>
                  <Line />
                  <CommentItem item={item} />
               </div>
            ))}
      </div>
   )
}

export default CommentItem

