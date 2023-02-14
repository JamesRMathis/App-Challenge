import React from 'react'
import { Outlet } from 'react-router-dom'

import FrontNav from '../FrontNav/FrontNav'
import './FrontLayout.scss'

function FrontLayout () {
  return (
    <>
      <FrontNav />
      <main className='front-layout'><Outlet /></main>
    </>
  )
}

export default FrontLayout
