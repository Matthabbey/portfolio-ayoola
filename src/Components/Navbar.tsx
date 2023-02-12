import React, { useEffect, useState } from 'react'
import Logo from '../public/Logo.svg'
const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scroll, setScroll] = useState(false)

    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScroll(true)
            }else{
                setScroll(false)
            }
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const handleUpdateActiveLink = (value: string) =>{
        setActiveLink(value)
    }
  return (
  <div className='min-h-screen'>
        <nav className='py-12 mb-12 justify-between'>
            <img src={Logo} alt="" />
            <h1>Ayoola</h1>
            <ul>
                <li >Home</li>
                <li>Skills</li>
                <li>Portfolios</li>
                <li>Recommendation</li>
                <li>Contact</li>
            </ul>
        </nav>
  </div>
  )
}

export default NavBar