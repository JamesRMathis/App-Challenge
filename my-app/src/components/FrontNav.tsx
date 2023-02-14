import React from 'react'
import ReactDOM from 'react-dom/client'
import '../css/frontNav.css'

function Navbar () {
  return (
    <nav>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/contact'>Contact Info</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
