import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import UserList from './UserList.jsx'
import UserDetail from './UserDetail.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserList />,
  },
  {
    path: '/users/:id',
    element: <UserDetail />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
