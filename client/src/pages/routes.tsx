import { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// pages
const Home = lazy(() => import('./home'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])

export default function Routes() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
