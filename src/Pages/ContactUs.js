import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ContactUs() {
  function submit() {
    return alert("Your message was submitted successfully :)");
  }
  return (
    <Container>
      <h1>Contact us</h1>
      <Row>
        <Col>
          <h2>Name:</h2>
          <input type="text"></input>
        </Col>
        <Col>
          <h2>Email:</h2>
          <input type="text"></input>
        </Col>
      </Row>
      <h2>Today's date:</h2>
      <input type="date"></input>
      <h2>Message:</h2>
      <input type="text"></input>
      <button className="button" onClick={submit}>Submit</button>
    </Container>
  );
}

export default ContactUs;
