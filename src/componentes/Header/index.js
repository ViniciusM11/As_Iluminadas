import './style.css';
import React from 'react';
import {
  Navbar,
  Container,
  Nav
   } from 'react-bootstrap';

//<NavbarToggler onClick={function noRefCheck() {}} />

function Header() {
return (
<Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
  <Container>
  <Navbar.Brand href="#">
  <img classname="Logo" src="./atelie-logo.png" alt="" width="100px" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
        
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
);
}

export default Header;
