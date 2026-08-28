// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Homes'
import About from './pages/About'
import Contact from './pages/Contact'
import Fun from './pages/Fun'
import Navbar from './components/Navbar'

import './App.css'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fun" element={<Fun />} />
        </Routes>
      </BrowserRouter>
    </>

    
  );
}


export default App
