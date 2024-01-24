import { useState, useEffect }  from 'react';

const UserPage = () => {
  const [users, setUsers] = useState<[] | null>([]);

  useEffect(() => {
    setUsers([]);
    async function getUsers(){
      const url = "http://localhost:3000/api/v1/users"
      const response = await fetch(url)
      const data = await response.json()

      setUsers(data);
    }
    getUsers()

  }, []);

  return (
    <>
      {
        users && 
        users.map(({id, username}: any) => {
          return <p key={id}>{username}</p>
        })
      }
    </>
  )

}

export default UserPage;
