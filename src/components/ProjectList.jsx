import React from "react";
import ProyectCard from "./ProyectCard";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { projects } from "../info/data";

function ProjectList(props) {
  return (
    <Container
      id="projects"
      className="border-bottom border-3 border-primary pt-4 pb-3"
    >
      <h2 className="text-center">MY PROYETCS</h2>
      <Row className="g-3 m-0">
        {projects.map((proyect) => (
          <Col key={proyect.urlGithub} md={6} lg={4}>
            <ProyectCard {...proyect} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProjectList;
