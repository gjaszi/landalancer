import React, { useEffect, useState, createContext, useCallback } from 'react'
import axios from 'axios'

export const DataContext = createContext()

const DataContextProvider = ({ children }) => {
  const [userData, setUserData] = useState([])
  const [avatarData, setAvatarData] = useState([])
  const [bookmarkData, setBookmarkData] = useState([])
  const [messages, setMessages] = useState([])

  const fetchUsers = useCallback(async () => {
    const response = await axios.get(`https://randomuser.me/api/?results=6`)
    setUserData(response.data.results)
  }, [])

  const fetchAvatars = useCallback(async () => {
    const response = await axios.get(`https://randomuser.me/api/?results=40`)
    let tmp = response.data.results.map((result) => result.picture.large)
    setAvatarData(tmp)
  }, [])

  useEffect(() => {
    fetchAvatars()
  }, [fetchAvatars])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const values = {
    userData,
    avatarData,
    bookmarkData,
    setBookmarkData,
    messages,
    setMessages,
    fetchUsers,
  }

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>
}

export default DataContextProvider
