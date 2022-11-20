import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contact(props) {
  return (
    <Container id="contact" className=" pt-4 pb-3">
      <h2 className="text-center">CONTACT</h2>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={3} placeholder="Message" />
            </Form.Group>
            <Button variant="primary w-100" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
