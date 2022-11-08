import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"


const url = 'https://api.github.com/users'

const GitHubUsers = () => {

  const [users, setUsers] = useState([])

  const getUsers = async() => {
    const response = await axios.get(url)
    setUsers(response.data)
  }

  useEffect(() => {
    getUsers()
  }, [])
  return (
  <>
  {
    users.map(user => {
      return <ul key={user.id}>
          <h2>{user.login}</h2>
        </ul>
    })
  }
  </>
  )
}

export default GitHubUsers