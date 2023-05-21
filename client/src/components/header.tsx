import { ReactComponent as Logo } from 'assets/icons/logo.svg'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='header'>
      <div className='header-layout'>
        <Link to='/'>
          <Logo className='logo' />
        </Link>
        <div className='actions'>Login or Logout</div>
      </div>
    </header>
  )
}
