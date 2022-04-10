import React, { useState } from 'react'
import Chat from './Chat.jsx'
import { ChatIcon, MailIcon, InformationCircleIcon, BookmarkIcon } from '@heroicons/react/outline'

const UserCard = ({ user, setBookmarkData }) => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [previousMessages, setPreviousMessages] = useState([])

  const chatProps = {
    key: user.login.uuid,
    user,
    previousMessages,
    setPreviousMessages,
    setIsChatOpen,
  }

  const handleBookmark = () => {
    setBookmarkData({
      user,
      previousMessages,
    })
  }

  return (
    <>
      {isChatOpen && <Chat {...chatProps} />}
      <div className='gap-4 p-6 bg-slate-800 rounded-lg drop-shadow-lg grid sm:grid-cols-[5rem,1fr,6rem]'>
        {/* avatar */}
        <div className='hidden sm:grid content-center relative'>
          <img src={user.picture.large} alt='user' className='rounded-full border-2 border-sky-500 drop-shadow-xl sm:inline-block' />
        </div>

        {/* info */}
        <div className='flex flex-col place-content-center'>
          <p className='text-xl font-medium pr-2 inline-block'>
            {user.name.first} {user.name.last}
            <img src={`https://flagcdn.com/24x18/${user.nat.toLowerCase()}.png`} alt='nationality' className='inline-block ml-2 pb-1' />
          </p>
          <p className='text-slate-400'>{user.email}</p>
          <p className='text-sky-500 mr-auto'>Front-end Developer</p>
        </div>
        {/* controls */}
        <div className='grid grid-cols-4 sm:grid-cols-2 gap-2 py-2 place-items-center sm:bg-slate-900 rounded-xl '>
          <InformationCircleIcon className='user-card__icon' width={25} />
          <BookmarkIcon onClick={handleBookmark} className='user-card__icon' width={25} />
          <ChatIcon
            onClick={() => {
              setIsChatOpen(true)
            }}
            width={25}
            className='user-card__icon'
          />
          <MailIcon className='user-card__icon' width={25} />
        </div>
      </div>
    </>
  )
}

export default UserCard
