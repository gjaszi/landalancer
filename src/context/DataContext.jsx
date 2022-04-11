import React, { useEffect, useState, createContext, useCallback } from 'react'
import axios from 'axios'

export const DataContext = createContext()

const DataContextProvider = ({ children }) => {
  const [userData, setUserData] = useState([])
  const [bookmarkData, setBookmarkData] = useState([])
  const [messages, setMessages] = useState([])

  const fetchUsers = useCallback(async () => {
    const response = await axios.get(`https://randomuser.me/api/?results=40`)
    setUserData(response.data.results)
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const values = {
    userData,
    bookmarkData,
    setBookmarkData,
    messages,
    setMessages,
  }

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>
}

export default DataContextProvider
