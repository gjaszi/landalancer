import React, { useContext } from 'react';
import { BsPinAngle, BsPinAngleFill } from 'react-icons/bs';
import { IoMailOutline } from 'react-icons/io5';
import { DataContext } from '../context/DataContext.jsx';

function UserCardControls({ user }) {
  const { pins, setPins, setNotificationMessage } = useContext(DataContext);

  const handleNotification = (message) => {
    setNotificationMessage(message);
  };

  const handleBookmark = () => {
    if (!pins.includes(user)) {
      setPins((prevState) => [...prevState, user]);
      handleNotification('User pinned!');
    } else {
      setPins((prevState) => prevState.filter((tmp) => tmp.email !== user.email));
      handleNotification('User unpinned!');
    }
  };

  const handleMail = () => {
    navigator.clipboard.writeText(user.email);
    handleNotification('Email copied to clipboard!');
  };

  return (
    <div className='flex flex-col justify-evenly rounded-lg'>
      {pins.includes(user) ? (
        <BsPinAngleFill
          size={25}
          onClick={handleBookmark}
          className='w-full cursor-pointer text-sky-500 hover:text-sky-500 active:scale-95  drop-shadow-xl transition-all'
        />
      ) : (
        <BsPinAngle
          size={25}
          onClick={handleBookmark}
          className='w-full cursor-pointer hover:text-sky-500 active:scale-95  drop-shadow-xl transition-all'
        />
      )}

      <IoMailOutline
        onClick={handleMail}
        size={25}
        className='w-full cursor-pointer hover:text-sky-500 active:scale-95  drop-shadow-xl transition-all'
      />
    </div>
  );
}

export default UserCardControls;
