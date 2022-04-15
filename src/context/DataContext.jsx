import React, { useEffect, useState, createContext, useCallback } from "react"
import axios from "axios"

export const DataContext = createContext()

const DataContextProvider = ({ children }) => {
  const [userData, setUserData] = useState([])
  const [pins, setPins] = useState([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [notificationMessage, setNotificationMessage] = useState("")

  const fetchUsers = useCallback(async () => {
    const response = await axios.get(`https://randomuser.me/api/?results=40`)
    setUserData(response.data.results)
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth)
  }, [setWindowWidth])

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [handleResize])

  const values = {
    userData,
    pins,
    setPins,
    windowWidth,
    notificationMessage,
    setNotificationMessage,
  }

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>
}

export default DataContextProvider
