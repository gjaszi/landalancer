import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserCard from './components/UserCard'

const App = () => {
  const [userData, setUserData] = useState([])

  const fetchUsers = async () => {
    return axios
      .get(`https://randomuser.me/api/?results=6`)
      .then(({ data }) => {
        setUserData(data.results)
        console.log(data.results)
      })
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <main className='min-h-screen bg-slate-900 text-slate-100 p-6'>
      <div className='container max-w-5xl mx-auto'>
        <h2 className='pt-12 pl-2 text-sky-500'>People you might like</h2>
        <div className='grid gap-4 lg:grid-cols-2'>
          {userData.map((user) => (
            <UserCard key={user.login.uuid} user={user} />
          ))}
        </div>
        <button className='button py-2 px-4 mt-4' onClick={() => fetchUsers()}>
          Load more
        </button>
      </div>
    </main>
  )
}

export default App
