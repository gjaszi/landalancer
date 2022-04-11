import React, { useContext } from 'react'
import UserCard from '../components/UserCard'
import { DataContext } from '../context/DataContext'

const Discover = () => {
  const { userData, fetchUsers } = useContext(DataContext)

  return (
    <>
      <div className='mx-auto lg:max-w-7xl p-6'>
        <div className='grid gap-2 sm:grid-cols-[1fr,10rem]'>
          <h2 className='text-sky-500 text-xl sm:text-2xl font-medium my-auto'>People you might like</h2>
        </div>
        <div className='grid gap-4 py-4 lg:grid-cols-2'>
          {userData.map((user, i) => {
            return <UserCard key={user.login.uuid} user={user} />
          })}
        </div>
        <button className='button py-2 px-4' onClick={() => fetchUsers()}>
          Load more
        </button>
      </div>
    </>
  )
}

export default Discover
