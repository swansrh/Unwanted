import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'

function NavigationBaby() {
    return (
        <Navbar className="main white nav-margins d-flex justify-content-between" bg="light" expand="lg">
        <Container> 
          <Navbar.Brand href="#home">Unwanted</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Stickers</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Hoodies</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Shirts</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Keyrings</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavigationBaby