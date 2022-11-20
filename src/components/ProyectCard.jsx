import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ModalDetails from "./ModalDetails";

function ProyectCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { nameImage, name, type, technologies, urlGithub, urlDeploy } = props;
  return (
    <>
      <Card border="primary">
        <Card.Link href={urlDeploy} target="_blank">
          <Card.Img
            variant="top"
            src={require(`../assets/images/projects/${nameImage}.png`)}
          />
        </Card.Link>
        <Card.Body>
          <Card.Title>{type}</Card.Title>
          <Card.Text>{name}</Card.Text>
          <button className="btn btn-primary me-2" onClick={handleShow}>
            Details
          </button>
          <Card.Link
            href={urlGithub}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Repo Github
          </Card.Link>
        </Card.Body>
      </Card>
      <ModalDetails
        show={show}
        handleClose={handleClose}
        technologies={technologies}
        name={name}
      />
    </>
  );
}

export default ProyectCard;
