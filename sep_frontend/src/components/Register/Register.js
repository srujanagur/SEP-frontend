import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "./Register.css";

export default function Register({ setUser }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });
  const [errors, setErrors] = useState([]);

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:5000/api/v1/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then(setUser);
        navigate("/");
        setFormData({
          email: "",
          password: "",
        });
      } else {
        res.json().then((errorResponse) => setErrors(errorResponse.errors));
      }
    });
  }

  return (
    <div className="register_main">
      <h1>Register Here</h1>
      <Form className="register" onSubmit={handleSubmit} id="myForm">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstName"
              type="firstName"
              placeholder="Enter First Name"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              type="lastName"
              placeholder="Enter Last Name"
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {errors.length > 0 ? (
            <div className="error-container">
              {errors.map((error) => (
                <p className="error" key={error}>
                  {error}
                </p>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Role</Form.Label>
            <Form.Control type="role" name="role" onChange={handleChange} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit" form="myForm">
          Submit
        </Button>
      </Form>
    </div>
  );
}
