import { Link, Route } from "wouter";
import { useEffect, useState } from 'react'
import GamePage from './GamePage';
import './App.css'

function App() {

  // const [users, setUsers] = useState<[] | null>([]);

  // useEffect(() => {
  //   setUsers([]);
  //   async function getUsers(){
  //     const url = "http://localhost:3000/api/v1/users"
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     console.log(data)
  //     setUsers(data);
  //   }
  //   getUsers()
  //
  // }, []);
  //
  return (
    <>
      <div>
        <Link href="/users/1">
          <a className='link'>Profile</a>
        </Link>

        <Route path="/about"> About Us </Route>
        <Route path="/users/:name">{(params) => <div>Hello, {params.name}!</div>}</Route>
        {
          // users && 
          // users.map(({id, username}: any) => {
          //   return <p key={id}>{username}</p>
          // })
        }
        <GamePage IGDBgameId="212089" />
      </div>
    </>
  )
}

export default App
