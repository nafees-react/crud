import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>
        <NavLink to="/">
            <img src={logo} alt='logo' style={{width:'40px'}} />
        </NavLink>
        </Navbar.Brand>
        <Nav className="me-auto navbar-nav">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About Us</NavLink>
            <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
            <NavLink to="/Live-Weather-Status" className="nav-link">Live Weather</NavLink>
            <NavLink to="/Users" className="nav-link">Users</NavLink>
            <NavLink to="/create" className="nav-link">Create New User</NavLink>
          </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Welcome: <a href="#login">Nafees</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
        </Navbar>
    </>
  );
}
