import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BsFillBootstrapFill } from "react-icons/bs";
import { DiNodejsSmall } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGit } from "react-icons/fa";

function HardSkills(props) {
  return (
    <>
      <h2 className="text-center pt-4 pb-3">Hard Skills</h2>

      <Row>
        <Col className="text-center mb-4" xs={6} lg={3}>
          <FaHtml5 size={100} />
        </Col>
        <Col className="text-center mb-4" xs={6} lg={3}>
          <FaCss3 size={100} />
        </Col>
        <Col className="text-center mb-4" xs={6} lg={3}>
          <IoLogoJavascript size={100} />
        </Col>
        <Col className="text-center mb-4" xs={6} lg={3}>
          <BsFillBootstrapFill size={100} />
        </Col>
        <Col className="text-center mb-4" xs={6} lg={3}>
          <DiNodejsSmall size={100} />
        </Col>
        <Col className="text-center mb-4" xs={6} lg={3}>
          <DiMongodb size={100} />
        </Col>
        <Col className="text-center mb-4" xs={6} lg={3}>
          <SiMysql size={100} />
        </Col>
        <Col className="text-center mb-4" xs={6} lg={3}>
          <FaReact size={100} />
        </Col>
        <Col className="text-center mb-4" xs={6} lg={3}>
          <FaGit size={100} />
        </Col>
      </Row>
    </>
  );
}

export default HardSkills;
