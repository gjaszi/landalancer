import React from 'react'
import UserCard from '../components/UserCard'

const Discover = ({ userData, fetchUsers, setBookmarkData }) => {
  return (
    <>
      <div className='grid gap-2 sm:grid-cols-[1fr,10rem]'>
        <h2 className='text-sky-500 text-3xl font-medium my-auto'>People you might like</h2>
      </div>
      <div className='grid gap-4 py-4 lg:grid-cols-2'>
        {userData.map((user) => (
          <UserCard key={user.login.uuid} user={user} setBookmarkData={setBookmarkData} />
        ))}
      </div>
      <button className='button py-2 px-4' onClick={fetchUsers}>
        Load more
      </button>
    </>
  )
}

export default Discover
