import React from "react";
import Card from "react-bootstrap/Card";

function ProyectCard(props) {
  const { nameImage, name, type, technologies, urlGithub, urlDeploy } = props;
  return (
    <Card>
      <Card.Link href={urlDeploy} target="_blank">
        <Card.Img
          variant="top"
          src={require(`../assets/images/projects/${nameImage}.png`)}
        />
      </Card.Link>
      <Card.Body>
        <Card.Title>{type}</Card.Title>
        <Card.Text>{name}</Card.Text>
        <Card.Link
          href={urlGithub}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          Repo Github
        </Card.Link>
        <Card.Link href={"#"} style={{ textDecoration: "none" }}>
          Details
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProyectCard;
