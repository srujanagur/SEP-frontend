import React from "react";
import { useState } from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";

export default function RecruitementReqForm({ setForm }) {
  const [formData, setFormData] = useState({
    contractType: "",
    RequestingDepartment: "",
    yearsOfExperience: 0,
    jobTitle: "",
    jobDescription: "",
  });

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:5000/api/v1/newRecReq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then(setForm);
        setFormData({
          contractType: "",
          RequestingDepartment: "",
          yearsOfExperience: 0,
          jobTitle: "",
          jobDescription: "",
        });
      } else {
        res.json().then(e);
      }
    });
  }
  return (
    <div>
      <h1>Recruitement Request Form</h1>
      <Form
        className="financialform"
        onSubmit={handleSubmit}
        id="myRecruiementForm"
      >
        <Form className="radio-info">
          <h5>Contract type</h5>
          {["radio"].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Container>
                <Row>
                  <Col>
                    <Form.Check
                      inline
                      name="contractType"
                      type={type}
                      id={`default-${type}-Full time`}
                      label={`Full time`}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      inline
                      name="contractType"
                      type={type}
                      id={`default-${type}-Part time`}
                      label={`Part time`}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          ))}
        </Form>

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
            Years of Experience:
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              name="yearsOfExperience"
              type="text"
              placeholder="3 years minimum"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={4}>
            Job title:
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              name="jobTitle"
              type="text"
              placeholder="Grafic Designer"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={4}>
            Job description:
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={handleChange}
              name="jobDescription"
            />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit" form="myRecruiementForm">
          Submit
        </Button>
      </Form>
    </div>
  );
}
