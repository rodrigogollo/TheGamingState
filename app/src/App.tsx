import './App.css'
import { useEffect, useState } from 'react'
import GamePage from './GamePage';
function App() {

  const [users, setUsers] = useState<[] | null>([]);

  useEffect(() => {
    setUsers([]);
    async function getUsers(){
      const url = "http://localhost:3000/api/v1/users"
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      setUsers(data);
    }
    getUsers()

  }, []);

  return (
    <>
      <div>
        Hello world
        {users && 
          users.map(({id, username}: any) => {
            return <p key={id}>{username}</p>
          })
        }
        <GamePage IGDBgameId="212089" />
      </div>
    </>
  )
}

export default App
