import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import User from './components/User/User';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import ChefRecipes from './components/ChefRecipes/ChefRecipes';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/user',
        element: <User></User>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Registration></Registration>
      },
      {
        path: '/recipes',
        element: <ChefRecipes></ChefRecipes>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
