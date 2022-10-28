import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useDispatch } from "react-redux";

import { login } from "../../redux/actions/userActions";

import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./Login.css";

export default function Login() {
  const dispatch = useDispatch();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
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

  // const [values, setValues] = useState({
  //   email: "",
  //   password: "",
  // });
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:5000/api/v1/user/login", {
  //       email: values.email,
  //       password: values.password,
  //     })
  //     .then((res) => {
  //       localStorage.setItem("token", res);
  //       navigate("/dashboard");
  //     })
  //     .catch((err) => console.error(err));
  // };

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };
  const handlePassVisibilty = () => {
    setLoginPassword({
      ...loginPassword,
      showPass: !loginPassword.showPass,
    });
  };
  return (
    <div className="main">
      <h1>Login form</h1>
      <Form className="login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={loginEmail}
            onChange={(e) => {
              e.preventDefault();
              setLoginEmail(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={loginPassword.showPass ? "text" : "password"}
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => {
              e.preventDefault();
              setLoginPassword(e.target.value);
            }}
          />
          <Button
            onClick={handlePassVisibilty}
            aria-label="toggle password"
            edge="end"
          >
            {loginPassword.showPass ? (
              <BsFillEyeFill />
            ) : (
              <BsFillEyeSlashFill />
            )}
          </Button>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        {/* <Button variant="light" onClick={loginSubmit}>
          Login
        </Button> */}

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
