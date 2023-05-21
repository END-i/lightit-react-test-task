import { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from 'components/layout'
import NotFound from './notFound'
// pages
const Home = lazy(() => import('./home'))
const Details = lazy(() => import('./details'))

const routers = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/product/:id',
        element: <Details />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export default function Routes() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <RouterProvider router={routers} />
    </Suspense>
  )
}
