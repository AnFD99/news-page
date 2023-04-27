import { createBrowserRouter } from 'react-router-dom'
import Loader from '../components/ui/Loader/Loader'
import Layout from '../components/pages/Layout/Layout'
import News from '../components/pages/News/News'
import Home from '../components/pages/Home/Home'
import NotFound from '../components/pages/NotFound/NotFound'
import NewsStory from '../components/pages/NewsStory/NewsStory'

export const router = createBrowserRouter([
   {
      path: '/',
      Component: Layout,
      loader: Loader,
      children: [
         {
            index: true,
            Component: Home,
         },
         {
            path: 'news/:id',
            Component: NewsStory,
         },
         {
            path: 'news',
            Component: News,
         },
         {
            path: '*',
            Component: NotFound,
         },
      ],
   },
])

