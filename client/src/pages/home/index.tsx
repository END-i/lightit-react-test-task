import useAxios from 'hooks/useAxios'
import type { Products } from 'types'

export default function Home() {
  const { data = [], loading } = useAxios<Products>({ apiName: 'getProducts' })
  console.log('[GET DATA] :>>', { data, loading })
  return <div>Home</div>
}
