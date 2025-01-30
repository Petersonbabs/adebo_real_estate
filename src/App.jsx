import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      </Routes>    
      <Footer />
    </BrowserRouter>
  )
}

export default App