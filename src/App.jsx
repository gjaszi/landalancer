import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserCard from './components/UserCard'
import Chat from './components/Chat.jsx'

const App = () => {
  const [userData, setUserData] = useState([])

  const [chatData, setChatData] = useState({
    user: '',
    open: false,
  })

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
    <main className='min-h-screen bg-slate-900 text-slate-100 p-6 relative'>
      <div className='container max-w-5xl mx-auto'>
        <div className='p-6 border border-slate-500 bg-slate-800 drop-shadow-xl rounded-xl'>
          <p className='text-2xl font-medium pb-2'>
            Lorem, ipsum dolor sit amet consectetur.
          </p>
          <p className='text-slate-400'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            placeat assumenda, omnis unde molestiae optio eaque officiis totam
            ipsum officia a exercitationem ad inventore obcaecati facilis
            molestias? Minus debitis excepturi distinctio molestias labore
            veniam praesentium, nobis, mollitia aspernatur voluptatem quis!
          </p>
        </div>
        <h2 className='font-medium text-2xl pb-2 pt-12 pl-2 text-sky-500'>
          People you might like
        </h2>

        <div className='grid gap-4 lg:grid-cols-2 relative'>
          {userData.map((user, i) => (
            <UserCard key={i} user={user} setChatData={setChatData} />
          ))}
        </div>

        <button
          className='button py-2 px-4 mt-4'
          onClick={() => {
            fetchUsers()
          }}>
          Load more
        </button>
      </div>
      {chatData.open && <Chat chatData={chatData} setChatData={setChatData} />}
    </main>
  )
}

export default App
