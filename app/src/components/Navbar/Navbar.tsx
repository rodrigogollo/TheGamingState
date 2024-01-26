import './Navbar.css'
import { Link } from 'wouter';

const Navbar = () => {
  return (
    <nav>
      <Link href='/games'>
        <a className='link'>Games</a>
      </Link>
      <div className='menu'>
        <Link href='/login'>
          <a className='link'>Login</a>
        </Link>
        <Link href='/signup'>
          <a className='link'>Sign Up</a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;
