import React from "react";
import Modal from "react-bootstrap/Modal";
function ModalDetails({ show, handleClose, technologies, name }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h5>TECHNOLOGIES</h5>
        {technologies.map((tech) => tech + " - ")}
      </Modal.Body>
    </Modal>
  );
}

export default ModalDetails;
