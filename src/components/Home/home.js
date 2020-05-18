import React from "react";
import { Row, Form, Col, Container, Button, Image } from "react-bootstrap";
function home() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <h2> Tranlater Community</h2>
          <p>
            There are <strong>150</strong> translaters in <strong>10</strong>{" "}
            languages
          </p>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Form.Label>From</Form.Label>
              <Form.Control as="select" size="sm">
                <option>Vietnamese</option>
                <option>Enlish</option>
                <option>Japanese</option>
                <option>Chinese</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustomSizeLg">
              <Form.Label>To</Form.Label>
              <Form.Control as="select" size="sm">
                <option>Vietnamese</option>
                <option>Enlish</option>
                <option>Japanese</option>
                <option>Chinese</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <Button variant="primary" size="lg" block>
            Let's connect
          </Button>
        </Col>

        {/* right side */}
        <Col md={8}>
          <Row>
            <Col>
              <Image src="https://picsum.photos/171/180" roundedCircle />
              <p>Wayne Russell</p>
            </Col>
            <Col>
              <Image src="https://picsum.photos/171/180" roundedCircle />
              <p>Wayne Russell</p>
            </Col>

            {/*  */}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default home;
