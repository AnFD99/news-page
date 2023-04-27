import { useQuery } from '@tanstack/react-query'
import { CommentService } from '../services/comment.service'

export const useNestedComment = (ids: number[]) => {
   const { data, refetch } = useQuery(
      ['nested comment', ids],
      () => CommentService.getAllComments(ids),
      {
         enabled: false,
      },
   )

   return { data, refetch }
}


