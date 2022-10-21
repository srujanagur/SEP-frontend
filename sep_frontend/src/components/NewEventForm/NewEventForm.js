import React from "react";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "./NewEventForm.css";

export default function NewEventForm({ setForm }) {
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
      <h1>New EventForm</h1>
      <Form className="new-event-form">
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Record number
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="number" placeholder="enter record number" />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Client name
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="name" placeholder="enter name" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Event type
          </Form.Label>

          <Col sm={10}>
            <Form.Control type="name" placeholder="enter type" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
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

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={4}>
            Expected number of attendees:
          </Form.Label>

          <Col sm={6}>
            <Form.Control type="name" placeholder="enter number of attendees" />
          </Col>
        </Form.Group>

        <Form className="Categories">
          {["checkbox"].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Container>
                <Row>
                  <Col>
                    <Form.Check
                      type={type}
                      id={`default`}
                      label={`Decorations`}
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      type={type}
                      id={`default`}
                      label={`Breakfast,lunch,dinner`}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Check type={type} id={`default`} label={`parties`} />
                  </Col>
                  <Col>
                    <Form.Check
                      type={type}
                      id={`default`}
                      label={`Soft/hot drinks`}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Check
                      type={type}
                      id={`default`}
                      label={`photos/filming`}
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          ))}
        </Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={4}>
            Expected budget:
          </Form.Label>

          <Col sm={6}>
            <Form.Control type="name" placeholder="" />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}
