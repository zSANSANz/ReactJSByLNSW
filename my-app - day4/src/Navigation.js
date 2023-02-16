import './App.css';
import React from "react";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='/home'>Home</Nav.Link>
            <Nav.Link href='/profile'>Profile</Nav.Link>
            <Nav.Link href='/'>Login</Nav.Link>
            <Nav.Link href='/logout'>Logout</Nav.Link>
            <Nav.Link href='/get-data'>getData</Nav.Link>
            <Nav.Link href='/post-data'>postdata</Nav.Link>
            <Nav.Link href='/put-data'>putdata</Nav.Link>
            <Nav.Link href='/delete-data'>deldata</Nav.Link>
            <Nav.Link href='/product'>product</Nav.Link>
            <Nav.Link href='/user'>user</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

const Navigation = () => {
    return (
        <div>
            <ColorSchemesExample />
        </div>
    )
}

export default Navigation;
