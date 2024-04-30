import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UserList = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          'https://65a25d5342ecd7d7f0a771bd.mockapi.io/users'
        )
        setUsers(response.data)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">User List</h1>
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="bg-white shadow rounded-lg p-4">
            <Link to={`/users/${user.id}`} className="flex items-center">
              <img
                src={user.imageUrl}
                alt={user.fullname}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">{user.fullname}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
