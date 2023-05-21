import { Link } from 'react-router-dom'
import empty from 'assets/images/empty.webp'

export default function NotFound() {
  return (
    <div className='not-found'>
      <Link to='/'>
        <img src={empty} alt='404 not found' />
      </Link>
      <h2>
        <span>4</span>
        <span>O</span>
        <span>4</span>
      </h2>
      <h3>Oops!... Looks like you got lost</h3>
      <span className='tips'>Get back home by clicking the car</span>
    </div>
  )
}
