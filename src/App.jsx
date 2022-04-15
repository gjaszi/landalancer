import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Discover from "./pages/Discover"
import Pins from "./pages/Pins"
import NotFound from "./pages/NotFound"
import DataContext from "./context/DataContext"

const App = () => {
  return (
    <>
      <DataContext>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/pins" element={<Pins />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </DataContext>
    </>
  )
}

export default App
