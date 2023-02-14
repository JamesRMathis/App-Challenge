import React from 'react'
import { Link } from 'react-router-dom'

import './FrontNav.scss'

function Navbar () {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact Info</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
