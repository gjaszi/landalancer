import React, { useContext, useState, useEffect } from 'react'
import UserCard from '../components/UserCard'
import { DataContext } from '../context/DataContext'

const Discover = () => {
  const { userData } = useContext(DataContext)
  const [pagingUsers, setPagingUsers] = useState({
    start: 0,
    end: 10,
  })
  const [disabledPaging, setDisabledPaging] = useState(false)

  useEffect(() => {
    if (pagingUsers.start === 30) {
      setDisabledPaging(true)
    }
    console.log(JSON.stringify(pagingUsers, null, 2))
  }, [pagingUsers])

  return (
    <div className='mx-auto lg:max-w-7xl p-6'>
      <div className='grid gap-2 sm:grid-cols-[1fr,10rem]'>
        <h2 className='text-sky-500 text-xl sm:text-2xl font-bold my-auto'>People you might like</h2>
      </div>
      <div className='grid gap-4 py-4 lg:grid-cols-2'>
        {userData.slice(pagingUsers.start, pagingUsers.end).map((user, i) => {
          return <UserCard key={user.login.uuid} user={user} />
        })}
      </div>
      <button
        disabled={disabledPaging}
        className='button py-2 px-4'
        onClick={() =>
          setPagingUsers((state) => ({
            start: state.end,
            end: state.end + 10,
          }))
        }>
        Load more
      </button>
    </div>
  )
}

export default Discover
