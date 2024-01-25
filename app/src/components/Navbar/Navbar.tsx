import './Navbar.css'
import { Link } from 'wouter';

const Navbar = () => {
  return (
    <nav>
      <Link href='/games'>
        <a className='link'>Game</a>
      </Link>
    </nav>
  )
}

export default Navbar;
