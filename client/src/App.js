import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// **Import All Components**
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';

// roots Routes:
const router = createBrowserRouter([
  {
    path:'/',
    // element: <div> Root Route </div>
    element: <Username/>
  },
  {
    path:'/register',
    // element: <div> Register Route </div>
    element: <Register/>
  },
  {
    path:'/password',
    element: <Password/>
  },
  {
    path:'/profile',
    element: <Profile/>
  },
  {
    path:'/recovery',
    element: <Recovery/>
  },
  {
    path:'/*',
    element: <PageNotFound/>
  },
  {
    path:'/reset',
    element: <Reset/>
  }
])

export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
