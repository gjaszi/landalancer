import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {
  const [userData, setUserData] = useState([])

  const fetchData = () => {
    return axios.get('https://randomuser.me/api/').then((res) => {
      setUserData(JSON.stringify(res.data.results, null, 2))
    })
  }

  return (
    <>
      <button
        onClick={() => {
          fetchData()
        }}>
        Fetch user
      </button>
      <pre>{userData}</pre>
    </>
  )
}

export default App
