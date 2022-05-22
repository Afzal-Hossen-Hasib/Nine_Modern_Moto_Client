import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../../Images/logo/logo.png'
import './Header.css'

const Header = () => {
  return (
    <Navbar className="nav-menu" sticky="top" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand className="text-dark" as={Link} to='/'>
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-dark" as={Link} to='/parts'>Parts</Nav.Link>
            {/* <Nav.Link className="text-dark" href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link className="text-dark" as={Link} to='/about'>About</Nav.Link>
            <Nav.Link className="text-dark" as={Link} to='/login'>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
