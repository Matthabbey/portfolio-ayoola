import { useState } from 'react'
import reactLogo from './assets/images.png'
import './App.css'
import NavBar from './Components/Navbar'
import Home from './Components/Home'
import { Route, Router, Routes } from 'react-router-dom'
import Skill from './Components/Skill'
import Cards from './Components/Cards'
import Project from './Components/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <Home />
      <Skill />
      <Cards />
      <Project/>
        {/* <Routes>
          <Route path={'/skill-set'} element={<Skill/>} />
        </Routes> */}
    </div>
  )
}

export default App
