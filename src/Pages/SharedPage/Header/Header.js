import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from '../../../Images/logo/logo.png'
import './Header.css'

const Header = () => {

  const [user, loading, error] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
}

  return (
    <Navbar className="nav-menu" sticky="top" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="header-title" as={Link} to='/allparts'>Parts</Nav.Link>
            {/* <Nav.Link className="text-dark" href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link className="header-title" as={Link} to='/myprotfolio'>My Portfolio</Nav.Link>
            <Nav.Link className="header-title" as={Link} to="/blog">Blogs</Nav.Link>
      {
        user ?

          <Nav>
            <Nav.Link className="header-title" as={Link} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link>{user.email}</Nav.Link>
            <Nav.Link className="header-title" onClick={handleSignOut}>Log Out</Nav.Link>
          </Nav>
        :
        <Nav.Link className="header-title" as={Link} to="/login">
        Login 
      </Nav.Link>
      }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
