import React, { useState, useEffect } from 'react'
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

  return (
    <>
      {isChatOpen && (
        <Chat
          key={user.login.uuid}
          user={user}
          previousMessages={previousMessages}
          setIsChatOpen={setIsChatOpen}
          setPreviousMessages={setPreviousMessages}
        />
      )}
      <div className='p-6 gap-4 border-2 border-slate-500 bg-slate-800 rounded-lg sm:grid grid-cols-[6rem,1fr] group'>
        <div className='relative'>
          <img
            src={user.picture.large}
            alt='user'
            className='rounded-full border-2 border-sky-500 bg-sky-500 hidden sm:inline-block h-full align-middle'
          />
          <img
            src={`https://flagcdn.com/24x18/${user.nat.toLowerCase()}.png`}
            alt='nationality'
            className='absolute top-0 hidden sm:block drop-shadow-lg'
          />
        </div>
        <div>
          <p className='text-slate-100 text-xl font-medium'>
            {user.name.first} {user.name.last} , {user.dob.age}
          </p>
          <p className='text-slate-400'>{user.email}</p>
          <p className='text-sky-500 mr-auto'>Front-end Developer</p>
          <div className='flex justify-end gap-2'>
            <BookmarkIcon width={23} className='user-card__icon' />
            <ChatIcon
              onClick={() => {
                setIsChatOpen(true)
              }}
              width={25}
              className='user-card__icon'
            />
            <MailIcon width={25} className='user-card__icon' />
            <InformationCircleIcon width={25} className='user-card__icon' />
          </div>
        </div>
      </div>
    </>
  )
}

export default UserCard
