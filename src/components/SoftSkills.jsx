import React from "react";
import { Container } from "react-bootstrap";

function SoftSkills(props) {
  return (
    <>
      <h2 className="text-center pt-4 pb-3">Soft Skills</h2>
      <ul className="d-inline-block ms-3 mb-5 ms-lg-0 softSkills-list">
        <li className="p-2">WILLINGNESS AND PASSION TO LEARN</li>
        <li className="p-2">PATIENCE</li>
        <li className="p-2">EMPATHY</li>
        <li className="p-2">TEAMWORK</li>
      </ul>
    </>
  );
}

export default SoftSkills;
