import { useState } from 'react'
import reactLogo from './assets/images.png'
import './App.css'
import NavBar from './Components/Navbar'
import Home from './Components/Home'
import { Route, Router, Routes } from 'react-router-dom'
import Skill from './Components/Skill'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <Home />
        <Routes>
          <Route path={'/skill-set'} element={<Skill/>} />
        </Routes>
    </div>
  )
}

export default App
