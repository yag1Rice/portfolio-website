import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './pages/About'
import Contact from './pages/Contact'
import Fun from './pages/Fun'
import Experience from './pages/Experience'
import Blog from './pages/Blog'
import Publications from './pages/Publications'

import Navbar from './components/Navbar'

import './App.css'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/fun" element={<Fun />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App
