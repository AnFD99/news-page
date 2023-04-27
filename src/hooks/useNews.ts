import { useQuery } from '@tanstack/react-query'
import { NewsService } from '../services/news.service'
import { INews } from '../types/news.interface'

export const useNews = () => {
   const { data, isLoading, refetch, isRefetching, error } = useQuery(
      ['news list'],
      () => NewsService.getAllNews(),
      {
         select: (data: INews[]) =>
            data.sort((a, b) => {
               return Number(b.time) - Number(a.time)
            }),
         refetchInterval: 60000,
      },
   )

   return { data, isLoading, refetch, isRefetching, error }
}


