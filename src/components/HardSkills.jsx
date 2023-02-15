import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaDocker, FaGithub, FaHtml5, FaPhp, FaPython } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BsFillBootstrapFill } from "react-icons/bs";
import { DiNodejsSmall } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { DiUbuntu } from "react-icons/di";
import { IconContext } from "react-icons";

function HardSkills(props) {
  return (
    <IconContext.Provider
      value={{
        size: "100px",
        className: "iconHardskill",
      }}
    >
      <h2 className="text-center pt-4 pb-3">Hard Skills</h2>

      <Row>
        <Col className="text-center mb-4" xs={6} lg={3}>
          <FaHtml5 />
        </Col>
        <Col className="text-center mb-4" xs={6} lg={3}>
          <FaCss3 />
        </Col>
        <Col className="text-center mb-4" xs={6} lg={3}>
          <IoLogoJavascript />
        </Col>
        <Col className="text-center mb-4" xs={6} lg={3}>
          <BsFillBootstrapFill />
        </Col>
        <Col className="text-center mb-4" xs={6} lg={3}>
          <DiNodejsSmall />
        </Col>
        <Col className="text-center mb-4" xs={6} lg={3}>
          <DiMongodb />
        </Col>
        <Col className="text-center mb-4" xs={6} lg={3}>
          <SiMysql />
        </Col>
        <Col className="text-center mb-4" xs={6} lg={3}>
          <FaReact />
        </Col>
        <Col className="text-center mb-4" xs={6} lg={3}>
          <FaGit />
        </Col>
        <Col className="text-center mb-4" xs={6} lg={3}>
          <DiUbuntu />
        </Col>
        <Col className="text-center mb-4" xs={6} lg={3}>
          <FaPython />
        </Col>
        <Col className="text-center mb-4" xs={6} lg={3}>
          <FaPhp />
        </Col>
        <Col className="text-center mb-4" xs={6} lg={3}>
          <FaDocker />
        </Col>
        <Col className="text-center mb-4" xs={6} lg={3}>
          <FaGithub />
        </Col>
      </Row>
    </IconContext.Provider>
  );
}

export default HardSkills;
