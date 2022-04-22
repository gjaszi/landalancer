import React from 'react';
import UserCardControls from './UserCardControls.jsx';

const UserCard = ({ user }) => {
  return (
    <div className='grid grid-cols-[1fr,2rem] sm:grid-cols-[5rem,1fr,1.75rem] gap-4 p-4 bg-slate-800 rounded-lg drop-shadow-lg '>
      {/* avatar */}
      <div className='hidden sm:grid content-center'>
        <img src={user.picture.large} alt='user' className='rounded-full outline outline-sky-500 sm:inline-block' />
      </div>

      {/* info */}
      <div className='flex flex-col place-content-center'>
        <p className='text-xl font-medium pr-2 inline-block'>
          {user.name.first} {user.name.last}
          <img
            src={`https://flagcdn.com/24x18/${user.nat.toLowerCase()}.png`}
            alt='nationality'
            className='inline-block ml-2 pb-1'
          />
        </p>
        <p className='text-sky-500'>Front-end Developer</p>
        <p className='hidden sm:block text-sm text-slate-300'>{user.login.username}</p>
      </div>
      <UserCardControls user={user} />
    </div>
  );
};

export default UserCard;
