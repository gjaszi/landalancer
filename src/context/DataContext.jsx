import React, { useEffect, useLayoutEffect, useState, createContext, useCallback } from 'react';

export const DataContext = createContext();

async function fetchUsers() {
  const response = await fetch('https://randomuser.me/api/?results=40');
  const users = await response.json();
  return users.results;
}

const DataContextProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [pins, setPins] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [notificationMessage, setNotificationMessage] = useState('');

  useLayoutEffect(() => {
    fetchUsers().then((users) => {
      setUserData(users);
    });
  }, []);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, [setWindowWidth]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const values = {
    userData,
    pins,
    setPins,
    windowWidth,
    notificationMessage,
    setNotificationMessage,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
