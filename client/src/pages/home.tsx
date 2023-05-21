import useAxios from 'hooks/useAxios'
import type { Products } from 'types'
import Loader from 'components/loading'
import ProductCard from 'components/productCard'

export default function Home() {
  const { data = [] } = useAxios<Products>({ apiName: 'getProducts' })

  return (
    <Loader isLoading={false}>
      <div className='home'>
        {data.map((product) => {
          return (
            <ProductCard key={product.id} {...product} />
            // TODO: Lazy load for product cards
          )
        })}
      </div>
    </Loader>
  )
}
