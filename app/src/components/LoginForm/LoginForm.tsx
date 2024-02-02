const LoginForm = () => {
  return (
    <form>
      <label htmlFor="username">username:</label>
      <input type="text" id="username" name="username" value="" />

      <label htmlFor="password">password:</label>
      <input type="text" id="password" name="password" value="" />

      <button type="submit">Login</button>
      <button>Sign Up</button>
    </ form>
  )
}

export default LoginForm
