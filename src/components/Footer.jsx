import React from "react";
import { personalInfo } from "../info/data";
import {
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsFillEnvelopeFill,
  BsYoutube,
  BsWhatsapp,
} from "react-icons/bs";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Footer(props) {
  return (
    <footer>
      <Navbar bg="dark" variant="dark" className="py-5">
        <Container className="justify-content-center">
          <Nav>
            <Nav.Link href={personalInfo.github} target="_blank">
              <BsGithub size={30} className="me-2" />
            </Nav.Link>
            <Nav.Link href={personalInfo.linkedin} target="_blank">
              <BsLinkedin size={30} className="me-2" />
            </Nav.Link>
            <Nav.Link href={personalInfo.instagram} target="_blank">
              <BsInstagram size={30} className="me-2" />
            </Nav.Link>
            <Nav.Link href={personalInfo.mail}>
              <BsFillEnvelopeFill size={30} className="me-2" />
            </Nav.Link>
            <Nav.Link href={personalInfo.youtube} target="_blank">
              <BsYoutube size={30} className="me-2" />
            </Nav.Link>
            <Nav.Link href={personalInfo.whatsapp} target="_blank">
              <BsWhatsapp size={30} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </footer>
  );
}

export default Footer;
