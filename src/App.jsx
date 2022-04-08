import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserCard from './components/UserCard'
import ChatBox from './components/ChatBox.jsx'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [pageData, setPageData] = useState(1)
  const [seedData, setSeedData] = useState('')
  const [userData, setUserData] = useState([])
  const [chatBoxOpen, setChatBoxOpen] = useState(false)
  const [chatBoxUser, setChatBoxUser] = useState('')

  let chatBoxProps = {
    chatBoxOpen,
    setChatBoxOpen,
    chatBoxUser,
    setChatBoxUser,
  }

  const fetchUserData = async () => {
    setLoading(true)
    return axios
      .get(
        `https://randomuser.me/api/?page=${pageData}&results=6&seed=${seedData}`
      )
      .then(({ data }) => {
        setUserData(data.results)
        setSeedData(data.info.seed)
        setPageData(pageData + 1)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <>
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
              <UserCard key={i} user={user} {...chatBoxProps} />
            ))}
          </div>

          <button
            className='bg-sky-600 hover:bg-sky-700 transition-all block mx-auto text-white py-2 px-4 mt-4 rounded drop-shadow disabled:bg-slate-500'
            onClick={() => {
              fetchUserData()
            }}
            disabled={loading}>
            Load more
          </button>
        </div>
        {chatBoxOpen ? <ChatBox {...chatBoxProps} /> : ''}
      </main>
    </>
  )
}

export default App
