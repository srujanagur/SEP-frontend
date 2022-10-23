import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./Login.css";

export default function Login() {
  //   const [data, setData] = useState({
  //     email: "",
  //     password: "",
  //   });

  //   const handleChange = (e) => {
  //     const value = e.target.value;
  //     setData({
  //       ...data,
  //       [e.target.name]: value,
  //     });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const userData = {
  //       email: data.email,
  //       password: data.password,
  //     };
  //     axios
  //       .post("http://localhost:5000/api/v1/user/login", userData)
  //       .then((response) => {
  //         console.log(response.status);
  //         console.log(response.data.token);
  //       });
  //   };

  //   return (
  //     <div>
  //       <h1>Login Account</h1>
  //       <form onSubmit={handleSubmit}>
  //         <label htmlFor="email">
  //           Email
  //           <input
  //             type="email"
  //             name="email"
  //             value={data.email}
  //             onChange={handleChange}
  //           />
  //         </label>
  //         <label htmlFor="password">
  //           Password
  //           <input
  //             type="password"
  //             name="password"
  //             value={data.password}
  //             onChange={handleChange}
  //           />
  //         </label>
  //         <button type="submit">Login</button>
  //       </form>
  //     </div>
  //   );
  // }

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/user/login", {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        localStorage.setItem("token", res);
        navigate("/dashboard");
      })
      .catch((err) => console.error(err));
  };
  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };
  return (
    <div className="main">
      <h1>Login form</h1>
      <Form className="login-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={values.showPass ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setValues({ ...values, pass: e.target.value })}
          />
          <Button
            onClick={handlePassVisibilty}
            aria-label="toggle password"
            edge="end"
          >
            {values.showPass ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
          </Button>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Link to="/Home">Login</Link>
        <div className="right">
          <h6>
            If you are not Registered?<Link to="/Register">Sign up</Link>
          </h6>
        </div>
      </Form>
    </div>
  );
}
