import React, { useState, useRef } from 'react'
import Chat from './Chat.jsx'
// import Bookmark from './Bookmark.jsx'
import {
  ChatIcon,
  MailIcon,
  InformationCircleIcon,
  BookmarkIcon,
} from '@heroicons/react/outline'

const UserCard = ({ user }) => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [previousMessages, setPreviousMessages] = useState([])

  const chatProps = {
    key: user.login.uuid,
    user,
    previousMessages,
    setPreviousMessages,
    setIsChatOpen,
  }

  return (
    <>
      {isChatOpen && <Chat {...chatProps} />}
      <div className='gap-4 py-4 px-6 bg-slate-800 rounded-lg drop-shadow-lg grid grid-cols-[1fr,1.5rem] sm:grid-cols-[6rem,1fr,1.5rem]'>
        {/* avatar */}
        <div className='hidden sm:grid content-center relative'>
          <img
            src={user.picture.large}
            alt='user'
            className='rounded-full border-2 border-sky-500 drop-shadow-xl hidden sm:inline-block'
          />
          <img
            src={`https://flagcdn.com/24x18/${user.nat.toLowerCase()}.png`}
            alt='nationality'
            className='absolute top-2'
          />
        </div>

        {/* info */}
        <div className='flex flex-col'>
          <p className='text-xl font-medium pr-2 inline-block'>
            {user.name.first} {user.name.last}
          </p>
          <p className='text-slate-400'>{user.email}</p>
          <p className='text-sky-500 mr-auto'>Front-end Developer</p>
        </div>
        {/* controls */}
        <div className='grid gap-1 content-center justify-end'>
          <InformationCircleIcon className='user-card__icon' />
          <BookmarkIcon className='user-card__icon' />
          <ChatIcon
            onClick={() => {
              setIsChatOpen(true)
            }}
            width={'100%'}
            className='user-card__icon'
          />
          <MailIcon className='user-card__icon' />
        </div>
      </div>
    </>
  )
}

export default UserCard
