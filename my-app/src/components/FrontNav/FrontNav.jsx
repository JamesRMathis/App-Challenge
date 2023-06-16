import React from 'react'
import { Link } from 'react-router-dom'

import './FrontNav.scss'
import logo from '../../assets/logo.png'

function Navbar () {
  return (
    <nav>
      <a href="#" className='logo'>
        <img src={logo} alt="my-app" />
      </a>
      <ul className='full-nav'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/signup'>Sign Up</Link></li>
        <li><Link to='/login'>Login</Link></li>
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
