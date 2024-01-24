import './Navbar.css'
import { Link } from 'wouter';

const Navbar = () => {
  return (
    <nav>
      <Link href='/game/212089'>
        <a className='link'>Game</a>
      </Link>
    </nav>
  )
}

export default Navbar;
