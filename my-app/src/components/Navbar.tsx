import React from 'react'
import ReactDOM from 'react-dom/client'
import '../css/navbar.css'

function Navbar () {
  return (
    <nav>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact Info</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
