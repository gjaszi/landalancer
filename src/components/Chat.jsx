import React, { useState, useRef, useEffect, useContext } from 'react'
import { DataContext } from '../context/DataContext'
import { getDate } from '../api/utils'
import { XIcon } from '@heroicons/react/outline'

const Chat = ({ user, setIsChatOpen }) => {
  const { messages, setMessages } = useContext(DataContext)
  const [latestMessage, setLatestMessage] = useState('')
  const filteredUsers = messages.filter((currentUser) => currentUser.user_email === user.email)
  const inputRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsChatOpen(false)
    }

    inputRef.current.focus()

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [setIsChatOpen])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (latestMessage.trim()) {
      setMessages((state) => [
        ...state,
        {
          user_email: user.email,
          message: latestMessage,
          date: getDate(),
        },
      ])
    }
    setLatestMessage('')
    inputRef.current.value = ''
  }

  return (
    <div className='absolute inset-0 z-20 bg-slate-800 bg-opacity-70'>
      <div className='fixed bottom-0 right-0 h-3/6 w-full sm:right-6 sm:w-6/12 lg:w-4/12 xl:w-3/12 flex flex-col gap-4 p-4 border-t sm:rounded-t-lg sm:border sm:border-b-0 border-slate-500 bg-slate-800 drop-shadow-lg'>
        <div>
          <div className='relative flex gap-2 content-center'>
            <img src={user.picture.thumbnail} width={40} alt='avatar' className='rounded-full inline border-2 bg-green-500 border-green-500' />
            <p className='my-auto text-xl'>
              {user.name.first} {user.name.last}
            </p>
            <XIcon
              width={30}
              className='absolute top-0 right-0 text-red-500 cursor-pointer active:rotate-90 transition-all animate-pulse'
              onClick={() => setIsChatOpen(false)}
            />
          </div>
        </div>
        <div className='grow bg-slate-900 p-4 rounded overflow-scroll overflow-x-hidden'>
          {filteredUsers.map((filteredUser, i) => (
            <div key={`filteredUser-${i}`} className='pb-1 text-right'>
              <span key={filteredUser.message} className='break-words py-2 px-4  inline-block rounded-full bg-slate-800'>
                {filteredUser.message}
              </span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className='grid grid-cols-[1fr,5rem] gap-4'>
          <input
            type='text'
            placeholder='Some text...'
            ref={inputRef}
            onChange={(e) => setLatestMessage(e.target.value)}
            className='rounded drop-shadow outline-0 py-1 px-3 focus:ring ring-sky-500 text-slate-900'
          />
          <button className='button'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Chat
