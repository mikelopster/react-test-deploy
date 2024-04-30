import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const UserDetail = () => {
  const { id } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://65a25d5342ecd7d7f0a771bd.mockapi.io/users/${id}`
        )
        setUser(response.data)
      } catch (error) {
        console.error('Error fetching user:', error)
      }
    }

    fetchUser()
  }, [id])

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center mb-6">
          <img
            src={user.imageUrl}
            alt={user.fullname}
            className="w-24 h-24 rounded-full mr-6"
          />
          <div>
            <h1 className="text-3xl font-bold">{user.fullname}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Details</h2>
          <p className="text-gray-800">Gender: {user.gender}</p>
          <p className="text-gray-800">Job: {user.job}</p>
          <p className="text-gray-800">Phone Number: {user.phoneNumber}</p>
        </div>
      </div>
    </div>
  )
}

export default UserDetail
