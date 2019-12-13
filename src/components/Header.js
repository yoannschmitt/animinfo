import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

const Header = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/top">Top 50</Nav.Link>
            <Nav.Link href="#pricing">Favoris</Nav.Link>
        </Nav>
    </Navbar>
  );
}

export default Header;