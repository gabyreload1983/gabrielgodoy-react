import React from "react";
import { Container } from "react-bootstrap";
import HardSkills from "./HardSkills";
import SoftSkills from "./SoftSkills";

function Skills(props) {
  return (
    <Container id="skills" className="border-bottom border-3 border-primary">
      <SoftSkills />
      <HardSkills />
    </Container>
  );
}

export default Skills;
