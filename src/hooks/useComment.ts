import { useQuery } from '@tanstack/react-query'
import { CommentService } from '../services/comment.service'

export const useComment = (ids: number[]) => {
   const { data, isLoading, error } = useQuery(
      ['comment', ids],
      () => CommentService.getAllComments(ids),
      {
         enabled: !!ids,
      },
   )

   return { data, isLoading, error }
}


