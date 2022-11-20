import React from "react";
import ProyectCard from "./ProyectCard";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { projects } from "../info/data";

function ProjectList(props) {
  return (
    <Container id="projects" className="border-bottom border-3 border-primary">
      <Row className="py-3 g-3">
        <h2 className="text-center">MY PROYETCS</h2>
        {projects.map((proyect) => (
          <Col key={proyect.urlGithub} md={6} lg={4}>
            <ProyectCard
              nameImage={proyect.nameImage}
              name={proyect.name}
              type={proyect.type}
              technologies={proyect.technologies}
              urlGithub={proyect.urlGithub}
              urlDeploy={proyect.urlDeploy}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProjectList;
