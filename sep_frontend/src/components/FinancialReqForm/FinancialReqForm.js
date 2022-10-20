import React from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";

import "./FinancialReqForm.css";

export default function FinancialReqForm() {
  return (
    <div>
      <h1>Financial Request Form</h1>
      <Form className="financialform">
        <Form className="radio-info">
          <h5>Requesting department</h5>
          {["radio"].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Container>
                <Row>
                  <Col>
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`default-${type}-Administration`}
                      label={`Administration`}
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`default-${type}-Services`}
                      label={`Services`}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`default-${type}-Production`}
                      label={`Production`}
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`default-${type}-Financial`}
                      label={`Financial`}
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          ))}
        </Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={4}>
            Project reference:
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" placeholder="e12488" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={4}>
            Required amount:
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="number" placeholder="5000" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={4}>
            Reason:
          </Form.Label>
          <Col sm={8}>
            <Form.Control as="textarea" rows={3} />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
