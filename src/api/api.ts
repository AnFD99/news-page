import axios from 'axios'

const BASE_URL = `https://hacker-news.firebaseio.com/v0`

export const instanceAPI = axios.create({
   baseURL: BASE_URL,
   headers: {
      'Content-Type': 'application/json',
   },
})

