import { instanceAPI } from '../api/api'
import { INews } from '../types/news.interface'

export const NewsService = {
   async getNewsById(id: number | string) {
      const response = await instanceAPI.get<INews>(`/item/${id}.json`)

      return response.data
   },

   async getAllNews() {
      const response = await instanceAPI.get<number[]>('/newstories.json')

      const promises = response.data
         .slice(0, 100)
         .map((id) => this.getNewsById(id))

      const result = await Promise.all(promises)

      return result
   },
}




