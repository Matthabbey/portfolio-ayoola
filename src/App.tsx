import { useState } from 'react'
import reactLogo from './assets/images.png'
import './App.css'
import NavBar from './Components/Navbar'
import Home from './Components/Home'
import Skill from './Components/Skill'
import Cards from './Components/Cards'
import Project from './Components/Project'
import Experience from './Components/Experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <Home />
      <Skill />
      <Cards />
      <Project/>
      <Experience/>
        {/* <Routes>
          <Route path={'/skill-set'} element={<Skill/>} />
        </Routes> */}
    </div>
  )
}

export default App
