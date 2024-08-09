import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './style.css'

function Header() {
  return (
    <div>
        <Navbar expand="lg" className="bg-white border-3 border-bottom py-3" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#" className='fw-bold fs-3 d-flex align-items-center gap-2'><img src="https://cdn-icons-png.freepik.com/256/5751/5751374.png?ga=GA1.1.1861953279.1723189655&semt=ais_hybrid" alt="" className="logo" /> Virtual ID</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <Nav.Link href="#action2">Contact Us</Nav.Link>
            <Nav.Link href="#action2">Vertual ID Card</Nav.Link>
           
          
          </Nav>
          <div className="d-flex gap-3 align-items-center">
          <button className="btn btn-light rounded-pill fs-5 px-3">Login</button>
          <button className="blue-btn py-2">Create Vertual ID</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header