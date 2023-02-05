import React, { useRef, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import emailjs from "@emailjs/browser";

function Contact(props) {
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [answerForm, setAnswerForm] = useState({
    display: false,
    error: false,
    message: "",
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSendingEmail(true);
    setAnswerForm("");

    emailjs
      .sendForm(
        "service_q7q4m9w",
        "template_t3p4hvo",
        form.current,
        "raSw_9OqyRoiJ3YY2"
      )
      .then(
        (result) => {
          setAnswerForm({
            display: true,
            error: false,
            message:
              "I received your message. I will answer you as soon as possible.",
          });
        },
        (error) => {
          setAnswerForm({
            display: true,
            error: true,
            message: "An error occurred. Please try later.",
          });
        }
      )
      .finally(() => {
        setIsSendingEmail(false);
        e.target.reset();
      });
  };
  return (
    <Container id="contact">
      <h2 className="text-center">
        C
        {isSendingEmail ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          "0"
        )}
        NTACT ME
      </h2>

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={7}
                placeholder="Message"
                name="message"
                required
              />
            </Form.Group>
            <Button variant="primary w-100" type="submit">
              Send
            </Button>
          </Form>

          {answerForm.display && (
            <Alert
              variant={answerForm.error ? "warning" : "primary"}
              className="mt-3"
            >
              {answerForm.message}
            </Alert>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Contact;
