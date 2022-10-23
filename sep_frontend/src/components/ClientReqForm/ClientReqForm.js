import React from "react";

import { Link } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";

export default function ClientReqForm() {
  return (
    <div>
      <h1>Client Request Form</h1>
      <Form className="register" id="myForm">
        <Container>
          <Form className="new-event-form">
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                client record number
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="text" placeholder="e12488" />
              </Col>
              <Form.Label column sm={2}>
                Expected Number
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="number" placeholder="200" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                Client Name
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="text" placeholder="college of music" />
              </Col>
              <Form.Label column sm={2}>
                Planned Budget
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="number" placeholder="5000sek" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Event type
              </Form.Label>

              <Col sm={4}>
                <Form.Control type="name" placeholder="work shop" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Description
              </Form.Label>

              <Col sm={4}>
                <Form.Control
                  type="name"
                  placeholder="workshop about music history"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Row>
                <Col>
                  <Form.Label column sm={2}>
                    From
                  </Form.Label>

                  <Form.Control type="date" />
                </Col>
                <Col>
                  <Form.Label column sm={2}>
                    To
                  </Form.Label>
                  <Form.Control type="date" />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Decorations
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="number" placeholder="decorations" />
              </Col>
              <Form.Label column sm={2}>
                Food/drinks
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="number" placeholder="food/drinks" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Filming/Photos
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="number" placeholder="Filming/Photos" />
              </Col>
              <Form.Label column sm={2}>
                Music
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="number" placeholder="Music" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Posters/Art Work
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="number" placeholder=" Posters/Art Work" />
              </Col>
              <Form.Label column sm={2}>
                Computer Related Issues
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="number"
                  placeholder="Computer Related Issues"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Other Needs
              </Form.Label>

              <Col sm={10}>
                <Form.Control type="name" />
              </Col>
            </Form.Group>
            <Button variant="light">
              <Link to="/Home">submit</Link>
            </Button>
          </Form>
        </Container>
      </Form>
    </div>
  );
}
