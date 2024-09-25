import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

import HomePage from './pages/HomePage'
import NewSignupPage from './pages/NewSignupPage'
import LoginPage from './pages/LoginPage'
import MainLayout from './layout/MainLayout'
import MyAccountPage from './pages/MyAccountPage'
import AddPostPage from './pages/AddPostPage'
import EditPostPage from './pages/EditPostPage'
import PostPage, { postLoader } from './pages/PostPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<NewSignupPage />} />
        <Route path='/add-post' element={<AddPostPage />} />
        <Route path='/my-account' element={<MyAccountPage />} />
        <Route path='/edit/id/:id' element={<EditPostPage />} loader={postLoader} />
        <Route path='post/id/:id' element={<PostPage />} loader={postLoader}/>
        <Route path='*' element={<NotFoundPage />} />
    </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App