import useAxios from 'hooks/useAxios'
import type { Products } from 'types'
import Loader from 'components/loading'

export default function Home() {
  const { data = [], loading } = useAxios<Products>({ apiName: 'getProducts' })
  console.log('[GET DATA] :>>', { data, loading })
  return (
    <Loader isLoading={loading}>
      {data.map(({ id, title }) => {
        return <div key={id}>{title}</div>
      })}
    </Loader>
  )
}
