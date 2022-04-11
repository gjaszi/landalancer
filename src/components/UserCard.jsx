import React, { useState, useContext } from 'react'
import Chat from './Chat.jsx'
import { ChatIcon, MailIcon, InformationCircleIcon, BookmarkIcon } from '@heroicons/react/outline'
import { DataContext } from '../context/DataContext.jsx'

const UserCard = ({ user }) => {
  const { setBookmarkData } = useContext(DataContext)
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
    setBookmarkData((prevState) => [...prevState, { user, previousMessages }])
  }

  return (
    <>
      {isChatOpen && <Chat {...chatProps} />}
      <div className='gap-4 p-6 bg-slate-800 rounded-lg drop-shadow-lg grid sm:grid-cols-[5rem,1fr,6rem]'>
        {/* avatar */}
        <div className='hidden sm:grid content-center'>
          <img
            src={user.picture.large}
            alt='user'
            className='rounded-full drop-shadow ring-2 outline outline-sky-500 ring-sky-500 bg-sky-500 sm:inline-block'
          />
        </div>

        {/* info */}
        <div className='flex flex-col place-content-center'>
          <p className='text-xl font-medium pr-2 inline-block'>
            {user.name.first} {user.name.last}
            <img src={`https://flagcdn.com/24x18/${user.nat.toLowerCase()}.png`} alt='nationality' className='inline-block ml-2 pb-1' />
          </p>
          {/* <p className='text-slate-400 text-sm'>{user.email}</p> */}
          <p className='text-sky-500 mr-auto'>Front-end Developer</p>
        </div>
        {/* controls */}
        <div className='grid grid-cols-4 sm:grid-cols-2 p-2 place-items-center sm:bg-slate-900 rounded-xl '>
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
