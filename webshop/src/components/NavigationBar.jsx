import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap"

import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Mihkel&apos;s</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/ostukorv">Cart</Nav.Link>
            <Nav.Link as={Link} to="/kalkulaator">Calculator</Nav.Link>
            <Nav.Link as={Link} to="/seaded">Settings</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
            <Nav.Link as={Link} to="/kinkekaart">Giftcards</Nav.Link>
            <Nav.Link as={Link} to="/poed">Shops</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;