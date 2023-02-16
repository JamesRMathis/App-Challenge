import React from 'react'
import { Link } from 'react-router-dom'

import './FrontNav.scss'

function Navbar () {
  return (
    <nav>
      <a href="#" className='logo'>
        <img src="./logo.png" alt="logo" />
      </a>
      <ul className='full-nav'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
      <button className='dropdown-toggle'>X</button>
      <ul className='dropdown-nav'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
