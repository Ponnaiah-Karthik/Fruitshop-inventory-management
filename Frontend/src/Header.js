import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter,Link} from 'react-router-dom';


export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Fruit-Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link className="nav-link" to="/" style={{ textDecoration: 'none' }}>Home</Link>
          <Link  className="nav-link" to="/stock" style={{ textDecoration: 'none' }}>Stock</Link>
          <Link  className="nav-link" to="/purchase" style={{ textDecoration: 'none' }}>Purchase</Link>
            <Link className="nav-link"  to="/sales" style={{ textDecoration: 'none' }}>Sales</Link>
            <Link className="nav-link" to="/customer" style={{ textDecoration: 'none' }}>Customer</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
