import React from 'react'
import "./Navbar.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';




function Navbars() {
  return (
    <Navbar expand="sm" bg="light" >
      <Container>
        <Navbar.Brand className='nav_logo' >teamUpp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" >
          <Nav >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/organise">Organise</Nav.Link>
            <Nav.Link href="/explore">Explore</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/sponsorship">Sponsorship</Nav.Link>
            <Nav.Link href="/mentor">Mentorship</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbars