import { instanceAPI } from '../api/api'
import { IComment } from '../types/comment.interface'

export const CommentService = {
   async getCommentById(id: number | string) {
      const response = await instanceAPI.get<IComment>(`/item/${id}.json`)

      return response.data
   },

   async getAllComments(ids: number[]) {
      const promises = ids.map((id) => this.getCommentById(id))

      const result = await Promise.all(promises)

      return result
   },
}



