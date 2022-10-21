import React from "react";
import { useState } from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";

import "./FinancialReqForm.css";

export default function FinancialReqForm({ setForm }) {
  const [formData, setFormData] = useState({
    RequestingDepartment: "",
    projectReference: "",
    requiredAmount: 0,
    reason: "",
  });

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:5000/api/v1/newFinancialRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then(setForm);
        setFormData({
          RequestingDepartment: "",
          projectReference: "",
          requiredAmount: 0,
          reason: "",
        });
      } else {
        res.json().then(e);
      }
    });
  }
  return (
    <div>
      <h1>Financial Request Form</h1>
      <Form
        className="financialform"
        onSubmit={handleSubmit}
        id="myfinancialForm"
      >
        <Form className="radio-info">
          <h5>Requesting department</h5>
          {["radio"].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Container>
                <Row>
                  <Col>
                    <Form.Check
                      inline
                      name="RequestingDepartment"
                      type={type}
                      id={`default-${type}-Administration`}
                      label={`Administration`}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      inline
                      name="RequestingDepartment"
                      type={type}
                      id={`default-${type}-Services`}
                      label={`Services`}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Check
                      inline
                      name="RequestingDepartment"
                      type={type}
                      id={`default-${type}-Production`}
                      label={`Production`}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      inline
                      name="RequestingDepartment"
                      type={type}
                      id={`default-${type}-Financial`}
                      label={`Financial`}
                      onChange={handleChange}
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
            <Form.Control
              name="projectReference"
              type="text"
              placeholder="e12488"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={4}>
            Required amount:
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              name="requiredAmount"
              type="number"
              placeholder="5000"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={4}>
            Reason:
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              as="textarea"
              name="reason"
              rows={3}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit" id="myfinancialForm">
          Submit
        </Button>
      </Form>
    </div>
  );
}
