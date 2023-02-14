import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route } from 'react-router-dom'
import FrontLayout from './components/FrontLayout'
// import Navbar from './components/FrontNav.tsx'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import Contact from './components/Contact.tsx'

function App () {
  return (
    <>
      {/* <Navbar /> */}

      <Routes>
        <Route element={<FrontLayout />}> {/* Puts navbar on these pages */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>

        <Route path='/contact' element={<Contact />} /> {/* contact shouldnt have body padding */}
      </Routes>
    </>
  )
}

export default App
