import React, { useState, useRef, useEffect } from 'react'
import { getDate } from '../api/utils'
import { XIcon } from '@heroicons/react/outline'

const Chat = ({ chatData, setChatData }) => {
  const [messages, setMessages] = useState([])
  const [latestMessage, setLatestMessage] = useState('')
  const clearInputRef = useRef(null)

  let handleSubmit = (e) => {
    e.preventDefault()
    if (latestMessage.trim()) {
      setMessages((prevState) => [
        ...prevState,
        {
          date: getDate(),
          message: latestMessage,
        },
      ])
    }
    setLatestMessage('')
    clearInputRef.current.value = ''
  }

  useEffect(() => {
    clearInputRef.current.focus()
  }, [])

  return (
    <div className='absolute inset-0 z-20 bg-slate-800 bg-opacity-70'>
      <div className='fixed bottom-0 right-0 h-3/6 w-full sm:bottom-6 sm:right-6 sm:w-6/12 lg:w-4/12 xl:w-3/12 flex flex-col gap-4 p-6 border-t sm:rounded-xl sm:border border-slate-500 bg-slate-800 drop-shadow-lg'>
        <div>
          <div className='bg-slate-900 rounded p-2 relative flex gap-2 content-center'>
            <img
              src={chatData.user.picture.thumbnail}
              width={50}
              alt='avatar'
              className='rounded-full inline border-2 bg-sky-500 border-sky-500'
            />
            <span className='underline my-auto text-lg'>
              {chatData.user.name.first} {chatData.user.name.last}
            </span>
            <XIcon
              width={25}
              className='absolute top-0 right-0 text-red-500 cursor-pointer active:rotate-90 transition-all'
              onClick={() => {
                setChatData({
                  open: false,
                })
              }}
            />
          </div>
        </div>
        <div className='grow bg-slate-900 p-4 rounded overflow-scroll overflow-x-hidden'>
          {messages.map((message, i) => (
            <div
              key={`message-${i}`}
              className='p-1 border rounded border-slate-800 mb-2'>
              <span key={message.date} className='text-slate-500 text-xs pr-2'>
                {message.date}
              </span>
              <span key={message.message} className='break-words'>
                {message.message}
              </span>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className='grid grid-cols-[1fr,5rem] gap-4'>
          <input
            type='text'
            placeholder='Some text...'
            ref={clearInputRef}
            onChange={(e) => setLatestMessage(e.target.value)}
            className='rounded drop-shadow outline-0 p-1 focus:ring ring-sky-500 text-slate-900'
          />
          <button className='button'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Chat
