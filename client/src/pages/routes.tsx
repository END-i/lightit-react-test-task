import { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoadingScreen from 'components/loadingScreen'
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
    <Suspense fallback={<LoadingScreen />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
