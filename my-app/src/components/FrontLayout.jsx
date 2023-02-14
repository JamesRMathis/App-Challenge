import { Outlet } from "react-router-dom"
import Navbar from "./FrontNav.tsx"
import '../css/pageWithFrontNav.css'

function FrontLayout () {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default FrontLayout
