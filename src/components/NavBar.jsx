import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h1 className="fs-3 text-primary">Gabriel Godoy</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/projects">
              PROJECTS
            </Nav.Link>
            <Nav.Link as={Link} to="/skills">
              SKILLS
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              ABOUT
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              CONTACT
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="https://gabrielgodoy.com.ar/resources/cv/estebangabrielgodoy_cv.pdf"
              target="_blank"
            >
              CV
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
