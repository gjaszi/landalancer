import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Content from './components/Content'
import Home from './pages/Home'
import Discover from './pages/Discover'
import Bookmark from './pages/Bookmark'
import NotFound from './pages/NotFound'
import DataContext from './context/DataContext'

const App = () => {
  return (
    <>
      <DataContext>
        <Router>
          <Nav />
          <Content>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/discover' element={<Discover />} />
              <Route path='/bookmark' element={<Bookmark />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Content>
        </Router>
      </DataContext>
    </>
  )
}

export default App
