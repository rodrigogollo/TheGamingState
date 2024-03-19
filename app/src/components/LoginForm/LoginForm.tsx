import { Link } from 'wouter';
import "./LoginForm.css"

const LoginForm = () => {
  return (
    <form>
      <h1>Sign In</h1>
      <p>to continue to GameState</p>
      <div>
        <label htmlFor="username">username:</label>
        <input type="text" id="username" name="username" value="" placeholder='Email or username'/>
      </div>
      <div>
        <label htmlFor="password">password:</label>
        <input type="text" id="password" name="password" value="" placeholder='Password'/>
      </div>

      <span>Forgot Email?</span>
      <button type="submit">Login</button>
      <Link href='/signup'>
        <a className='link'>Sign Up</a>
      </Link>
    </ form>
  )
}

export default LoginForm
