import React, { useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';

const Notifications = () => {
  const { notificationMessage, setNotificationMessage } = useContext(DataContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotificationMessage(null);
    }, 1500);

    return () => clearTimeout(timer);
  });
  return (
    <p
      className={`${
        notificationMessage ? 'scale-100 translate-x-0' : 'scale-0 translate-x-full'
      } fixed z-20 top-12 inset-x-0 mx-auto max-w-fit py-1 px-2 transition-all bg-green-600 shadow-lg rounded-lg`}
    >
      {notificationMessage}
    </p>
  );
};

export default Notifications;
