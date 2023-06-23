import { Routes, Route } from 'react-router-dom'

import FrontLayout from './components/FrontLayout/FrontLayout'
import Home from './components/Home/Home'
import About from './components/About/About'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'

function App () {
  return (
    <>
      <Routes>
        <Route element={<FrontLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Route>
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
