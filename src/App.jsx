import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Discover from './pages/Discover'
import Bookmark from './pages/Bookmark'
import NotFound from './pages/NotFound'
import DataContext from './context/DataContext'
import Construction from './components/Construction'

const App = () => {
  return (
    <>
      <Router>
        <Construction />
        <Nav />
        <DataContext>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/discover' element={<Discover />} />
            <Route path='/bookmark' element={<Bookmark />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </DataContext>
      </Router>
    </>
  )
}

export default App
