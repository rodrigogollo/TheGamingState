import './App.css'
import { useEffect, useState } from 'react'
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
      </div>
    </>
  )
}

export default App
