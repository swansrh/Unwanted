import React from 'react'
import "./NavBabyStyle.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, FormControl, Form, NavDropdown, Nav, Container, Navbar } from 'react-bootstrap'

function NavigationBaby() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home" class="ChangeMePls">Unwanted</Navbar.Brand>
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
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBaby