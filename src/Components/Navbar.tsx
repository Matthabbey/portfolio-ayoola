import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import {BsLinkedin, BsFacebook} from 'react-icons/bs'

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
  <div className=' bg-white '>
    Hello World
  </div>
  )
}

export default NavBar