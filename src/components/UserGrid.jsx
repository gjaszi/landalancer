import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import UserCard from './UserCard'
import ButtonGroup from './ButtonGroup'

const UserGrid = () => {
  const [userData, setUserData] = useState([])
  const [numberOfResults, setNumberOfResults] = useState(6)

  const fetchUsers = useCallback(async () => {
    return axios
      .get(`https://randomuser.me/api/?results=${numberOfResults}`)
      .then(({ data }) => {
        setUserData(data.results)
      })
  }, [numberOfResults])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <div className='user-grid mx-auto xl:max-w-7xl'>
      <div className='grid gap-2 sm:grid-cols-[1fr,10rem]'>
        <h2 className='text-sky-500 text-3xl font-medium my-auto'>
          People you might like
        </h2>
        <ButtonGroup
          values={[2, 4, 6, 8]}
          defaultValue={numberOfResults}
          setNumberOfResults={setNumberOfResults}
        />
      </div>

      <div className='grid gap-4 py-4 lg:grid-cols-2'>
        {userData.map((user) => (
          <UserCard key={user.login.uuid} user={user} />
        ))}
      </div>
      <button className='button py-2 px-4' onClick={fetchUsers}>
        Load more
      </button>
    </div>
  )
}

export default UserGrid
