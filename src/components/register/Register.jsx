import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";

export default function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const validationSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const onSubmit = async (values) => {
    setError(null);
    const response = await axios
      .post("http://localhost:5000/api/v1/user/register", values)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
        alert(err.response.data.message);
      });

    if (response) {
      alert("Registered Succesfully");
      navigate("/");
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <div className="container">
      <h1>Register Here</h1>
      <Form className="register" onSubmit={formik.handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstName"
              type="firstName"
              placeholder="Enter First Name"
              value={formik.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              type="lastName"
              placeholder="Enter Last Name"
              value={formik.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="email"
            value={formik.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            value={formik.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Role</Form.Label>
          <Form.Control
            name="Role"
            type="text"
            placeholder="admin, CS, CSManager, HR, FM, PM, SM, subTeam"
            value={formik.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Group>
        <Button variant="light" type="submit" disabled={!formik.isValid}>
          Register
        </Button>
        <h6>
          Already Registered? <Link to="/Login">Login</Link>
        </h6>
      </Form>
    </div>
  );
}
