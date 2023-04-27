import { useQuery } from '@tanstack/react-query'
import { NewsService } from '../services/news.service'

export const useOneNews = (id: string) => {
   const { data, isLoading, refetch, isRefetching, error } = useQuery(
      ['news', id],
      () => NewsService.getNewsById(id),
      {
         enabled: !!id,
         refetchInterval: 60000,
      },
   )

   return { data, isLoading, refetch, isRefetching, error }
}

