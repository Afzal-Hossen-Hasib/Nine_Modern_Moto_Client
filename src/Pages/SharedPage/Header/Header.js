import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import './Header.css'

const Header = () => {
  return (
    <Navbar className="nav-menu" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand className="text-dark" href="#home">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-dark" href="#features">Features</Nav.Link>
            <Nav.Link className="text-dark" href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="text-dark" href="#deets">More deets</Nav.Link>
            <Nav.Link className="text-dark" eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
