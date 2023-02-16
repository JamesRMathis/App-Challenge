import { Routes, Route } from 'react-router-dom'

import FrontLayout from './components/FrontLayout/FrontLayout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App () {
  return (
    <>
      <Routes>
        <Route element={<FrontLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
