import React from 'react'
import {
  ChatIcon,
  MailIcon,
  InformationCircleIcon,
  BookmarkIcon,
} from '@heroicons/react/outline'

const UserCard = (props) => {
  return (
    <div className='p-6 gap-6 border border-slate-500 bg-slate-800 drop-shadow-xl rounded-xl sm:grid grid-cols-[5rem,1fr] group'>
      <div className='relative'>
        <img
          src={props.user.picture.large}
          alt='user'
          width={'100%'}
          className='rounded-full border-2 border-sky-500 bg-sky-500 hidden sm:inline'
        />
        <img
          src={`https://flagcdn.com/24x18/${props.user.nat.toLowerCase()}.png`}
          alt='nationality'
          className='absolute top-0 hidden sm:block drop-shadow-lg'
        />
      </div>
      <div>
        <p className='text-slate-100 text-xl font-medium'>
          {props.user.name.first} {props.user.name.last} , {props.user.dob.age}
        </p>
        <p className='text-slate-400'>{props.user.email}</p>
        <p className='text-sky-500 mr-auto'>Front-end Developer</p>
        <div className='flex justify-end gap-2'>
          <BookmarkIcon
            width={23}
            className='hover:text-sky-500 active:scale-95 hover:cursor-pointer drop-shadow transition-all inline'
          />
          <ChatIcon
            onClick={() => {
              props.setChatBoxUser(props.user)
              props.setChatBoxOpen(true)
            }}
            width={25}
            className='hover:text-sky-500 active:scale-95 hover:cursor-pointer drop-shadow transition-all inline'
          />
          <MailIcon
            width={25}
            className='hover:text-sky-500 active:scale-95 hover:cursor-pointer drop-shadow transition-all inline'
          />
          <InformationCircleIcon
            width={25}
            className='hover:text-sky-500 active:scale-95 hover:cursor-pointer drop-shadow transition-all inline'
          />
        </div>
      </div>
    </div>
  )
}

export default UserCard
