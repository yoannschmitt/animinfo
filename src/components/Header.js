import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />  
        <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/top">Top 50</Nav.Link>
            <Nav.Link as={Link} to="#pricing">Favoris</Nav.Link>
        </Nav>
    </Navbar>
  );
}

export default Header;