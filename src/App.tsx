import { useState } from 'react'
import reactLogo from './assets/images.png'
import './App.css'
import NavBar from './Components/Navbar'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  )
}

export default App
