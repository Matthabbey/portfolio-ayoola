import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

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
        <Navbar expand="lg" className={ scroll ? "scrolled" : ""}>

            <Container>
                <Navbar.Brand href='#home'>
                    <img src={""} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle>
                    <span className="navbar-toggle-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href='#home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> handleUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href='#skills' className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> handleUpdateActiveLink('skills')}>Skills </Nav.Link>
                        <Nav.Link href='#projects' className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> handleUpdateActiveLink('projects')}>Projects </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icons">
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                        </div>
                        <button onClick={()=> console.log()}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>

        </Navbar>
  )
}

export default Navbar