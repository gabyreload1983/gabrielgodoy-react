import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { hobbiesImages } from "../info/data";

function About(props) {
  return (
    <Container id="about" className="text-center pt-4 pb-3">
      <h2>ABOUT</h2>
      <p className=" text-center fs-5">
        I am Gabriel Godoy. A constantly growing web application developer. At
        this moment I am studying the Full Stack Development career and training
        in an ecommerce made in PHP
      </p>
      <h3>HOBBIES</h3>
      <p className=" text-center fs-5">
        My main hobbies are playing the guitar, swimming and traveling
      </p>
      <Row className="justify-content-center">
        {hobbiesImages.travels.map((travel) => (
          <Col lg={3} className="mb-3" key={travel}>
            <img src={travel} className="img-fluid img-object-fit " alt="" />
          </Col>
        ))}
        {hobbiesImages.swiming.map((swim) => (
          <Col lg={3} className="mb-3" key={swim}>
            <img src={swim} className="img-fluid img-object-fit " alt="" />
          </Col>
        ))}
        {hobbiesImages.guitars.map((guitar) => (
          <Col lg={3} className="mb-3" key={guitar}>
            <img src={guitar} className="img-fluid img-object-fit " alt="" />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default About;
