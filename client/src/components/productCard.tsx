import { Link } from 'react-router-dom'
import { getImageUrl, getCurrency } from 'utils'
import type { Product } from 'types'

export default function ProductCard({ id, image, title, price }: Product) {
  return (
    <div key={id} className='product-card'>
      <img src={getImageUrl(image)} />
      <Link to={`product/${id}`}>
        <p>{title}</p>
      </Link>
      <p>{getCurrency(price)}</p>
    </div>
  )
}
