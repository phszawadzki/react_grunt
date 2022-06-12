import React from 'react'
import LOGO from '../../assets/logo.png'

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigation = () => {
  return ( <div>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img src={ LOGO } alt="" width="40" height="40"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">O mnie</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Navigation