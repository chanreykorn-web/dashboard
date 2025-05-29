import React from 'react';
import Layout from './Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Profiles } from './pages/Profiles';
import { Login } from './auth/Login';
import { Create } from './pages/profile/Create';
import { Gallery } from './pages/Gallery';

export const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: ([
        {
          index: true,
          element: <Dashboard />
        },
        {
          path: '/profile/view',
          element: <Profiles />
        },
        {
          path: 'profile/create',
          element: <Create />
        },
        {
          path: 'gallary/view',
          element: <Gallery />
        },

      ])

    },
    {
      path: 'login',
      element: <Login />
    },

  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;