import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Navigate } from 'react-router'
import { Layout } from './components/Layout'
import { HeavyList } from './components/HeavyList'
import { LightHouseTest } from './components/LightHouseTest'

const HeavyListLazy = lazy(() => import('./components/HeavyListLazy'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div style={{ textAlign: 'center' }}>Упало :(</div>,
    children: [
      {
        index: true,
        element: <Navigate to='/main' replace />,
      },
      {
        path: '/main',
        element: <App />,
      },
      {
        path: '/second',
        element: <HeavyList />,
      },
      {
        path: '/third',
        element: (
          <Suspense
            fallback={<h1 style={{ textAlign: 'center' }}>Ленивая загрузка…</h1>}
          >
            <HeavyListLazy />
          </Suspense>
        ),
      },
      {
        path: '/lh',
        element: <LightHouseTest />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
