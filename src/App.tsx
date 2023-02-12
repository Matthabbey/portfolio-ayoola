import { useState } from 'react'
import reactLogo from './assets/images.png'
import './App.css'
import NavBar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
    </div>
  )
}

export default App
