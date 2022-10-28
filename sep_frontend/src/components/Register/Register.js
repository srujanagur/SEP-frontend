import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { register, clearErrors } from "../../redux/actions/userActions";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "./Register.css";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, isAuthenticated } = useSelector((state) => state.userReducer);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { firstName, lastName, email, password } = user;
  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("firstName", firstName);
    myForm.set("lastName", lastName);
    myForm.set("email", email);
    myForm.set("password", password);

    dispatch(register(myForm));
  };
  // Taking input
  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate("/Home");
    }
  }, [dispatch, error, isAuthenticated, navigate]);

  // const navigate = useNavigate();

  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   role: "",
  // });
  // const [errors, setErrors] = useState([]);

  // function handleChange(e) {
  //   const key = e.target.name;
  //   const value = e.target.value;
  //   setFormData({ ...formData, [key]: value });
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch("http://localhost:5000/api/v1/user/register", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   }).then((res) => {
  //     if (res.ok) {
  //       res.json().then(setUser);
  //       navigate("/");
  //       setFormData({
  //         email: "",
  //         password: "",
  //       });
  //     } else {
  //       res.json().then((errorResponse) => setErrors(errorResponse.errors));
  //     }
  //   });
  // }

  return (
    <div className="register_main">
      <h1>Register Here</h1>
      <Form className="register">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstName"
              type="firstName"
              placeholder="Enter First Name"
              value={firstName}
              onChange={registerDataChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              type="lastName"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={registerDataChange}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={registerDataChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={registerDataChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="light" type="submit" onClick={registerSubmit}>
          Register
        </Button>
        <h6>
          Already Registered? <Link to="/Login">Login</Link>
        </h6>
      </Form>
    </div>
  );
}
