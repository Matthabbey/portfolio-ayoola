import React, { useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scroll, setScroll] = useState(false)
  return (
        <Navbar expand="lg">

            <Container>
                <Navbar.Brand href='#home'>
                    <img src={""} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle>
                    <span className="navbar-toggle-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#skills'>Skills </Nav.Link>
                        <Nav.Link href='#projects'>Projects </Nav.Link>
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