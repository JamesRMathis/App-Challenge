import { Routes, Route } from 'react-router-dom'

import FrontLayout from './components/FrontLayout/FrontLayout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App () {
  return (
    <>
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
