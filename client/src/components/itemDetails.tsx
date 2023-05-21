import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import type { Product } from 'types'
import { getCurrency, getImageUrl } from 'utils'
import useAxios from 'hooks/useAxios'

export default function ItemDetails() {
  const { id } = useParams()
  const { fetchData, data } = useAxios<Product>({
    apiName: 'getProductDetails',
    lazyFetch: true,
  })

  useEffect(() => {
    fetchData<string>(id)
  }, [id])

  return (
    <article className='item-details'>
      <img src={getImageUrl(data?.image)} alt='product-image' className='product-image' />
      <div>
        <h2 className='product-name'>{data?.title}</h2>
        <p className='price'>{getCurrency(data?.price)}</p>
        <p className='description'>{data?.text}</p>
      </div>
    </article>
  )
}
