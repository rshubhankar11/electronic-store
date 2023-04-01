import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
const MyNavbar = () => {
  return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
            <img
              src="title_log.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand as={NavLink} to="/">Electronic-Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
            
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Smart Tv</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Smart Phone
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Laptop</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Monitors
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
          </Nav>
          <Nav>
          
            <Nav.Link as={NavLink} to="/cart">Cart( 23 )</Nav.Link>
            <Nav.Link href="#deets">Login</Nav.Link>
            <Nav.Link href="#deets">Signup</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
