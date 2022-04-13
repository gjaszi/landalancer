import React, { useContext } from 'react'
import { MailIcon, InformationCircleIcon, BookmarkIcon } from '@heroicons/react/outline'
import { DataContext } from '../context/DataContext.jsx'

const UserCard = ({ user, setNotificationMessage }) => {
  const { setBookmarkData } = useContext(DataContext)

  const handleBookmark = () => {
    setBookmarkData((prevState) => [...prevState, user])
    setNotificationMessage('User bookmarked!')
  }

  const handleMail = () => {
    navigator.clipboard.writeText(user.email)
    setNotificationMessage('Email copied to clipboard.')
  }

  return (
    <>
      <div className='grid grid-cols-[1fr,2rem] sm:grid-cols-[5rem,1fr,2rem] gap-4 p-4 bg-slate-800 rounded-lg drop-shadow-lg '>
        {/* avatar */}
        <div className='hidden sm:grid content-center'>
          <img src={user.picture.large} alt='user' className='rounded-full outline outline-sky-500 sm:inline-block' />
        </div>

        {/* info */}
        <div className='flex flex-col place-content-center'>
          <p className='text-xl font-medium pr-2 inline-block'>
            {user.name.first} {user.name.last}
            <img src={`https://flagcdn.com/24x18/${user.nat.toLowerCase()}.png`} alt='nationality' className='inline-block ml-2 pb-1' />
          </p>
          <p className='text-sky-500'>Front-end Developer</p>
          <p className='hidden sm:block text-sm text-slate-300'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea neque dolore quo debitis aut in iste fugit quasi ab fugiat.
          </p>
        </div>
        {/* controls */}
        <div className='flex flex-col place-items-end rounded-lg'>
          <InformationCircleIcon className='w-8 cursor-pointer hover:text-sky-500 active:scale-95  drop-shadow-xl transition-all' />
          <BookmarkIcon onClick={handleBookmark} className='w-8 cursor-pointer hover:text-sky-500 active:scale-95  drop-shadow-xl transition-all' />
          <MailIcon onClick={handleMail} className='w-8 cursor-pointer hover:text-sky-500 active:scale-95  drop-shadow-xl transition-all' />
        </div>
      </div>
    </>
  )
}

export default UserCard
