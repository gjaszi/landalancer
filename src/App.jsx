import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Discover from './pages/Discover'
import Bookmark from './pages/Bookmark'
import NotFound from './pages/NotFound'

const App = () => {
  const [userData, setUserData] = useState([])
  const [bookmarkData, setBookmarkData] = useState({
    user: '',
    messages: [],
  })

  const fetchUsers = useCallback(async () => {
    const response = await axios.get(`https://randomuser.me/api/?results=6`)
    setUserData(response.data.results)
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <>
      <Router>
        <Nav />
        <main className='py-12 mx-auto xl:max-w-6xl'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/discover' element={<Discover userData={userData} fetchUsers={fetchUsers} setBookmarkData={setBookmarkData} />} />
            <Route path='/bookmark' element={<Bookmark bookmarkData={bookmarkData} />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
